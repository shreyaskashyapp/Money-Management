const router = require('express').Router()
const Accounts = require('../models/accounts.model')

router.route('/').get((req,res) => {
    Accounts.find()
      .then(items => res.json(items))
      .catch(err => res.status(200).json("Error "+err));
  });

router.route('/add').post((req,res) => {
    const acc_no = req.body.acc_no;
    const acc_name = req.body.acc_name;
    const acc_type = req.body.acc_type;
    const acc_balance = req.body.acc_balance;

    const newaccount = new Accounts({acc_no,acc_name,acc_type,acc_balance});

    newaccount.save()

    .then(() => res.json("new Account added sucesfully"))
   .catch(err => res.status(200).json("Error "+err))
})

module.exports =router;