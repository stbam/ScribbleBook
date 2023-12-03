import './Welcomepage.css'
import { useState } from 'react'
import Loginscreen from './Loginscreen'
import Signup from './Signup' 
import Forgotpassword from './Forgotpassword'

function Welcomepage() {
  const [action,setAction]=useState("Sign Up");
    return ( 
      <div className="Welcomepagee">
{action!=="Returning User" && action !== "New User"&&( 
        <div className='intro-title'>
            <h3 className='intro'>Welcome to </h3>
            <h1 className='title'>Scribble Book</h1>
            <h3 className='intro'>are you a...</h3>
        </div>
)}
        {action==="Returning User"? <Loginscreen/>:<></> /* inserts a loginscreen component */}
        {action==="New User"?<Signup/>:null}
        
       
        <div className='user-buttons'>
            <button onClick={()=>{setAction("New User")}}>New User</button>
            <button onClick={()=>{setAction("Returning User")}}>Returning User</button>
            
        </div>
      </div>
    );
  }

export default Welcomepage