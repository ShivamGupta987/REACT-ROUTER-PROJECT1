import React from "react";
import { useParams } from "react-router-dom";
//params for user id jo denge woh layeya 
//agr user shivam toh shivam aaega server pe
function User(){
    const{userid} = useParams ()
    return(
        <div className="bg-gray-600">User:{userid}</div>
    )
}

export default User