const router = require('express').Router()
const Accounts = require('../models/savings.model')

router.route('/').get((req,res) => {
    Accounts.find()
      .then(items => res.json(items))
      .catch(err => res.status(200).json("Error "+err));
  });

router.route('/add').post((req,res) => {
    const Account_No = req.body.Account_No;
    const Account_Name = req.body.Account_Name;
    const Account_Type = req.body.Account_Type;
    const Account_Balance = req.body.Account_Balance;

    const newaccount = new Accounts({Account_No,Account_Name,Account_Type,Account_Balance});

    newaccount.save()

    .then(() => res.json("new stock added sucesfully"))
   .catch(err => res.status(200).json("Error "+err))
})

module.exports =router;