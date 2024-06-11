import { NavLink } from "react-router-dom";
import "./mainBtn.css";
export default function MainBtn({ name, func }) {
  return (
    <button className="MainBtn" onClick={func}>
      <NavLink>{name}</NavLink>
    </button>
  );
}
