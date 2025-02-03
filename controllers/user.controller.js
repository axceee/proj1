import User from "../models/userModel";

const signup = async()=>{
    const {username,email,password} = req.body()

    if(!username){
        res.status(400).json({msg:"Username cannot be empty"})
    }
    if(!email){
        res.status(400).json({msg:"email cannot be empty"})
    }

    if(password.length()<8 || password.length()>16){
        res.status(400).json({msg:"Password length should be greater than 8 or less than or equal to 16"})
    }

}