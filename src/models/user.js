const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    accountnumber:String
})

const user = mongoose.model('User',userSchema)
user.createIndexes();
module.exports = user;
