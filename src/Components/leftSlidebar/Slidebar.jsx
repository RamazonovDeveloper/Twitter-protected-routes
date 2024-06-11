import { NavLink } from "react-router-dom";
import TwitterLogo from "../../img/twitterLogo.svg";
import "./slidebar.css";
// ICONS
import homeIcon from "../../img/homeIcon.svg";
import htagIcon from "../../img/homeHtag.svg";
import homeList from "../../img/homeLists.svg";
import homeMessage from "../../img/homeMessage.svg";
import homeMore from "../../img/homeMore.svg";
import homeNotification from "../../img/homeNotification.svg";
import homeProfile from "../../img/homeProfile.svg";
import homeSaved from "../../img/homeSaved.svg";
import MainBtn from "../button/mainBtn";
import ellipse from "../../img/ellipse.svg";
import more from "../../img/more.svg";

export default function Slidebar() {
  return (
    <div className="leftSlideBar">
      <nav className="leftNav">
        <img className="leftNavIcon" src={TwitterLogo} alt="" />
        <NavLink to={"/home"}>
          <img src={homeIcon} alt="" />
          Home
        </NavLink>
        <NavLink to={"/explore"}>
          <img src={htagIcon} alt="" />
          Explore
        </NavLink>
        <NavLink to={"/notification"}>
          <img src={homeNotification} alt="" />
          Notification
        </NavLink>
        <NavLink to={"/message"}>
          <img src={homeMessage} alt="" />
          Message
        </NavLink>
        <NavLink to={"/bookmarks"}>
          <img src={homeSaved} alt="" />
          Bookmarks
        </NavLink>
        <NavLink to={"/lists"}>
          <img src={homeList} alt="" />
          Lists
        </NavLink>
        <NavLink to={"/profile"}>
          <img src={homeProfile} alt="" />
          Profile
        </NavLink>
        <NavLink to={"/more"}>
          <img src={homeMore} alt="" />
          More
        </NavLink>

        <MainBtn name={"Tweet"} func={console.log(1)} />
        <NavLink to={"/profile"}>
          <div className="people">
            <img className="logo" src={ellipse} alt="" />
            <div className="peopleText">
              <h3>Shukhratbek</h3>
              <p>@mrshukhrat</p>
            </div>
            <img src={more} alt="" />
          </div>
        </NavLink>
      </nav>
    </div>
  );
}
