const mongoose = require('mongoose')
const { Schema } = mongoose

// userSchema
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    gender: {
        type: String,
        enum: ['Male','Female','Others'],
        default: 'Male'
    },
    address: String,
    phoneNumber: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);
module.exports = User;