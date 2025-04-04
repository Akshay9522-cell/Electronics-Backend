const userModel=require('../model/userModel')
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken');
require('dotenv').config()

const user=async(req,res)=>{

    const{ name,phone,address,city,email,password}=(req.body)
  
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(password, salt);
    const data= new userModel({
        name,phone,address,city,email,password:hash
    })
      
    
    data.save()
    res.status(200).send({
        success:true,
        message:'everything is fine',
    })
}


const userLogin=async(req,res)=>{
       
    const{email,password}=req.body

    try {
         const user=await userModel.findOne({email:email})
          
         // check user
         if(!user){
            res.status(404).send({
                success:false,
                message:"user not found"
            })
         }

         const match=bcrypt.compare(password, user.password)
         
         if(!match){
            res.status(404).send({
                success:false,
                message:"password not  found"
            })
         }

         const token = jwt.sign({id: user._id },process.env.JWT, { expiresIn: '1h'});

         res.status(200).send({
            success:true,
            message:'all is well',
            token:token
         })
         
    } catch (error) {
        console.log(error)
        res.status(404).send({
            success:false,
            message:"something went wrong"
        })
    }
    
}

const auth=async(req,res)=>{
      
    console.log(req.body)
    res.send('okk')
}


module.exports={
    user,
    userLogin,
    auth
    
}