const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const goalSchema = new Schema({
  investment: { type: Number, require: true },
  expenses: { type: Number, require: true },
  savings: { type: Number, require: true },
  other: { type: Number, require: true },
}, {
    timestamps: true,
  });

const Goals= mongoose.model('goals',goalSchema);
module.exports=Goals;