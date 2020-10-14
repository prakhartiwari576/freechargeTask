const user = require('../models/user');
const jwt = require('jsonwebtoken');
var express = require('express');
const router = new express.Router();
const auth = require('../middleware/Auth');
var multer  = require('multer')
var upload = multer()
const csv_user = require('../models/user_csv')
const csv=require('csvtojson')

router.post('/upload',upload.single('csvfile'),async (req,res)=>{
    // var token = req.header('Authorization');
    // const decoded = jwt.verify(token, 'freecharge');
    // var user= decoded.accnumber;

const formData = req.file.buffer.toString();
var matrix=[]; 
 await csv({
    noheader:true,
    output: "csv"
})
.fromString(formData)
.then((csvRow)=>{ 
    console.log(csvRow)
    matrix.push(csvRow);
})
    
const doc = await csv_user.findOne({ accountnumber: user });
doc.overwrite({CSV: matrix[0]});
await doc.save();
res.send(matrix[0]);
})

module.exports = router;

