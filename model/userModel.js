const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({

    name: String,
    phone: String,
    address:String ,
    city:String ,
    email:String ,
    password:String
})

module.exports=mongoose.model('user',userSchema)