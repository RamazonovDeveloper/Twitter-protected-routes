import "./rightBar.css";
import searchIcon from "../../img/searchIcon.svg";
import settingIcon from "../../img/settingIcon.svg";
import moreIcon from "../../img/more.svg";
import { NavLink } from "react-router-dom";
import ellipse from "../../img/ellipse.svg";
export default function RightBar() {
  return (
    <div className="rightbar">
      <div className="rightbarDiv">
        <div className="search">
          <img src={searchIcon} alt="" />
          <input placeholder="Search Twitter" type="text" name="" id="" />
        </div>
        <div className="trends">
          <div className="trendsTag">
            <h2>Trends for you</h2>
            <img src={settingIcon} alt="" />
          </div>
          <div className="messageDiv">
            <div className="messageTexts">
              <p>Trending in Germany</p>
              <h3>Revolution</h3>
              <p>50.4K Tweets</p>
            </div>
            <div className="messageIcon">
              <img src={moreIcon} alt="" />
            </div>
          </div>
          <div className="messageDiv">
            <div className="messageTexts">
              <p>Trending in Germany</p>
              <h3>Revolution</h3>
              <p>50.4K Tweets</p>
            </div>
            <div className="messageIcon">
              <img src={moreIcon} alt="" />
            </div>
          </div>
          <div className="messageDiv">
            <div className="messageTexts">
              <p>Trending in Germany</p>
              <h3>Revolution</h3>
              <p>50.4K Tweets</p>
            </div>
            <div className="messageIcon">
              <img src={moreIcon} alt="" />
            </div>
          </div>
          <NavLink>Show more</NavLink>
        </div>
        <div className="trends">
          <div className="trendsTag">
            <h2>You might like</h2>
          </div>
          <div className="people">
            <img src={ellipse} alt="" />
            <div className="peopleText">
              <h3>Shukhratbek</h3>
              <p>@mrshukhrat</p>
            </div>
            <button>Follow</button>
          </div>
          <div className="people">
            <img src={ellipse} alt="" />
            <div className="peopleText">
              <h3>Shukhratbek</h3>
              <p>@mrshukhrat</p>
            </div>
            <button>Follow</button>
          </div>
          <NavLink>Show more</NavLink>
        </div>
      </div>
    </div>
  );
}
