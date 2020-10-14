
const mongoose = require('mongoose')
const user = new mongoose.Schema({
    Name:Number,
    username:String,
    password:Number,
    accountnumber:String
})
const user = mongoose.model('User',user)
user.createIndexes();
module.exports = user;