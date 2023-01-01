import react from 'react'
import { Link } from 'react-router-dom'

export default function Navbar_settings(){
    return(
        <nav className="navbar-settings">
            {/* <Link to='/settings'>
                <li>
                    Settings
                </li>
            </Link> */}

            <Link to ='/settings/accounts'>
                <li>
                    Accounts
                </li>
            </Link>

            <Link to ='/settings/logout'>
                <li>
                    Logout
                </li>
            </Link>

            <Link to ='/settings/darkmode'>
                <li>
                    Dark Mode
                </li>
            </Link>
        </nav>
    )

}