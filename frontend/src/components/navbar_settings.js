import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar_settings() {
  const location = useLocation();

  return (
    <nav className="navbar-settings">
      <li>
        <Link to="/settings/accounts" className={location.pathname === '/settings/accounts' ? 's-li-active' : 's-li'}>Accounts</Link>
      </li>
      <li>
        <Link to="/settings/logout" className={location.pathname === '/settings/logout' ? 's-li-active' : 's-li'}>Logout</Link>
      </li>
      <li>
        <Link to="/settings/darkmode" className={location.pathname === '/settings/darkmode' ? 's-li-active' : 's-li'}>Dark Mode</Link>
      </li>
    </nav>
  );
}