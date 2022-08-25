import './singlePost.css'
import {faPenToSquare,faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router';
import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

export default function SinglePost() {
  const location = useLocation();
  //console.log('location',location.pathname.split("/")[2])
  const path = location.pathname.split("/")[2]
  const [post,setPost] =useState({})


  useEffect(()=>{
    const getPost = async()=>{
      const res = await axios.get("/posts/"+path);
      console.log('res',res)

      setPost(res.data)
    };
    getPost()
  },[path])
  


  return (
  
    <div className ="singlePost">
      <div className = "singlePostContainer">
        {post.photo && (
      <img className="singlePostImg" src={post.photo} alt=""/>
      )}
      <h1 className="singlePostTitle">
            {post.title}
            <div className="singlePostEdit">
                <FontAwesomeIcon className="singlePostIcon" icon={faPenToSquare}/>
                <FontAwesomeIcon className="singlePostIcon" icon={faTrashCan}/>
                
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author:
            <Link to={`/?user=${post.username}`} style={{textDecoration:"none",color:"#b39656"}}>
            <b>{post.username}</b>
            </Link>
            </span>
            <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>

        </div>
        <p className="singlePostDesc">{post.description}</p>
      </div>
    </div>
  )
}
