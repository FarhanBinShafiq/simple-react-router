import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Frienddetails = () => {
    const history=useHistory();
    const {frienddetail}=useParams();
    const[friend,setFriend]=useState({})

    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${frienddetail}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])


    

   const handleClick=()=>{
       history.push(`/friends`)
   } 

    return (
        <div>
            <h2>Details Coming Soon:{frienddetail}</h2>
            <p>Name:{friend.name}</p>
            <p>Email:{friend.email}</p>
            <p>Website:{friend.website}</p>
            <p>Company:{friend.company?.name}</p>

            <br/>

            <button onClick={handleClick}>See All Friends</button>
        </div>
    );
};

export default Frienddetails;