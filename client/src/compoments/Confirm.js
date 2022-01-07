import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';





function Confirm() {
    const navigate = useNavigate();

    const { id } = useParams();
        const dataId = parseInt(id);
        // console.log(dataId);

        const [camlist, setCamlist] = useState([]);
        useEffect(() => {
            Axios.get('http://localhost:3001/admin').then((response) => {
                setCamlist(response.data);
                
            })
    
        }, [])

 
      
        Axios.defaults.withCredentials = true;

        const confirm = () => {
          Axios.post("http://localhost:3001/confirm", 
          { id: dataId,
            
          }).then((response) => {
            if(response.data.message){
                navigate("/");
              
            }else{
              
        
             
             
            }
          })
       }
      


       
       const del = () => {
        Axios.post("http://localhost:3001/delete", 
        { id: dataId,
          
        }).then((response) => {
          if(response.data.message){
            navigate("/");
            
          }else{
           
           
          }
        })
     }
      

    return (
        <div>
              
            <div className="container">
            {camlist.filter(e => e.id === dataId).map(val => (
                
                  
              <div className="row p">
                        <div className="col-xl-4">
                            <img src={val.link} className="rounded img" alt=""/>
                        </div>
                        <div className="col-xl-8 text-left">
                            <h3>{val.title}</h3>
                            <p>-by {val.uname}</p>
                            <p>{val.description}</p>
                        </div>
         
                     </div>
          ))}
           </div>
           <div className='ri'>
           <button className='btn btn-success con' onClick={confirm}>Confirm</button><button className='btn btn-danger con' onClick={del}>Delete</button>
           </div>
        </div>
    )
}

export default Confirm
