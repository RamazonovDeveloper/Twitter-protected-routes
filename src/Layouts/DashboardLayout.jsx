import React from "react";
import "./homeLayout.css";
import { Navigate, Outlet } from "react-router-dom";
import Slidebar from "../Components/leftSlidebar/Slidebar";
import RightBar from "../Components/rightBar/RightBar";

export default function DashboardLayout() {

  let auth = localStorage.getItem("twitter_token")

  return (
    <div className="homeLayout">
      <Slidebar />
      {auth ? <Outlet /> : <Navigate to={'/login'} />}
      <RightBar />
    </div>
  );
}
