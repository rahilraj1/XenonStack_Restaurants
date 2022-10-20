import React from 'react'

const Login=()=>
{
    return(
        <div className="container">
         <div className="forms-contaainer">
            <div className="signin-signup">
                <form className="sign-in-form">
                  <h2 className="title">Sign In</h2>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <label>UserName </label>
                    <input type="text" placeholder="UserName"></input>
                  </div>
                  <div className="input-field">
                    <i className='fas fa-lock'></i>
                    <label>Password </label>
                    <input type="password" placeholder='Password'></input>
                  </div>
                  <input type="button" className="btn solid" value="login"></input>
                </form>
            </div>
         </div>
        </div>
    )
}

export default Login
