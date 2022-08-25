import './sidebar.css'
import img from './about_me.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter,faInstagram,faFacebook,faPinterest } from '@fortawesome/free-brands-svg-icons';

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        {/* <span className="sidebarTitl">
          ABOUT ME
        </span> */}
        <img className="about_me_img" src={img} alt=""/>
        <p>
          Hello! Welcome to 'The Blog on the Corner'. It's a MERN Stack App developed by Poovai.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList"><li className="sidebarListItem">Life</li><li className="sidebarListItem">Music</li><li className="sidebarListItem">Fashion</li><li className="sidebarListItem">Sport</li><li className="sidebarListItem">Movies</li><li className="sidebarListItem">Tech</li></ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <FontAwesomeIcon className="sidebarIcon" icon={faTwitter} />
      <FontAwesomeIcon className="sidebarIcon" icon={faFacebook} />
      <FontAwesomeIcon className="sidebarIcon" icon={faPinterest} />
      <FontAwesomeIcon className="sidebarIcon " icon={faInstagram} />
        </div>
      </div>


    </div>
  );
}
