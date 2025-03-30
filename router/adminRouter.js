const express=require('express')
const userController=require('../controller/adminController')

const route=express.Router()
const multer=require('multer')
const path = require('path');

// Configure storage engine and filename
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  
  // Initialize upload middleware and add file size limit
  const upload = multer({
    storage: storage,
     // 1MB file size limit
  })



route.post('/login',userController.user)

route.post('/add',upload.array('image',5),userController.addProduct)




module.exports=route