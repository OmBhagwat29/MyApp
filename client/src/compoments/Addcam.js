import React, { useState, useContext } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../App";

function Addcam() {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(UserContext);
const user = localStorage.getItem('User');
if(!user){
  navigate("/");
}

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");

  const addData = () => {
    Axios.post("http://localhost:3001/addcam", 
    { title: title, 
      desc: desc,
      link: link,
    }).then((response) => {
        
      if(response.data.message){
        navigate("/");

      }
    })
 }


    return (
        <div>
            <div>
            <div className="formBox">
                <h3>ADD CAMPAIGN</h3>
              
                <hr/>
    <div className="form-group">
      <label for="title">Title</label>
      <input type="text" className="form-control"  placeholder="Enter Title" onChange={(e) => {setTitle(e.target.value)}}/>
    </div>
    <div className="form-group">
      <label for="pwd">Description</label>
      <textarea id="" className="form-control" placeholder="Enter Description" cols="30" rows="10" onChange={(e) => {setDesc(e.target.value)}}></textarea>
    </div>
    <div className="form-group">
      <label for="pwd">Image Link</label>
      <input type="text" className="form-control"  placeholder="Enter Image Link" onChange={(e) => {setLink(e.target.value)}}/>
    </div>
    <hr/>
    <button className="btn btn-dark" type='submit' onClick={addData}>Submit</button>
  </div>
            
        </div>
        </div>
    )
}

export default Addcam
