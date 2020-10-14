const express = require('express')
const router = new express.Router()
const User = require('../models/user')
// const auth = require('../middleware/Auth')

router.post('/users',async (req,res)=>{
  var username = req.body.username;
  var accountnumber = username.slice(0,4) + Math.floor(1000 + Math.random() * 9000);
  const user = new User({...req.body,accountnumber:accountnumber})
  try{
    await user.save()
    // const token = await user.generateAuthToken()
    res.status(201).send({user})
  }catch(error){
    res.status(400).send(error)
  }
})

// router.post('/users/login',async (req,res)=>{
//   var username = req.body.username;
//   var password = req.body.password;
//   try{
//     await User.findOne({username:username});
//     // const token = await user.generateAuthToken()
//     res.status(201).send({user})
//   }catch(error){
//     res.status(400).send("not authorized")
//   }
// })

module.exports = router