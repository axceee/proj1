import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String}

},{timestamps:true})

const User = mongoose.Model('User',userSchema)

export default User