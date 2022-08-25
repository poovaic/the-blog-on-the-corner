import React from 'react'
import MainBar from '../../components/MainBar/MainBar'
import SideBar from '../../components/Sidebar/SideBar'
import Posts from '../../components/Posts/Posts'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <MainBar/>
      <div className='homepage'>
        <Posts/>
        <SideBar/>
      </div>
      
    </div>
  )
}
