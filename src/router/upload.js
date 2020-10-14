const user = require('../models/user');
const jwt = require('jsonwebtoken');
var express = require('express');
const router = new express.Router();
const auth = require('../middleware/Auth');

router.get('/upload',(req,res)=>{
    var token = req.header('Authorization');
    const decoded = jwt.verify(token, 'freecharge');



     
})

module.exports = router;

