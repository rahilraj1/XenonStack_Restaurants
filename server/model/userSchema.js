const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
         },
    email:{
           type:String,
           required:true
          },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPwd:{
        type:String,
        required:true
    }
})




// Password Hashing Code

userSchema.pre('save',async function(next)
{
    if(this.isModified('password'))
    {
        this.password=bcrypt.hash(this.password,12);
        this.confirmPwd=bcrypt.hash(this.confirmPwd,12)
    }
    next();
})




const User = mongoose.model('USER',userSchema)
module.exports= User;
