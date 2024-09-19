const express = require('express')
const signinController  = require('../../controllers/signinController')
const loginController = require('../../controllers/loginController')
const _ = express.Router()


_.post("/sign-in",signinController)
_.get("/login",loginController)
//http://localhost:8000/api/v1/auth/sign-in


module.exports=_