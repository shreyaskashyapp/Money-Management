import react, { useState,useEffect } from 'react'
import { Chart, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
Chart.register(ArcElement);


export default function Graph(props) {
  const [data, setData] = useState([0, 40, 60, 0])

  useEffect(() => {
    let Other = 0;
    let Investments = 0
    let Expenses = 0
    let Savings = 0
    for (let i = 0; i < props.data.length; i++) {
      // console.log(props.data[i].eType)
      if (props.data[i].eType === 'other') {
        Other += props.data[i].eAmount;
      }
      else if (props.data[i].eType === 'investments') {
        Investments += props.data[i].eAmount;
      }
      else if (props.data[i].eType === 'expenses') {
        Expenses += props.data[i].eAmount;
      }
      else {
        Savings += props.data[i].eAmount;
      }
    }
    const total = Other + Investments + Expenses + Savings
    // console.log(Investments, Savings, Expenses, Other, total)
    let a = parseInt(Investments / total * 100)
    let b = parseInt(Savings / total * 100)
    let c = parseInt(Expenses / total * 100)
    let d = parseInt(Other / total * 100)
    setData([a, b, c, d])
  }, [props.data])


  const config = {
    data: {
      datasets: [{
        data: data,
        backgroundColor: ['rgb(255,105,180)', 'rgb(0,255,255)', 'rgb(255, 99, 71)', 'rgb(255,255,0)']
      }],
      hoveroffset: 100
    },
    options: {
      cutout: 150
    }
  }
  return (

    <div className="doughnut">
      <Doughnut {...config}></Doughnut>
      <h4 className='total'>Total {}$</h4>
    </div>
  )
}