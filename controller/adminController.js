const adminModel=require('../model/adminModel')
const user=async(req,res)=>{
    const{ adminid, password }=req.body
    console.log(req.body)

    try {
        const admin=await adminModel.findOne({adminid:adminid})
        
        if(!admin){
            res.status(404).send({
            
                success:false,
                message:"admin is invalid"
            })
        }

        if(admin.password!=password){
            res.status(404).send({
            
                success:false,
                message:"password is invalid"
            })  
        }
    
       res.status(200).send({
        success:true,
        message:'success',
        admin,
       })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'something went wrong'
        })
    }
   
}





module.exports={
    user
}