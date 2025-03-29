const express=require('express')
const userController=require('../controller/adminController')

const route=express.Router()

route.post('/login',userController.user)




module.exports=route