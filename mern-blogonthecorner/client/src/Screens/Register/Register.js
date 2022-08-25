import './register.css'
import { Link } from 'react-router-dom';
import React, { Component }  from 'react';
import { useState,useEffect } from 'react';

export default function Register() {
  const[username,setUsername]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  

  const handleSubmit = (e)=>{
    //e.preventDefault();
  }
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
            <input 
            type="text" 
            className="registerInput" placeholder="Enter your Username"
            onChange={(e)=>setUsername(e.target.value)}/>
            <label>Email</label>
            <input type="text" 
            className="registerInput"
            onChange={(e)=>setEmail(e.target.value)}placeholder="Enter your email"/>
            <label>Password</label>
            <input type="text"
            className="registerInput"
            onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/>
            <button className="registerButton">Register</button>
            <button 
            type="submit"
            className="registerLoginButton"><Link style ={{textDecoration:"none",color:"black"}} to="/login">Login</Link></button>


        </form>
      
    </div>
  )
}
