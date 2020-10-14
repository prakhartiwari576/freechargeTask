const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    Name:Number,
    username:String,
    password:Number,
    accountnumber:String
})

const user = mongoose.model('User',userSchema)
user.createIndexes();
module.exports = user;