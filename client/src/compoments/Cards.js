import React, { useState, useEffect} from 'react'
import { Link} from 'react-router-dom';
import Axios from 'axios';


function Cards() {


    const [camlist, setCamlist] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/see').then((response) => {
            setCamlist(response.data);
        })

    }, [])
    
    return (
        <>
        <div className="container">
           <div className="row">
               
            { camlist.map((val) => {
                return(

                <div className="col-xl-4 col-md-6 mb-4">
                     <Link className="link" to={`campaign/${val.id}`}>
                    <div className="card border-0 shadow">
                        <img src={val.link} className="card-img-top" alt="" />
                        <div className="card-body text-center">
                        <p className="n">-by {val.uname}</p>
                        <h5 className="card-title mb-0">{val.title.substr(0, 15)}...</h5>
                        <div className="card-text text-black-50 desc">{val.description.substr(0, 30)}...</div>
                       
                        </div>
                    </div>
                    </Link>
                </div>
                   )
               }) }
            
            </div>
        </div>

        
        </>
    )
}



export default Cards