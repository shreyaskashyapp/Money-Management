const router = require('express').Router()
const Expenses = require('../models/expenditures.model')

router.route('/').get((req,res) => {
  Expenses.find()
    .then(items => res.json(items))
    .catch(err => res.status(200).json("Error "+err));
});

router.route('/add').post((req,res) => {
  const eName = req.body.eName;
  const eType = req.body.eType;
  const eAmount = req.body.eAmount;

  const newExpense = new Expenses({eName,eType,eAmount})
  newExpense.save()
    .then(()=> {res.json("new expense added sucesfully")})
    .catch(err => res.status(200).json("Error "+err));
});

router.route('/:id').delete((req,res) => {
  Expenses.findByIdAndDelete(req.params.id)
    .then(() => {res.json("Deleted")
                  console.log(Expenses.findById(req.params.id))})
    .catch(err => req.status(400).json('err'+err))
})

module.exports= router;