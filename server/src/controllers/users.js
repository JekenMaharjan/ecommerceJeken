const User = require('../models/users')

const registerNewUser = (req, res) => {
    try{
        User.create(req.body)
        res.send("Ok!! Created")
    }catch(err){
        res.send("Error!!")
    }
}

const loginUser = (req, res) => {
    res.send("This is Login page");
}

module.exports = {registerNewUser, loginUser}