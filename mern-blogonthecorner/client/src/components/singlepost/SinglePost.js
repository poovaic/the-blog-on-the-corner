import './singlePost.css'
import {faPenToSquare,faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router';
import axios from 'axios';
import React from 'react'
import { useContext,useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

export default function SinglePost() {
  const location = useLocation();
  const {user} = useContext(Context)

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
  

const PF = "http://localhost:5000/images/"

const handleDelete =async()=>{
  try{

  
  await axios.delete(`/posts/${path}`,{data:{username:user.username}});
  window.location.replace("/")
  }catch(err){

  }
}
  return (
  
    <div className ="singlePost">
      <div className = "singlePostContainer">
        {post.photo && (
      <img className="singlePostImg" src={PF + post.photo} alt=""/>
      )}
      <h1 className="singlePostTitle">
            {post.title}
            
               <div className="singlePostEdit">
               {user && post.username === user.username && (
                <>
               <FontAwesomeIcon className="singlePostIcon" icon={faPenToSquare}/>
               
               <FontAwesomeIcon  className="singlePostIcon" icon={faTrashCan}
               onClick={handleDelete}/>
               </>
               )}
               
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
