import "./profile.css";
import logo from "../../img/ellipse.svg";
import headerImg from "../../img/profileHeader.svg";
import { NavLink } from "react-router-dom";
import profileContent from "../../img/profileContent.svg";
export default function Profile() {
  return (
    <div className="Profile">
      <div className="profileHeader">
        <NavLink to={"/home"}>←</NavLink>
        <div className="texts">
          <h3>Bobur</h3>
          <p>1,070 Tweets</p>
        </div>
      </div>
      <img className="headerImg" src={headerImg} alt="" />
      <img className="logo" src={logo} alt="" />
      <div className="editProfile">
        <button>Edit Profile</button>
      </div>
      <img className="profileContent" src={profileContent} alt="" />
    </div>
  );
}
