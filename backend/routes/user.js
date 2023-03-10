const router= require('express').Router();
const User=require('../models/user.model');

router.route('/').get((req,res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(200).json("Error "+ err))
})

router.route('/add').post((req,res) => {

  const username = req.body.username;
  console.log(username)
  const newUser = new User({username})
  newUser.save()
    .then(() => {res.json("User added sucesfully")})
    .catch(err => res.status(200).json("Error "+err));
})

module.exports= router;