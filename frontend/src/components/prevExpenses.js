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
      <h4>{props.name.toUpperCase()}</h4>
      <h4>{props.type.toUpperCase()}</h4>
      <h4>{props.amount}</h4>
      <img className='img'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXffnjeQCxXaaWbo7X9xM5Hd_rtaxHQJNGy70e3wE&s" alt=""/>
     </div>
  </div>
  )
}