import react, { useState, useEffect } from 'react'
import Doughnut from './doughnut'
import Label from './Label'
import Form from './form'
import Expenses from './prevExpenses'
import axios from 'axios'

const data = [{ name: 'Investments', color: 'pink', amount: 20 }, { name: 'Savings', color: 'cyan', amount: 50 },
{ name: 'Expenenses', color: 'red', amount: 60 }, { name: 'Other', color: 'yellow', amount: 10 },]

const Labels = data.map((items) => <Label name={items.name} color={items.color} amount={items.amount} />)

export default function Home() {
  const [showForm, setShowForm] = useState(false)
  const [btnText, setBtntext] = useState('Add New Expense')
  const [edata, setEdata] = useState([])
  const [expenses ,setExpenses] = useState([])

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
  }, [])
  console.log(edata)

  // edata.map(items => <Expenses name={items.eName}/>)
  const e= edata.map((items) => <Expenses name={items.eName}/> )
  function toggleForm() {
    console.log("pressed")
    setShowForm(prev => !prev);
    if (!showForm) {
      setBtntext('Done')
    }
    else {
      setBtntext('Add New Expense')
    }
  }
  return (
    <div className='home'>
      <div className='combo'>
        <Doughnut />
        <div className='label-container'>
          {Labels}
        </div>
      </div>
      <div className="r-box">
        {!showForm ? e : null}
        {showForm ? <Form /> : null}
        <button className="btn" onClick={toggleForm}>{btnText}</button>
      </div>

    </div>
  )
}
