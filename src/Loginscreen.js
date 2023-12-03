import React from 'react';
import './Loginscreen.css';

import email from './assets/email.png'
import password from './assets/password.png'
import person from './assets/person.png'
import { useState } from 'react';

const Login = () => {
    const [action,setAction]= useState("Sign Up");
  return ( 
    
    <div className="container">
      <div className="inputs">

        <div className='header'>
          <div className="login">Login</div>

        <form>

            <div className="input">
                <img src={person} alt="" />
                <input type="text" className="text" placeholder='Username'/>
                </div>   

            <div className="input">
                <img src={password} alt="" />
                <input type="text" className="text" placeholder='Password'/>
            </div>

            <div className='input'>
                <input type="submit" id='submit'/>
             </div>
             

     

            <div className='input' id='forgot-password'>
                forgot password? <span id='lost-password' onClick={()=>setAction("Forgot Password")}> Click Here!</span>
            </div>
            
        </form>
            
        </div>
      </div>
    </div>
  );
}

export default Login;
