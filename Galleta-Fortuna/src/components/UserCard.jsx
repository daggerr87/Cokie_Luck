//import React from "react";
import Author from "./Author";
import Phrases from "./Phrases";
//import Background from './Background'


const UserCard = ({ data }) =>{
    
    console.log(data)

    return(
        
        <div className="user-card">
            
            <Phrases
            data={ data.phrase }
            ></Phrases>            
            <Author
            data={ data.author }
            ></Author>
        </div>
        
    );
};


export default UserCard;