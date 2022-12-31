import react from 'react'

export default function Expenses(props) {
  console.log(props)
  return (
    <div className="expenses">
     <div className='e-items'>
      <h4>{props.name}</h4>
      <h4>{props.type}</h4>
      <h4>{props.amount}</h4>
     </div>
  </div>
  )
}