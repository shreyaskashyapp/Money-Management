import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/home"
import Reports from "./components/reports"
import Visualise from "./components/visualise"
import Settings from "./components/settings"
import Navbar from "./components/navbar"
import react from 'react'
import "./App.css"
import axios from 'axios'

console.log(Navbar)


const obj={username:'frontend'};
axios.post('http://localhost:6000/users/add',obj)
  .then(res => console.log(res.data))
  .catch(err => console.log(err))

function App() {
  return (
    <Router>
      <div className="nav-container">
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />}/>
            <Route path='/reports' element={<Reports />}/>
            <Route path='/visualise' element={<Visualise />}/>
            <Route path='/settings' element={<Settings />}/>
          </Routes>
      </div>
    </Router>  
  );
}

export default App;
