const mongoose =require('mongoose');

const Schema = mongoose.Schema;

const stockSchema = new Schema({
  stockType:{
    type: String,
    required:true
  },
  stockName:{
    type:String,
    required:true
  },
  stockStatus:{
    type:String,
    required:true
  },
},{
  timestamps:true
});

const Stock= mongoose.model('stocks',stockSchema);
module.exports = Stock;