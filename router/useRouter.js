
const express=require('express')

const userController=require('../controller/userController')

const route=express.Router()


route.post('/userregis',userController.user)




module.exports=route