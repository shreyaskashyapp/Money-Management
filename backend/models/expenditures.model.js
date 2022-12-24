const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const expendiureSchema = new Schema({
  eName:{
    type:String,
    required:true
  },

  eType:{
    type:String,
    required:true
  },
  eAmount:{
    type:Number,
    required:true
  },

},{
  timestamps:true
});
const expenses= mongoose.model('expenses',expendiureSchema);
module.exports= expenses;