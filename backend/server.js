const express = require('express');
const cors = require('cors');
const mongoose= require('mongoose');
const bodyparser= require('body-parser');

require('dotenv').config();

const app =express();
const port= process.env.PORT || 8080

app.use(cors());
app.use(bodyparser.json());

const uri = process.env.ATLAS_URI;
console.log(uri)
// mongoose.connect(uri,{ useNewUrlParser: true });
mongoose.connect(uri
  );

const connection= mongoose.connection;

connection.once('open',()=>{
  console.log("MongoDB connection is established")
})

const userRouter = require('./routes/user');
const expenseRouter = require('./routes/expenses');
const stockRouter = require('./routes/stock');
const accountsRouter=require('./routes/accounts');
const modeRouter=require('./routes/mode');
const goalRouter=require('./routes/goals');


app.use('/users',userRouter);
app.use('/expenses',expenseRouter);
app.use('/stocks',stockRouter);
app.use('/accounts',accountsRouter);
app.use('/mode',modeRouter);
app.use('/goals',goalRouter);

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
})


