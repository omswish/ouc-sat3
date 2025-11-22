import React from 'react'
import './Login.css'
import logo from '../../../public/logo.jpg'
export default function Login() {
  return (
<>
  <div id="loginPage" class="page active">
    <div class="card">
      <img style ={{width:"100px"}} src={logo} alt="Logo"/>
      <h2>Welcome Back</h2>
      <div class="muted">Log in to continue</div>

      <div class="field">
        <label>Email</label>
        <input type="email" placeholder="Enter email" />
      </div>

      <div class="field">
        <label>Password</label>
        <input type="password" placeholder="Enter password" />
      </div>

      <button class="btn">Login</button>
      <div class="switch">Don't have an account? <a href="#" onclick="showSignup()">Sign up</a></div>
    </div>
  </div>

 
</>
  )
}
