import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios';



function Campaign() {
    

    const { id } = useParams();
        const dataId = parseInt(id);
        // console.log(dataId);

        const [camlist, setCamlist] = useState([]);
        useEffect(() => {
            Axios.get('http://localhost:3001/see').then((response) => {
                setCamlist(response.data);
                
            })
    
        }, [])

 
      
   

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

        </div>
    )
}

export default Campaign
