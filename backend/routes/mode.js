const router= require('express').Router()
const Mode=require('../models/mode.model')

router.route('/').get((req,res)=>{
  Mode.find()
    .then(items => res.json(items))
    .catch(err => res.status(200).json("Error" + err))
});



router.route('/add').post((req,res) => {
  const state=req.body.state;

  const newMode = new Mode({state})
  newMode.save()
    .then(()=> {res.json("Mode is set sucesfully")})
    .catch(err => res.status(200).json("Error "+err));
});
router.route('/update/:id').post((req,res)=>{
  Mode.findById(req.params.id)
    .then(mode =>{
      mode.state=req.body.state;

      mode.save()
        .then(() => res.json("SUCCESSSSSSSSS"))
        .catch(err => res.status(200).json('ERR' +err));
    });
});
module.exports= router;