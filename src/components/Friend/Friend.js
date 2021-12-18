import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Friend = (props) => {

    const history=useHistory()

    const handleFriendClick=()=>{
        //history.push('./home')
         //dyanmic
         history.push(`/friend/${id}`)
    }
  
    const {id,name,phone,website,address}=props.friend;

    const friendStyle={
        border:'3px solid goldenrod',
        padding:'10px',
        borderRadius:'10px'
    }

    const url=`/friend/${id}`

    return (
        <div style={friendStyle}>
            <h2>I am:{name} {id}</h2>
            <p>Call Me:{phone}</p>
            <p>Visit Me:{website}</p>
            <p>I live In :{address.city}</p>
            <Link to={url}>Visit Me</Link>
             <br/>
            <Link to={url}>
             <button >Visit Me</button>
            </Link>

            <br/>

            <button onClick={handleFriendClick}>Visit Me</button>



         <br/>


        </div>
    );
};

export default Friend;