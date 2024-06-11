import "./register.css";
import TwitterLogo from "../../img/twitterLogo.svg";
import { NavLink } from "react-router-dom";
import MainBtn from "../../Components/button/mainBtn";
export default function Register() {
  return (
    <div className="register">
      <div className="registers">
        <img src={TwitterLogo} alt="" />
        <h2>Create an account</h2>.
        <input type="text" placeholder="Name" name="" id="" />
        <input type="text" placeholder="Phone number" name="" id="" />
        <NavLink to={"/register"}>Use email</NavLink>
        <h4>Date of birth</h4>
        <p>
          Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
          Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim
          nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra
          dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
        </p>
        <div className="dateInp">
          <input type="number" placeholder="Month" name="" id="" />
          <input type="number" placeholder="Day" name="" id="" />
          <input type="number" placeholder="Year" name="" id="" />
        </div>
        <MainBtn
          name={"Next"}
          func={() => {
            console.log("Next clicked");
          }}
        />
      </div>
    </div>
  );
}
