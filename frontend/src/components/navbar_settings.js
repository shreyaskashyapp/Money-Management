import react from 'react'
import { Link } from 'react-router-dom'

export default function Navbar_settings() {
    return (
        <nav className="navbar-settings">

            <Link to='/settings/accounts'>
                <li className='s-li'>
                    Accounts
                </li>
            </Link>

            <Link to='/settings/logout'>
                <li className='s-li'>
                    Logout
                </li>
            </Link>

            <Link to='/settings/darkmode'>
                <li className='s-li'>
                    Dark Mode
                </li>
            </Link>
        </nav>
    )

}