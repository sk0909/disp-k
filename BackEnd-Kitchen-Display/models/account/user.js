var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        lowercase: true,
        default: ''
    },
    lastName: {
        type: String,
        trim: true,
        lowercase: true,
        default: ''
    },
    phoneNumber:{
        type: String,
        unique:true,
    },
    created_on: {
        type: Date,
        default: Date.now()
    },

})



mongoose.model('User', UserSchema)
module.exports = mongoose.model('User')
