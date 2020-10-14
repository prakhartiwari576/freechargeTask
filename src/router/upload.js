const user = require('../models/user');
const jwt = require('jsonwebtoken');
var express = require('express');
const router = new express.Router();
const auth = require('../middleware/Auth');
var upload = require("express-fileupload");
var csvtojson = require("csvtojson");


router.post('/upload',(req,res)=>{
    // var token = req.header('Authorization');
    // const decoded = jwt.verify(token, 'freecharge');

    // console.log(req.body);
    // res.send(req.body);

    var csvData = req.file;
    console.log(csvData);
    // return csvtojson().fromString(csvData).then(json => 
    //   {return res.status(201).json({csv:csvData, json:json})})  
})

module.exports = router;

