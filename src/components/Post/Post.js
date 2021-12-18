import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Post = (props) => {

    const history= useHistory()

    const postClick=()=>{
        history.push(`/post/${id}`)
    }

   const {title,id}=props.post
    return (
        <div>
            <h2>{title}</h2>
            <Link to={`/post/${id}`}>Visit The Post Detail</Link>
            <br/>
            <button onClick={postClick}>Visit Detail</button>
        </div>
    );
};

export default Post;