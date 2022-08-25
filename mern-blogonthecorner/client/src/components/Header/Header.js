import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter,faInstagram,faFacebook,faPinterest } from '@fortawesome/free-brands-svg-icons';
import {faSearch,faBars,faX} from '@fortawesome/free-solid-svg-icons'
import react,{useState} from 'react';


export default function Header() {

  const[active, setActive] = useState(false);

  const showMenu = ()=>{
    console.log('onclicktest')
  setActive(!active)
  
  }  

return (
    <div className='header'>
      {/* hamburger icon */}
      <div className="hamby">
      <FontAwesomeIcon className="hamby-icon" onClick={showMenu} icon={faBars} />
      </div>

      {/* social media icons */}
      {/* <div className="header-1">
      <FontAwesomeIcon className="header-1-icon" icon={faTwitter} />
      <FontAwesomeIcon className="header-1-icon" icon={faFacebook} /><FontAwesomeIcon className="header-1-icon" icon={faPinterest} /><FontAwesomeIcon className="header-1-icon" icon={faInstagram} />
      </div> */}

        <nav className={active? 'navbar active':'navbar'}>
      {/* <div  className="header-2"> */}
        <ul>

          {/* x-icon */}

          <div className='close-icon-div'>
          <FontAwesomeIcon className="close-icon" onClick={showMenu}icon={faX}  />
          </div>

            <li className="header-menu-item">HOME</li>
            <li className="header-menu-item">ABOUT</li>
            <li className="header-menu-item">CONTACT</li>
            <li className="header-menu-item">WRITE</li>
            <li className="header-menu-item">ABOUT</li>

            <div>
              <FontAwesomeIcon className="header-3-search" icon={faSearch} />
            </div>
            
            <div>
            <img className = "header-3-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt=""/> 
            </div>

          
            
        </ul>
        
      {/* </div> */}

      {/* <div  className="header-3"> */}

      {/* picture and search icon */}
      
       
       
      {/* </div> */}
      
      </nav>

    </div>
      
       
  )
}
