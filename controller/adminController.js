const adminModel=require('../model/adminModel')
const productModel=require('../model/productModel')
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


const addProduct=async(req,res)=>{
       
    const imageURL=req.files.map(file=>file.path)
    console.log(imageURL)
 const { name,description,category,company,price}=req.body

    try {
         const data= await productModel.create({
            name,
            description,
            category,
            company,
            price,
            defaultImage:imageURL[0],
            images:imageURL

         })
         res.send(data)
    } catch (error) {
        console.log(error)
    }  
}

const productData=async(req,res)=>{
       
    const data=await productModel.find()
    res.send(data)
}



module.exports={
    user,
    addProduct,
    productData
}