import react from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  return (
    <nav className="nav-bar">
      <Link to='/'>
        <li className={location.pathname === '/' ? 'nav-bar-active' : ''}>
          Home
        </li>
      </Link>

      <Link to='/reports'>
        <li className={location.pathname === '/reports' ? 'nav-bar-active' : ''}>
          Reports
        </li>
      </Link>

      <Link to='/visualise'>
        <li className={location.pathname === '/visualise' ? 'nav-bar-active' : ''}>
          Visualise
      </li>
      </Link>

      <Link to='/settings'>
        <li className={location.pathname === '/settings'?'nav-bar-active':location.pathname === '/settings/accounts' ? 'nav-bar-active' : location.pathname === '/settings/accounts/darkmode'? 'nav-bar-active':location.pathname ==='/settings/accounts/logout'?'nav-bar-active':''}>
          Settings
      </li>
      </Link>
    </nav>
  )
}