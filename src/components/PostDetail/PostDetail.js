import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {

  const {postId}=useParams();

  const [post,setPost]=useState({})

  useEffect(()=>{
      const url= `https://jsonplaceholder.typicode.com/posts/${postId}`
      fetch(url)
      .then(res=>res.json())
      .then(data=>setPost(data))
  },[])

    return (
        <div>
            <h2>Post Detail:{postId}</h2>
            <p>{post.title}</p>
            

            

        </div>
    );
};

export default PostDetail;