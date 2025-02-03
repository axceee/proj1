import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
const port = process.env.PORT || 3000

dotenv.config()
const app = express()

app.use(express.json())

import router from './routes/user.Routes.js'

app.use('/user',router)

connectDB()
.then(async()=>{
    try{
        app.listen(port,()=>{
            console.log(`port is ${port} :)`)
        })
    }
    catch(err){
        console.log(error);
        
    }
})


