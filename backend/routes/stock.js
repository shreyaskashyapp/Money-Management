const router = require('express').Router()
const Stocks = require('../models/stock.model')

router.route('/').get((req,res) => {
  Stocks.find()
    .then(stocks => res.json(stocks))
    .catch(err => res.status(200).json("Error "+err))
});

router.route('/add').post((req,res) => {
  const stockName = req.body.stockName;
  const stockType = req.body.stockType;
  const stockStatus = req.body.stockStatus;

  const newStock =new Stocks({stockName,stockType,stockStatus})
  newStock.save()
    .then(() => res.json("new stock added sucesfully"))
    .catch(err => res.status(200).json("Error "+err))
})

module.exports =router;