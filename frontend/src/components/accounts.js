import react from 'react'
import NavbarSettings from "./navbar_settings"
import axios from 'axios'
export default function Accounts(){
  return(
    <div className="acc">
      <div>
        <h3>Settings</h3>
        <NavbarSettings />
      </div>
      <div className="acc-intro">
        <h4>Account Number</h4>
        <h4>Account Name</h4>
        <h4>Account Type</h4>
        <h4>Account Balance</h4>

      </div>
    </div>

  )
}