import React from "react";
 



import email from './assets/email.png'
import password from './assets/password.png'
import person from './assets/person.png'



const Signup = () => {
    

    return ( 
        
    
    <div className="container">
    <div className="inputs">

      <div className='header'>
        <div className="login">Sign Up</div>
      <form>
        <div className="input">
            <img src={email} alt="" />
            <input type="email" className="text" placeholder="Email"/>

        </div>
          <div className="input">
              <img src={person} alt="" />
              <input type="text" className="text" placeholder='Username'/>
        </div>   

          <div className="input">
              <img src={password} alt="" />
              <input type="password" className="text" placeholder='Password' id="password"/>
          </div>
          <div className="input">
             <img src={password} alt="" />
                <input type="password" className="text" placeholder='Confirm Password' id="confirmPassword"/>
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
 
export default Signup;