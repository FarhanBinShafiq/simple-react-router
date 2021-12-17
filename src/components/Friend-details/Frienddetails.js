import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Frienddetails = () => {
 
    const {frienddetail}=useParams();
    const[friend,setFriend]=useState({})

    useState(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${frienddetail}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])

    return (
        <div>
            <h2>Details Coming Soon:{frienddetail}</h2>
            <p>Name:{friend.name}</p>
            <p>Email:{friend.email}</p>
            <p>Website:{friend.website}</p>
            <p>Company:{friend.company?.name}</p>
        </div>
    );
};

export default Frienddetails;