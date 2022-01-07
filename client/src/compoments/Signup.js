import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';


function Signup() {
  const [signupstatus, setsignupstatus] = useState("");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");


  const register = () => {
    Axios.post("http://localhost:3001/signup", 
    { username: username, 
      email: email,
      password: pass,
    }).then((response) => {
      if(response.data.message){
        setsignupstatus(response.data.message);
        
        console.log(response.data.message);
        if(response.data.message==="sign up"){
          document.getElementById('dbox').style.display = "block";

        }
        
      }else{
        setsignupstatus("");

      }
      
    })
 }


    return (
        <div>
            <div className="formBox">
                <h3>SIGN UP</h3>
                <p className='errmsg'>{signupstatus}</p>
                <hr/>
    <div className="form-group">
      <label for="email">Username:</label>
      <input type="text" className="form-control" placeholder="Enter Username" require onChange={(e) => {setUsername(e.target.value)}} />
    </div>
    <div className="form-group">
      <label for="email">Email:</label>
      <input type="email" className="form-control" placeholder="Enter email" require onChange={(e) => {setEmail(e.target.value)}}/>
    </div>
    <div className="form-group">
      <label for="pwd">Password:</label>
      <input type="password" className="form-control" placeholder="Enter password" require onChange={(e) => {setPass(e.target.value)}} />
    </div>
   <hr/>
    <button  className="btn btn-dark" type='submit' onClick={register}>SIGN UP</button>
  </div>

<div className='dbox' id='dbox'>
  <h4>Your Account is created click to login</h4>
  <Link className="link" to="/login"><button className='btn btn-dark'>Login</button></Link>
</div>

            
        </div>
    )
}

export default Signup
