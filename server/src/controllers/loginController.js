const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../model/userModel');

const loginController = async (req,res) => {
    const{username,password}=req.body
    const existUser= await userModel.findOne({username:username})
    if(!existUser){
        return res.status(400).json({message:"invalid credential"})
      }
      bcrypt.compare(password,existUser.password,(err,data)=>{
        if(data){
            const authClaims =[{name:username},{jti:jwt.sign({},"tcTM")}]
            const token =jwt.sign({authClaims},"tcTM",{expiresIn:"2d"})
            return res.status(200).json({id:existUser._id,token:token})
        }else{
            return res.status(400).json({message:"invalid credential"})  
        }
      })
}

module.exports = loginController