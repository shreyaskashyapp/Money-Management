import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

export default function visualise(props) {
  var Other = 0;
  var Investments = 0
  let Expense = 0
  let Savings = 0
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
  console.log(props.data)
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Expected',
        data: [0, 100, 100, 100],
        borderColor: '#00BFFF',
        fill: false
      },

      {
        label: 'Current',
        data: [0, Investments, Investments, Investments],
        borderColor: '#FF1493',
        fill: true
      }
    ]
  };

  return (
    <div className='visualise'>
      <div className="line">
        <Line data={data} />
        <h2>INVESTMENTS</h2>
      </div>
    </div>
  );
}