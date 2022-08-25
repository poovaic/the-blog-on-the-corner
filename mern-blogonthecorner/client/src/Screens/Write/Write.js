import './write.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg" src="https://images.pexels.com/photos/945453/pexels-photo-945453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
        <form className="writeFor,">
            <div className="writeFormGroup">
                <label htmlFor="fileInput"><FontAwesomeIcon icon={faPlus} /></label>
                <input type="file" name="" id="fileInput" style={{display:"none"}} /> 
                <input type="text" placeholder="Title"className="writeInput" autoFocus={true} />  
            </div>
            
            <div className = "writeFormGroup">
                <textarea placeholder="Tell your story" type="text" className="writeText"> </textarea>
            </div> 
            <button className="writeSubmit">Publish</button> 

        </form>
      
    </div>
  )
}
