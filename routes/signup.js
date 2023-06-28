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

router.post('/signup',[
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be atleast of 5 characters').isLength({ min: 5 })
],async(req,res)=>{
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success,errors: errors.array() });
    }


  try {
    // Look for user with same email
    let user=await userSchema.findOne({email:req.body.email});
   if(user){
    return res.status(400).json({success,error:"Sorry a user with this email exist"});
   }
   const salt=await bcrypt.genSalt(10);
    const secPass=await bcrypt.hash(req.body.password,salt);
    user=await userSchema.create({
        name: req.body.name,
        email:req.body.email,
        password: secPass
      })


      const data={
        user:{
   id:user.id
        }
        }

        
         const authtoken=jwt.sign(data,JWT_SECRET);
         success=true;
       res.json({success,authtoken});
  }catch(error){
  console.error(error.message);
  res.status(500).send("Some error occured");
  }
})

module.exports=router