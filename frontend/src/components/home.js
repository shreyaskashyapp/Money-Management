import react from 'react'
import Doughnut from './doughnut'
import Label from './Label'
export default function home() {
  return (
    <div>
      <div className='combo'>
        <Doughnut />
        <div className='label-container'>
          <Label />
          <Label />
        </div>
      </div>
    </div>
  )
}
