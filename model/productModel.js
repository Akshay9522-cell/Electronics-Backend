
const mongoose=require('mongoose')


const productSchema= new mongoose.Schema({

    name:String,
    description:String,
    category:String,
    company:String,
    price:String
})