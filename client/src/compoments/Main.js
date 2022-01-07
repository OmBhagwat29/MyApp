import React, { useContext } from 'react';
import { UserContext } from "../App";
import Admin from "./Admin";
import Content from "./Content"

function  Main() {

    const user = localStorage.getItem('User');
    const { state, dispatch } = useContext(UserContext);

    if(user){
        if(user==="Admin"){
            return(
                <Admin/>
            )

        }
        return (
            <>
            <div className="container">
            <h2 className="greeting">Welcome {user}</h2>
            <hr />
            </div>
            <Content />
            </>
        )

    }else{
        
        return (
            <>
            <div className="bg">
                <h1>WELCOME</h1>
            </div>
            <div className="jumbotron">
            <h1>OUR BLOGS</h1>
            <p>See our best blogs here and you can find your favourite blogs here</p>
        </div>
        <Content />
            </>
        )
    }



}

export default Main
