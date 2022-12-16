const mongoose=require ('mongoose');
const Schema =mongoose.Schema;

const savingSchema=new Schema({
    savings_id:{type:int,require:true},//remove id from all the models because it already generates an id automatically
    savings_amt:{type:int,require:true},
    savings_type:{type:String,require:true},
},{
    timestamps:true,
});

const Savings=mongoose.model('Savings',loginSchema);
module.exports=Savings;