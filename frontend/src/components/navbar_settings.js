import React,{useState,useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios'

export default function Navbar_settings(props) {
  const location = useLocation();
  var a;
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
         a=datas[0].state
      })
  }, [])
  const [mode,setMode]=useState(a)
  console.log(mode)
  return (
    <nav className="navbar-settings">
      <li>
        <Link to="/settings/accounts" className={location.pathname === '/settings/accounts' ? 's-li-active' : mode?'s-li-dark':'s-li'}>Accounts</Link>
      </li>
      <li>
        <Link to="/settings/logout" className={location.pathname === '/settings/logout' ? 's-li-active' : mode?'s-li-dark':'s-li'}>Logout</Link>
      </li>
      <li>
        <Link to="/settings/darkmode" className={location.pathname === '/settings/darkmode' ? 's-li-active' : !mode?'s-li-dark':'s-li'}>Dark Mode</Link>
      </li>
    </nav>
  );
}