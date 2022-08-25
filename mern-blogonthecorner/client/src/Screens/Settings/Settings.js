import './settings.css'
import SideBar from '../../components/Sidebar/SideBar'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsContainer">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
            <form className="settingsForm" >
                <label>
                    Profile Picture
                </label><div className="settingsPP">
                <img src="https://images.pexels.com/photos/945453/pexels-photo-945453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                    </div>
                    <label htmlFor="fileInput"><FontAwesomeIcon icon={faUser}/></label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <label>Username</label>
                    <input type="text" placeholder="Poovai"/>
                    <label>Email</label>
                    <input type="text" placeholder="poovai@gmail.com"/>
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Update</button>


            </form>
        </div>
      </div>
      <SideBar/>
    </div>
  )
}
