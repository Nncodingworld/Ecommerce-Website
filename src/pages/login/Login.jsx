import React from 'react'
import "./Login.css"
function Login() {
  return (
    <div className="login-container">
      <div className="login-wrapper">
      <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder="Username" />
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" />
            </div>
            
            <div className="remember-forgot">
            <label>
            <input type="checkbox" />Remember Me   
           <a href='/#'>             Forget Password</a>
            </label>
            </div>
            <div className="register-link">
   <p> don't have an account ? <a href="/register">Register</a></p>
            </div>
            <button type="submit">Login</button>
            </form> 
      </div>
    </div>
  )
}

export default Login
