const mongoose = require('mongoose');

const connect = async () => {
    const connected = await mongoose.connect('mongodb://127.0.0.1:27017/ecommerceJeken');
    if(connected){
        console.log("Connected to mongoDB !!")
    }else {
        console.log("Connection Failed !!")
    }
}

module.exports = connect