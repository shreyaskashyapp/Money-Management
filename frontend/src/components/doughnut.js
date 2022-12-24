import react from 'react'
import { Chart, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement);

const config = {
  data: {
    datasets: [{
        data: [20, 50, 60, 10 ],
        backgroundColor: ['rgb(255,105,180)','rgb(0,255,255)','rgb(255, 99, 71)','rgb(255,255,0)']
      }],
    hoveroffset: 100
  },
  options:{
    cutout:150
  }
}

export default function Graph() {
  return (
    <div className="doughnut">
      <Doughnut {...config}></Doughnut>
      <h4 className='total'>Total {}$</h4>
    </div>
  )
}