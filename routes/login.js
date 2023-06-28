const express=require('express')
const router=express.Router()
const userSchema=require('../model/userSchema')
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');
var jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
dotenv.config({path:'./config/config.env'});
const JWT_SECRET=process.env.JWT_SECRET;

// @route:login
// @description:check email and password
// @ReqType:POST

router.post('/login',[
    body('email','Enter a valid email').isEmail(),
   body('password','Password cannot be blank').exists()
  
  ],async (req,res)=>{
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email,password}=req.body;
    try{
  let user=await userSchema.findOne({email});
  if(!user){
    return res.status(400).json({error:"Please try to login with correct credentials"});
  }
  const passwordCom=await bcrypt.compare(password,user.password);
  if(!passwordCom){
    return res.status(400).json({error:"Please try to login with correct credentials"});
  }
  
  const data={
    user:{
  id:user.id
    }
    }
     const authtoken=jwt.sign(data,JWT_SECRET);
     success=true;
     res.json({ success, authtoken })
  
  
    }catch(error){
      console.error(error.message);
      res.status(500).send("Internal server error");
      }
  }
  
  )

  module.exports=router