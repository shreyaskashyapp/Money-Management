import react, { useState } from 'react'
import axios from 'axios';

export default function Form(props) {
  const [name, setName] = useState('');
  const [type, setType] = useState('investments');
  const [amount, setAmount] = useState('');

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleTypeChange(event) {
    console.log(event.target.value)
    setType(event.target.value)
  }

  function handleAmountChange(event) {
    console.log(event.target.value);
    setAmount(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const obj={
      eAmount:amount,
      eName:name,
      eType:type
    }
    axios.post('http://localhost:8080/expenses/add',obj)
      .then(res => {
                    props.formClick()})
      .catch(err => console.log(err));
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Type:
        <select value={type} onChange={handleTypeChange}>
          <option value="investments">Investments</option>
          <option value="savings">Savings</option>
          <option value="expenses">Expenses</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label>
        Amount:
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={handleAmountChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
