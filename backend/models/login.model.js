const mongoose=require ('mongoose');
const Schema =mongoose.Schema;

const loginSchema=new Schema({
    username:{type:String,require:true},//done
    password:{type:String,require:true},
},{
    timestamps:true,
});

const Login=mongoose.model('Login',loginSchema);
module.exports=Login;