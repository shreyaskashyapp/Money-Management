import react from 'react'

export default function Expenses(props) {
  console.log(props)
  return (
    <div className="expenses">
     <div>
      <h4>{props.name}</h4>
     </div>
  </div>
  )
}