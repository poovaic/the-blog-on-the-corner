import './post.css'


import React from 'react'

export default function post() {
  return (
    <div className="post">
      <img className="postImg" src="https://images.pexels.com/photos/945453/pexels-photo-945453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
   

        <div className="postInfo">
            <div className="postCats">
            <span className ="postCat">Movies</span>
            <span className ="postCat">Tech</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor mauris, pharetra eget enim a, sagittis dapibus diam. Sed consectetur luctus justo a ullamcorper. Duis vitae risus nunc. Aliquam elementum tempus urna sit amet elementum. Donec turpis ex, volutpat scelerisque facilisis ac, gravida a risus. Fusce in efficitur nisi, sollicitudin euismod libero. Cras lacinia vel justo ornare rhoncus. Aliquam elementum, metus at congue elementum, dolor erat accumsan arcu, et egestas erat dolor quis enim. Proin auctor massa ac ante aliquam ultrices. Sed condimentum libero vel felis varius, quis ultrices ante aliquet. Aenean lacinia ex ut ante sollicitudin semper. Proin tincidunt efficitur aliquam.</p>
    </div>
  )
}
