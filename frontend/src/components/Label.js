import react from 'react'

export default function Labels(props){
  console.log(props)
  return(
    <div className ='labels'>
      <div className={`box-${props.color}`}>
      </div>
      <h4 className="label-text">{props.name}</h4>
      <h4>{props.amount}</h4>
    </div>
  )
}