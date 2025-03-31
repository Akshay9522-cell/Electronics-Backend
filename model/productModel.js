
const mongoose=require('mongoose')


const productSchema= new mongoose.Schema({

    name:String,
    description:String,
    category:String,
    company:String,
    price:String,
    defaultImage:String,
    images:[String]
})

module.exports=mongoose.model('product',productSchema)