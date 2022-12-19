const router = require('express').Router()
const Login = require('../models/login.model')

router.route('/').get((req,res) => {
    Login.find()
      .then(items => res.json(items))
      .catch(err => res.status(200).json("Error "+err));
  });

router.route('/add').post((req,res) => {
   const Username = req.body.Username;
   const Password = req.body.Password;

   const newlogin = new Login({Username,Password});
   newStock.save()

   .then(() => res.json("new stock added sucesfully"))
   .catch(err => res.status(200).json("Error "+err))
})

module.exports =router;
  