import react from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <Link to='/'>
        <li>
          Home
        </li>
      </Link>

      <Link to='/reports'>
        <li>
          Reports
        </li>
      </Link>

      <Link to='/visualise'>
        <li>
          Visualise
      </li>
      </Link>

      <Link to ='/settings'>
        <li>
          Settings
      </li>
      </Link>
    </nav>
  )
}