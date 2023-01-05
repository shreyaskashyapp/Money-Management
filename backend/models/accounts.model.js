const mongoose=require ('mongoose');
const Schema =mongoose.Schema;

const accountSchema=new Schema({
    acc_no:{type:Number,require:true},
    acc_name:{type:String,require:true},
    acc_balance:{type:Number,require:true},
    acc_type:{type:String,require:true},


},{
    timestamps:true,
});

const Accounts=mongoose.model('Accounts',accountSchema);
module.exports=Accounts;