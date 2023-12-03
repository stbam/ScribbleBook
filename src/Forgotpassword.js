import React from 'react';
import './Loginscreen.css';
import email from './assets/email.png'
import password from './assets/password.png'
import person from './assets/person.png'
import { useState } from 'react';

const ForgotPassword = () => {
    const [action,setAction]= useState("Sign Up");
  return ( 
    
    <div className="container">
      <div className="inputs">

        <div className='header'>
          <div className="login">Forgot Password</div>
        <form>

            <div className="input">
                <img src={email} alt="" />
                <input type="email" className="text" placeholder='Username'/>
            </div>   

            <div className='input'>
                <input type="submit" id='submit'/>
             </div>

        </form>
            
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
