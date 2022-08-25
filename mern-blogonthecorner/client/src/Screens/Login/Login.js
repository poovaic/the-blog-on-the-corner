import './login.css'
import { Link } from "react-router-dom";
import React, { Component }  from 'react';



export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="text" placeholder="Enter your email"/>
            <label>Password</label>
            <input type="text" placeholder="Enter your password"/>
            <button className="loginButton">Login</button>
            <button className="loginRegisterButton">
              <Link style ={{textDecoration:"none",color:"black"}} to="/register">Register</Link></button>


        </form>
      
    </div>
  )
}
