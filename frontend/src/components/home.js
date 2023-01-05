import react, { useState, useEffect } from 'react'
import Doughnut from './doughnut'
import Label from './Label'
import Form from './form'
import Expenses from './prevExpenses'
import axios from 'axios'

// const data = [{ name: 'Investments', color: 'pink', amount: 20 }, { name: 'Savings', color: 'cyan', amount: 50 },
// { name: 'Expenenses', color: 'red', amount: 60 }, { name: 'Other', color: 'yellow', amount: 10 },]

// const Labels = data.map((items) => <Label name={items.name} color={items.color} amount={items.amount} />)

export default function Home() {
  const [showForm, setShowForm] = useState(false)
  const [btnText, setBtntext] = useState('Add New Expense')
  const [edata, setEdata] = useState([])
  const [re,setRe] = useState('')

  async function fetchData() {
    try {
      const res = await axios.get('http://localhost:8080/expenses');
      return res.data;
    } catch (err) {
      console.log(err);
    }

  }

  useEffect(() => {
    fetchData()
      .then(data => {
        setEdata(data)
      })
    console.log('RENDERED')
  }, [re])
  // console.log(edata)

  var Other = 0;
  var Investments = 0
  let Expense = 0
  let Savings = 0
  for (let i = 0; i < edata.length; i++) {
    if (edata[i].eType === 'other') {
      Other += edata[i].eAmount;
    }
    else if (edata[i].eType === 'investments') {
      Investments += edata[i].eAmount;
    }
    else if (edata[i].eType === 'expenses') {
      Expense += edata[i].eAmount;
    }
    else {
      Savings += edata[i].eAmount;
    }
  }
  const total = Other + Investments + Expense + Savings
  // console.log(Investments, Savings, Expenses, Other, total)
  let a = parseInt(Investments / total * 100)
  let b = parseInt(Savings / total * 100)
  let c = parseInt(Expense / total * 100)
  let d = parseInt(Other / total * 100)
  const newData = [{ name: 'Investments', color: 'pink', amount: a ? a : 0 }, { name: 'Savings', color: 'cyan', amount: b ? b : 0 },
  { name: 'Expenenses', color: 'red', amount: c ? c : 0 }, { name: 'Other', color: 'yellow', amount: d ? d : 0 },]

  async function handleClick(id) {
    try {
      await axios.delete(`http://localhost:8080/expenses/${id}`);
      setRe(Math.random());
    } catch (err) {
      console.log(err);
    }
  }

  let Labels = newData.map((items) => <Label name={items.name} color={items.color} amount={items.amount} />)
  const e = edata.map((items) => <Expenses id={items._id} name={items.eName} type={items.eType} amount={items.eAmount} onclick={handleClick} />)
  function toggleForm() {
    setShowForm(prev => !prev);
    if (!showForm) {
      setBtntext('Done')
    }
    else {
      setBtntext('Add New Expense')
    }
  }

  function handleForm(){
    setRe(Math.random())
    setShowForm(prev => !prev)
    setBtntext('Add New Expense')
  }


  return (
    <div className='home'>
      <div className='combo'>
        <Doughnut data={edata} />
        <div className='label-container'>
          {Labels}
        </div>
      </div>
      <div className="r-box">
        {!showForm ? e : null}
        {showForm ? <Form formClick={handleForm}/> : null}
        <button className="btn" onClick={toggleForm}>{btnText}</button>
      </div>

    </div>
  )
}
