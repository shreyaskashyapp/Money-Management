import React, { useState,useEffect } from "react";
import axios from 'axios'

const ToggleSwitch = ({ label }) => {
  const [mode,setMode]=useState(false)
  const [num,setNum]=useState(1)
  async function fetchData() {
    const res = await axios.get('http://localhost:8080/mode/')
    try {
      console.log(res.data)
      return res.data
  
    } catch (error) {
      console.log(error)
    }
  
  }
  
  useEffect(() => {
    fetchData()
      .then(datas => {
        setMode(datas[0].state)
      })
      console.log(num)
  }, [num])

  const [isChecked, setIsChecked] = useState(mode);
  const handleChange = () => {
    console.log('CLICKED')
    setIsChecked(prev =><isChecked></isChecked>);
    setNum(Math.random())
    const obj={
      state:isChecked
    }
    axios.post('http://localhost:8080/mode/update/63d6439a12069293fa611305',obj)
      .then(res => console.log(res))
      .catch(err=>err);
  };

  useEffect(() => {
    if (!isChecked) {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
    } else {
      document.body.style.backgroundColor = '#222';
      document.body.style.color = '#fff';
    }
  }, [isChecked]);
  return (
    <div className="container">
      {label}{" "}
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name={label}
          id={label}
          checked={isChecked}
          onChange={handleChange}
        />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;