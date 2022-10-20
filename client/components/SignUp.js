import React, {useState} from 'react'

const SignUp=()=>
{
    const [user,setUser]=useState({
        name:"",
        email:"",
        phone:"",
        password:"",
        confirmPwd:""
    });
    let name,value; 
    const handleInputs=(e)=>
    {
        console.log(e);
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value})
    }
    return(
       <>
         <section className="signup-box">
            <h1>SignUp</h1>
            <form>
                <label>Name</label>
                <input type="text" placeholder='Your Name' name="name" autoComplete='off' value={user.name} onChange={handleInputs}/>
                <label>Email</label>
                <input type="text" name="email" placeholder='Your Email' autoComplete='off'  value={user.email} onChange={handleInputs}/>
                <label>ContactNo</label>
                <input type=''  name="phone" placeholder='Your Contact No' autoComplete='off' value={user.phone} onChange={handleInputs}/>
                <label>Password</label>
                <input type='password' placeholder='Your Password' name="password" value={user.password} onChange={handleInputs}/>
                <label>Confirm Password</label>
                <input type='password' placeholder='Confirm Your Password' name="confirmPwd" value={user.confirmPwd} onChange={handleInputs}/>
                <input type='button' value="SignUp"></input>
            </form>
         </section>
       </>
    )
}

export default SignUp
