import React, { useState } from 'react';
import axios from 'axios';
export default function GoalsForm() {
  const [currentField, setCurrentField] = useState('investment');
  const [investment, setInvestment] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [savings, setSavings] = useState(0);
  const [other, setOther] = useState(0);

  function handleSubmit() {
    switch (currentField) {
      case 'investment':
        setCurrentField('expenses');
        break;
      case 'expenses':
        setCurrentField('savings');
        break;
      case 'savings':
        setCurrentField('other');
        break;
      case 'other':
        // Submit the final form here
        const obj={
          investment:investment,
          expenses:expenses,
          savings:savings,
          other:other
        }

        axios.post('http://localhost:8080/goals/add',obj)
          .then(()=> console.log('added succesfully'))
          .catch(err => console.log(err));

        window.location.reload();
        break;
      default:
        break;
    }
  }

  return (
    <div className="form-container">
      Enter your goals to use our visualise featue :D!
      {currentField === 'investment' && (
        <div className="investment-form">
          <h2 className="form-header">Investment</h2>
          <input
            className="form-input"
            type="number"
            placeholder="How much money are you planning to Invest?"
            value={investment}
            onChange={e => setInvestment(e.target.value)}
          />
          <button className="form-button" onClick={handleSubmit}>Next</button>
        </div>
      )}
      {currentField === 'expenses' && (
        <div className="investment-form">
          <h2 className="form-header">Expenses</h2>
          <input
            className="form-input"
            type="number"
            placeholder="How much money are you willing to Expend?"
            value={expenses}
            onChange={e => setExpenses(e.target.value)}
          />
          <button className="form-button" onClick={handleSubmit}>Next</button>
        </div>
      )}
      {currentField === 'savings' && (
        <div className="investment-form">
          <h2 className="form-header">Savings</h2>
          <input
            className="form-input"
            type="number"
            placeholder="How much money are you planning to Save?"
            value={savings}
            onChange={e => setSavings(e.target.value)}
          />
          <button className="form-button" onClick={handleSubmit}>Next</button>
        </div>
      )}
      {currentField === 'other' && (
        <div className="investment-form">
          <h2 className="form-header">Other</h2>
          <input
            className="form-input"
            type="number"
            placeholder="How much money are you planning to let go lol?"
            value={other}
            onChange={e => setOther(e.target.value)}
          />
          <button className="form-button" onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>

  );
}
