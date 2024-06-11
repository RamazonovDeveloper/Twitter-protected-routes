import React, { useState } from "react";
import TwittIcon from "../../img/twitterLogo.svg";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import MainBtn from "../../Components/button/mainBtn";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {

    if (username === "test" && password === "test") {
      localStorage.setItem('twitter_token', "******password")
      navigate('/')
    } else {
      setError("Username or password is incorrect");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <div className="login">
      <div className="loginDiv">
        <img src={TwittIcon} alt="Twitter Logo" />
        <h3>Log in to Twitter</h3>
        <input
          type="text"
          placeholder="Phone number, email address"
          name="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <MainBtn name="Log in" func={handleSubmit} />
        {error && <p className="errorParagraph">{error}</p>}

        <span>
          <NavLink to={"/forgot-password"}>Forgot password?</NavLink>
          <NavLink to={"/register"}>Sign up to Twitter</NavLink>
        </span>
      </div>
    </div>
  );
}
