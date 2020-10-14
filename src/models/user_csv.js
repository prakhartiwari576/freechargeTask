const mongoose = require('mongoose')
const user_csv = new mongoose.Schema({
    accountnumber:String,
    CSV:Array
})
const userCsv = mongoose.model('user_csv',user_csv)
userCsv.createIndexes();
module.exports = userCsv;
