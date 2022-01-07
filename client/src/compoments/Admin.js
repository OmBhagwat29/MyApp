import React, { useState, useContext, useEffect } from 'react';
import Axios from 'axios';
import { Link} from 'react-router-dom';
import { UserContext } from "../App";

function Admin() {

    const [camlist, setCamlist] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/admin').then((response) => {
            setCamlist(response.data);
        })

    }, []);


    Axios.defaults.withCredentials = true;

  
  

    return (
        <div>
            <h1 className='admin'>Hello Admin</h1>
            
<div className="container">
            
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Image</th>
        <th>Title</th>
        <th>Description</th>
        <th>Posted By</th>

      </tr>
    </thead>
    <tbody>
    { camlist.map((val) => {
                return(
                    
        <tr>
                  
        <td><img src={val.link} className="card-img-top" alt="" style={{width:"50px"}} /></td>
        <td>{val.title.substr(0, 15)}...</td>
        <td>{val.description.substr(0, 30)}...</td>
        <td>{val.uname}</td>
        <td> <Link className="link" to={`confirm/${val.id}`}><button className='btn btn-link'>View</button></Link></td>
        
    
      </tr>
        )
                }) }
      
    </tbody>
  </table>
</div>
        </div>
    )
}

export default Admin
