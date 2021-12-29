import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from "../App";

function Header() {

  const { state, dispatch } = useContext(UserContext);


  const RenderMenu = () => {
    if(state){
      return(
        <>
 
      <li className="nav-item">
    <Link to="/addcam"><span className="nav-link LinkClass">ADD CAMPAIGN</span></Link> 
   </li>
      <li className="nav-item">
    <Link to="/logout"><span className="nav-link LinkClass">LOGOUT</span></Link> 
   </li>
        </>

      )
    }else{
      return(
        <>
 
      <li className="nav-item">
    <Link to="/login"><span className="nav-link LinkClass">LOGIN</span></Link> 
   </li>
   <li className="nav-item">
     <Link to="/signup"><span className="nav-link LinkClass">SIGN UP</span></Link>
   </li></>
      )
    }
  }

    return (
        <div>
            <nav className="navbar navbar-expand-md bg-light navbar-light">
 <div className="container">
 <Link to="/"><span className="navbar-brand LinkClass">WECARE</span></Link>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav ml-auto">
    
     <RenderMenu />
  
    </ul>
  </div>
  </div>
</nav>

            
        </div>
    )
}

export default Header
