const express=require('express')
const router=express.Router();
const bcrypt=require('bcryptjs')
require('../database/conn')
const User=require('../model/userSchema');
router.get('/',(req,resp)=>
{
    resp.send(`Hello Bro From Server router js`)
});
router.post('/register',async (req,resp)=>{
    const {name,email,phone,password,confirmPwd}=req.body;
    if(!name || !email || !phone || !password || !confirmPwd)
    {
        return resp.json({error:"Please Fill All The Fields"});
    }
    try
    {
        const userExist=await User.findOne({email:email})
    if(userExist)
    {
        return resp.status(401).json({error:"Email Already Exist"})
    }
    else if(password!=confirmPwd)
    {
        return resp.status(401).json({error:"Password Is not maatching"})
    }
    else
    {
        const user=new User({name:name,email:email,phone:phone,password:password,confirmPwd:confirmPwd})
        // Password Hashing Code

         

        const userRegister=await user.save();
        if(userRegister)
        {
            resp.status(201).json({message:"Registered Successfully"}) 
        }
        else
        {
            return resp.status(501).json({error: "Failed To Registered"})
        }
    }
  }
    catch(err)
    {
        console.log(err);
    }
    
}); 


// Logic Code

router.post('/signin',async (req,resp)=>
{
    try
    {
        const {email , password}=req.body;
        if(!email || !password)
        {
            return resp.status(401).json({error:"Provide your email or password"})
        }

        const userLogin=await User.findOne({email:email});
       
        if(userLogin)
        {
            if(password!=userLogin.password)
            {
                resp.json({message:"Incorrect Password!!! Please Provide Correct Passowrd"})
            }
            else
            {
                resp.json({message:"User Login SuccessFully"})
            }
        }
        else
        {
            resp.json({error:"Not Registered!!! Kindly Register Yourself"})
        }
      
    }
    catch(err)
    {
        console.log(err);
    }
})
module.exports= router;
