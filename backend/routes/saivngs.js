const router = require('express').Router()
const Savings = require('../models/savings.model')

router.route('/').get((req,res) => {
    Savings.find()
      .then(items => res.json(items))
      .catch(err => res.status(200).json("Error "+err));
  });

router.route('/add').post((req,res) => {
   const Amount = req.body.Amount;
   const Type = req.body.Type;  //do we need savings id?

   const newsavings = new Savings({Amount,Type});
   newsavings.save()

   .then(() => res.json("new stock added sucesfully"))
   .catch(err => res.status(200).json("Error "+err))
})

module.exports =router;
  