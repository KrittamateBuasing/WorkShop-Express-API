const mongoose = require('mongoose')
const connectDB = async() =>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/KB_SHOP')
        console.log('DB Connect')
    }catch(err){
        console.log(err)
    }

}

module.exports = connectDB