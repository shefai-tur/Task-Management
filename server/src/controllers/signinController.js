const userModel = require("../model/userModel");
const bcrypt = require('bcrypt');


const signinController =async (req,res) => {
try {
    const{username}=req.body
    const{email}=req.body
  
    const existUsername= await userModel.findOne({username:username})
    const existemail= await userModel.findOne({email:email})
    if(existUsername){
      return res.status(400).json({message:"user alrady exist"})
    }else if(username.length < 4){
      return res.status(400).json({message:"username should have atleast 4 Characters "})
    }
  
    if(existemail){
      return res.status(400).json({message:"email alrady exist"})
    }
  const hashpass = await bcrypt.hash(req.body.password,10);
   const newUser = new userModel({
      username:req.body.username,
      email:req.body.email,
      password: hashpass
   }) 
   await newUser.save()
   return res.status(200).json({message:"sign in succes"})
} catch (error) {
    console.log(error);
    return res.status(400).json({message:"inernal server error"})
}
  
 
};

module.exports = signinController;
