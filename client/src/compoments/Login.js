import React, { useState, useContext } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../App";


function Login() {

const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);


  const [loginstatus, setloginstatus] = useState("");


  const [emaillog, setEmaillog] = useState("");
  const [passlog, setPasslog] = useState("");

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:3001/login", 
    { emaillog: emaillog,
      passwordlog: passlog,
    }).then((response) => {
      if(response.data.message){
        setloginstatus(response.data.message);
        
      }else{
        localStorage.setItem("User", response.data[0].name);
        localStorage.setItem("status", response.data[0].status);
        setloginstatus("");
        dispatch({type: "USER", payload: true});
       
        navigate("/");
       
       
      }
    })
 }




    return (
        <div>
            <div className="formBox">
                <h3>LOGIN</h3>
                <p className='errmsg'>{loginstatus}</p>
                <hr/>
    <div className="form-group">
      <label for="email">Email:</label>
      <input type="email" className="form-control"  placeholder="Enter email"  onChange={(e) => {setEmaillog(e.target.value)}}/>
    </div>
    <div className="form-group">
      <label for="pwd">Password:</label>
      <input type="password" className="form-control" placeholder="Enter password"  onChange={(e) => {setPasslog(e.target.value)}}/>
    </div>
    <div className="form-group form-check">
     
    </div>
    <hr/>
    <button className="btn btn-dark" type='submit' onClick={login}>LOGIN</button>
  </div>
            
        </div>
    )
}

export default Login
