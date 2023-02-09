import React, { useState, useEffect } from 'react';
import GoalsForm from './goalsForm';
import axios from 'axios'

export default function Goals() {
  const [data, setData] = useState([]);
  var goals=1;

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('http://localhost:8080/goals');
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  console.log(data);
  let investment = 0;
  let expenses = 0;
  let savings = 0;
  let other = 0;
  if (data.length > 0) {
    investment = data[0].investment;
    expenses = data[0].expenses;
    savings = data[0].savings;
    other = data[0].other;
  }

  if (investment === 0 && expenses === 0 && savings === 0 && other === 0) {
     goals=0
    //  alert('Looks like you havent entered your goals :D!\nplease enter')
  }
  console.log(investment);
  return (
    <div>
      {!goals&&<GoalsForm />}
    </div>
  );
}
