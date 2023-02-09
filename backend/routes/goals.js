const router = require('express').Router();
const Goals = require('../models/goals.model');

router.route('/').get((req, res) => {
  Goals.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json(err));
});

router.route('/add').post((req, res) => {
  const investment = req.body.investment;
  const expenses = req.body.expenses;
  const savings = req.body.expenses;
  const other = req.body.other;

  const newGoal = new Goals({ investment, expenses, savings, other })
  newGoal.save()
    .then(() => { res.json('New goals added succesfully') })
    .catch(err => res.status(400).json(err));
})

module.exports = router;