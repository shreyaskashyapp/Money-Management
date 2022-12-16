const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const expendiureSchema = new Schema({
  eName:{
    type:String
  },

  eType:{
    type:String
  },
  eAmount:{
    type:Number
  },

},{
  timestamps:true
});
const expenses= mongoose.model('expenses',expendiureSchema);
module.exports= expenses;