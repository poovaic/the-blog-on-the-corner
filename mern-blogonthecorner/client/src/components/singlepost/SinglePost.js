import './singlePost.css'
import {faPenToSquare,faTrashCan} from '@fortawesome/free-solid-svg-icons'


import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SinglePost() {
  return (
    <div className ="singlePost">
      <div className = "singlePostContainer">
      <img className="singlePostImg" src="https://images.pexels.com/photos/945453/pexels-photo-945453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
        <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
                <FontAwesomeIcon className="singlePostIcon" icon={faPenToSquare}/>
                <FontAwesomeIcon className="singlePostIcon" icon={faTrashCan}/>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author:<b>Poovai</b></span>
            <span className="singlePostDate">1 hour Ago</span>

        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor mauris, pharetra eget enim a, sagittis dapibus diam. Sed consectetur luctus justo a ullamcorper. Duis vitae risus nunc. Aliquam elementum tempus urna sit amet elementum. Donec turpis ex, volutpat scelerisque facilisis ac, gravida a risus. Fusce in efficitur nisi, sollicitudin euismod libero. Cras lacinia vel justo ornare rhoncus. Aliquam elementum, metus at congue elementum, dolor erat accumsan arcu, et egestas erat dolor quis enim. Proin auctor massa ac ante aliquam ultrices. Sed condimentum libero vel felis varius, quis ultrices ante aliquet. Aenean lacinia ex ut ante sollicitudin semper. Proin tincidunt efficitur aliquam.</p>
      </div>
    </div>
  )
}
