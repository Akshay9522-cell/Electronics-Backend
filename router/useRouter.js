
const express=require('express')

const userController=require('../controller/userController')


const route=express.Router()


route.post('/userregis',userController.user)

route.post('/loginUser',userController.userLogin)

route.post('/auth',userController.auth)






module.exports=route