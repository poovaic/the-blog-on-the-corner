import './write.css'
import { faFileImage } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import axios from 'axios'
import { Context } from '../../context/Context'
import { useContext } from 'react'



export default function Write() {
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  const [file,setFile]=useState(null)
const {user} = useContext(Context)


 
const handleSubmit = async (e) => {
  e.preventDefault();
  const newPost = {
    username: user.username,
    title,
    description,
  };
  if (file) {
    const data =new FormData();
    const filename = Date.now() + file.name;
    data.append("name", filename);
    data.append("file", file);
    newPost.photo = filename;
    try {
      await axios.post("/upload", data);
    } catch (err) {}
  }
  try {
    const res = await axios.post("/posts", newPost);
    window.location.replace("/post/" + res.data._id);
  } catch (err) {}
};

  return (
    <div className="write">
      {file && ( 
        <img className="writeImg"
        src={URL.createObjectURL(file)} alt=""/>
      )}
        
        <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                <label htmlFor="fileInput"><FontAwesomeIcon className="writeIcon" icon={faFileImage} /></label>
                <input type="file" name="" id="fileInput" style={{display:"none"}} 
                onChange={(e)=>setFile(e.target.files[0])} /> 
               
                <input type="text" placeholder="Title"className="writeInput" autoFocus={true}
                onChange={(e)=>setTitle(e.target.value)}
                 />  
            </div>
            
            <div className = "writeFormGroup">
                <textarea  type="text" className="writeText"
                placeholder="Tell your story"
                onChange={(e)=>setDescription(e.target.value)}> 
                </textarea>
            </div> 
            
            <button className="writeSubmit" type="submit"
            >Publish</button> 

        </form>
      
    </div>
  )
}
