import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/home"
import Reports from "./components/reports"
import Visualise from "./components/visualise"
import Settings from "./components/settings"
import Navbar from "./components/navbar"
import Accounts from "./components/accounts"
import Logout from "./components/logout"
import Darkmode from "./components/darkmode"
import react, { useState, useEffect } from 'react'
import "./App.css"
import axios from 'axios'

// const obj={eName:'test',eType:'Food',eAmount:'300'};
// axios.post('http://localhost:8080/expenses/add',obj)
//   .then(res => console.log(res.data))
//   .catch(err => console.log(err))



function App() {
  const [data, setData] = useState([])

  async function fetchData() {
    const res = await axios.get('http://localhost:8080/expenses/')
    try {
      return res.data

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    fetchData()
      .then(datas => {
        setData(datas)
      })
  }, [])
  return (
    <Router>
      <div className="nav-container">
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/visualise' element={<Visualise data={data} />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/settings' exact element={<Settings />} />
          <Route path='/settings/accounts' exact element={<Accounts />} />
          <Route path='/settings/logout' exact element={<Logout />} />
          <Route path='/settings/darkmode' exact element={<Darkmode />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
