const dotenv=require('dotenv')
const mongoose=require('mongoose')
const express = require('express')
const app=express();
dotenv.config({ path:'./config.env'});
require('./database/conn')


const User=require('./model/userSchema')
app.use(express.json());
app.use(require('./router/auth'))
const PORT=process.env.PORT;
const middleware=(req,resp,next)=>
{
    console.log("Hello My Middleware");
    next();
}

app.get('/',(req,resp)=>
{
    resp.send(` Server`)
});
app.get('/about',middleware,(req,resp)=>
{
    resp.send(` Server`)
    console.log('About middleware')
});
app.get('/contact',(req,resp)=>
{
    resp.send(` Contact`)
});
app.get('/signin',(req,resp)=>
{
    resp.send(` SignIn`)
});
app.get('/register',(req,resp)=>
{
    resp.send(`SignUp`)
});
app.listen(PORT,()=>
{
    console.log(`Server runningv on ${PORT}`)
})
