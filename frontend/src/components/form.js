import react,{useState} from 'react'


export default function Form(){
  const [value,setValue]= useState('')

  function handleChange(event){
    setValue(event.target.value)
  }
  return(
    <div className="form">
      <form>
        <label>
          name:
          <input type="text" value={value} onChange={handleChange} />
        </label>
      </form>
    </div>
  )
}