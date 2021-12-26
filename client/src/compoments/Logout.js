import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../App";

function Logout() {

    const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);
  dispatch({type: "USER", payload: false});
   localStorage.removeItem("User");
        navigate("/");
    return (
        <div>
            
        </div>
    )
}

export default Logout
