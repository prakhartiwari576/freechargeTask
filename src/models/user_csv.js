const mongoose = require('mongoose')
const user_csv = new mongoose.Schema({
    accountnumber:String,
    CSV:Array
})
const user_csv = mongoose.model('user_csv',user_csv)
user_csv.createIndexes();
module.exports = user_csv;
