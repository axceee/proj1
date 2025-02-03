import mongoose from 'mongoose'

const connectDB = async()=>{
    try{
        mongoose.connect(process.env.MONGO_URL)
        console.log( 'mango :) ')
    }
    catch(err){
        console.log(`no mango for you :( `)
    }
}

export default connectDB