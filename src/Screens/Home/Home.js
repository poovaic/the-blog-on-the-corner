import React from 'react'
import MainBar from '../../MainBar/MainBar'
import SideBar from '../../Sidebar/SideBar'
import Posts from '../../Posts/Posts'

export default function Home() {
  return (
    <div className="Home">
      <MainBar/>
      <div className='homepage'>
        <Posts/>
        <SideBar/>
      </div>
      
    </div>
  )
}
