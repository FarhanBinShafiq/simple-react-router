import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
  
    const [friedns,setFriends]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data))
    },[])


    return (
       <div className='friend-container'>
            
           {
               friedns.map(friend=> <Friend
               key={friend.id}
               friend={friend}
               ></Friend>)
           }
       
       </div>
    );
};

export default Friends;