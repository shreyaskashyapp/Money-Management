const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const modeSchema= new Schema({
  state:{
    type:Boolean,
    required:true
  },

},
{
  timestamps:true
});

const Mode= mongoose.model('mode',modeSchema);
module.exports=Mode;