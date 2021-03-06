const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    accountnumber:String,
    token:String
})

userSchema.methods.toJSON = function() {
    const user = this
    const userObject = user.toObject()
  
    delete userObject.password
    delete userObject.token
    // delete userObject.avatar
  
    return userObject
}

userSchema.methods.generateAuthToken = async function (){
    const user = this
    const token = jwt.sign({_id:user.accountnumber},'freecharge')

    user.token = token
    await user.save()
    return token
}

const User = mongoose.model('User',userSchema)
User.createIndexes();

module.exports = User;
