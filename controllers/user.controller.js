import express from 'express'
import User from "../models/userModel.js";

const signup = async(req,res)=>{
    try{const {username,email,password} = req.body

    if(!username){
        res.status(400).json({msg:"Username cannot be empty"})
    }
    if(!email){
        res.status(400).json({msg:"email cannot be empty"})
    }

    if(password.length<8 || password.length>16){
        res.status(400).json({msg:"Password length should be greater than 8 or less than or equal to 16"})
    }

    const newUser = new User({
        username,
        email,
        password
    })

    await newUser.save()
    res.status(200).json({msg:'user was created',user:newUser})
}
catch(err){
    res.status(500).json({msg:`something went wrong -> ${err}`})
}

}
export default signup