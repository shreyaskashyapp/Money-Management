import React, { useState,useEffect } from 'react'
import NavbarSettings from "./navbar_settings"
import axios from 'axios'

export default function Accounts() {
  const [accounts, setAccounts] = useState([])

  async function fetchdata() {
    try {
      const res = await axios.get('http://localhost:8080/accounts/')
      console.log(res)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchdata()
      .then(datas => {
        setAccounts(datas)
      })
  }, [])
  console.log(accounts)

  let num = 'Loading...'
  let name = 'Loading...'
  let type = 'Loading...'
  let balance = 'Loading...'
  if (accounts.length > 0) {
    num = accounts[0].acc_no
    name = accounts[0].acc_name
    type = accounts[0].acc_type
    balance = accounts[0].acc_balance
  }

  return (
    <div className="acc">
      <div>
        <h3>Settings</h3>
        <NavbarSettings />
      </div>
      <div className="acc-intro">
        <h4>Account Number</h4>
        {num}
        <h4>Account Name</h4>
        {name}
        <h4>Account Type</h4>
        {type}
        <h4>Account Balance</h4>
        {balance}
      </div>
    </div>
  )
}