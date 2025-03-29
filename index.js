const express=require('express')

const app=express()
const bodyparser=require('body-parser')
require('dotenv').config()
const cors=require('cors')
const mongoose=require('mongoose')
const userRoute=require('./router/adminRouter')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.use(cors())

mongoose.connect(process.env.MONGO).then(()=>{
      console.log("DB connected")
})
const port=process.env.PORT || 5000

app.use('/electronics',userRoute)
app.listen(port,()=>{
    console.log("server is Rocking on")
})

