import react,{ useState } from 'react'
import axios from 'axios'

export default function Expenses(props) {
  function handleClick(id){
    props.onclick(props.id)
  }

  // console.log(props)
  return (
    <div className="expenses" onClick={()=>handleClick(props.id)}>
     <div className='e-items'>
      <h4>{props.name}</h4>
      <h4>{props.type}</h4>
      <h4>{props.amount}</h4>
     </div>
  </div>
  )
}