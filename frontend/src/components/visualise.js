import React,{useState,useEffect} from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import axios from 'axios';

export default function Visualise(props) {
  var Other = 0;
  var Investments = 0
  let Expense = 0
  let Savings = 0

  const[gdata,setgData]=useState([])
  const[re,setRe]=useState()
  var iv=0;
  var ep=0;
  var sa=0;
  var ot=0;
  for (let i = 0; i < props.data.length; i++) {
    if (props.data[i].eType === 'other') {
      Other += props.data[i].eAmount;
    }
    else if (props.data[i].eType === 'investments') {
      Investments += props.data[i].eAmount;
    }
    else if (props.data[i].eType === 'expenses') {
      Expense += props.data[i].eAmount;
    }
    else {
      Savings += props.data[i].eAmount;
    }
  }
  useEffect(()=>{
    async function fetchData2() {
      try {
        const res = await axios.get('http://localhost:8080/goals');
        setgData(res.data)
      } catch (err) {
        console.log(err);
      }
    }

    fetchData2()
  },[])
  console.log(props.data)
  
  try {
    console.log(gdata[0].investment)
  } catch (error) {
    console.log(error)
  }

try {
  if(gdata[0].investment!=undefined){
    iv=gdata[0].investment
    console.log(gdata[0].investment); 
  }
} catch (error) {
  console.log(error)
}

try {
  if(gdata[0].investment!=undefined){
    ep=gdata[0].expenses 
  }
} catch (error) {
  console.log(error)
}

try {
  if(gdata[0].savings!=undefined){
    sa=gdata[0].savings
    console.log(gdata[0].investment); 
  }
} catch (error) {
  console.log(error)
}

try {
  if(gdata[0].other!=undefined){
    ot=gdata[0].other
    console.log(gdata[0].investment); 
  }
} catch (error) {
  console.log(error)
}
console.log(iv)
  const Investmentdata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Expected',
        data: [0,iv,iv,iv],
        borderColor: '#00BFFF',
        fill: false
      },

      {
        label: 'Current',
        data: [0, Investments, Investments, Investments],
        borderColor: '#FF69B4',
        fill: true
      }
    ]
  };

  const Otherdata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Expected',
        data: [0, ot, ot, ot],
        borderColor: '#00BFFF',
        fill: false
      },

      {
        label: 'Current',
        data: [0, Other, Other, Other],
        borderColor: '#FFFF00',
        fill: true
      }
    ]
  };

  const Savingsdata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Expected',
        data: [0, sa, sa, sa],
        borderColor: '#00BFFF',
        fill: false
      },

      {
        label: 'Current',
        data: [0, Savings, Savings, Savings],
        borderColor: '00FFFF',
        fill: true
      }
    ]
  };

  const Expenesedata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Expected',
        data: [0, ep, ep, ep],
        borderColor: '#00BFFF',
        fill: false
      },

      {
        label: 'Current',
        data: [0, Expense, Expense, Expense],
        borderColor: '#FF0000',
        fill: true
      }
    ]
  };

  return (
    <div className='visualise'>
      <div className="line chart-container">
        <Line data={Investmentdata} />
        <div className="chart-header">
          <h2 className="chart-title">Investments</h2>
        </div>
        <div className="chart-legend">
        <h5>Expected:100</h5>
        <h5>Spent:{Investments}</h5>
      </div>
      </div>

      <div className="line chart-container">
        <Line data={Savingsdata} />
        <div className="chart-header">
          <h2 className="chart-title">Savings</h2>
        </div>
        <div className="chart-legend">
        <h5>Expected:100</h5>
        <h5>Spent:{Savings}</h5>
      </div>
      </div>

      <div className="line chart-container">
        <Line data={Expenesedata} />
        <div className="chart-header">
          <h2 className="chart-title">Expenses</h2>
        </div>
        <div className="chart-legend">
          <h5>Expected:100</h5>
          <h5>Spent:{Expense}</h5>
        </div>
      </div>

      <div className="line chart-container">
        <Line data={Otherdata} />
        <div className="chart-header">
          <h2 className="chart-title">Other</h2>
        </div>
        <div className="chart-legend">
        <h5>Expected:100</h5>
        <h5>Spent:{Other}</h5>
      </div>
      </div>
    </div>
  );
}