const mongoose = require('mongoose')
const user = new mongoose.Schema({
    Name:Number,
    username:String,
    password:Number,
    accountnumber:String
})
const USER = mongoose.model('User',user)
USER.createIndexes();
module.exports = USER;