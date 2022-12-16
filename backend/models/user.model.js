const mongoose= require('mongoose');
const Schema =mongoose.Schema

const userSchema= new Schema({
  userName:{
    type:String,
    required:true,
    unique:false,
    trim:true,
    minlength:3
  },
  userAge:{
    type:String,
    required:true
  },
  userPhone:{
    type:String
  }

  
},{
  timestamps:true
});

const User= mongoose.model('users',userSchema)
module.exports= User;