import react from 'react'
import { Chart, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement);

const config = {
  data: {
    datasets: [{
        data: [200, 100, 10 ],
        backgroundColor: ['rgb(255,99,132)', 'rgb(54,162,235)', 'rgb(255,205,86)']
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
    </div>
  )
}