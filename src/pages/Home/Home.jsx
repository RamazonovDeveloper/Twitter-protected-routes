import customise from "../../img/customise.svg";
import "./home.css";
import homeContent from "../../img/homeContent.svg";

export default function Home() {
  return (
    <div className="homeNews">
      <div className="homeNav">
        <h2>Home</h2>
        <img src={customise} alt="" />
      </div>
      <img className="homeContent" src={homeContent} alt="" />
    </div>
  );
}
