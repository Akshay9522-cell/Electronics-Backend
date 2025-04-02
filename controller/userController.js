const userModel=require('../model/userModel')
const bcrypt=require('bcryptjs')

const user=async(req,res)=>{

    const{ name,phone,address,city,email,password}=(req.body)
  
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(password, salt);
    const data= new userModel({
        name,phone,address,city,email,password:hash
    })
      
    
    data.save()
    res.send('okk')
}





module.exports={
    user
}