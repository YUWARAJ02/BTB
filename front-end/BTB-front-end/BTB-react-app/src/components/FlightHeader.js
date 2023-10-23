import NavigationBar from "./NavigationBar";
import GroupComponent from "./GroupComponent";
import SearchTrains from "./SearchTrains";
import Chennai from "./Chennai";
import KanyakumariTo from "./KanyakumariTo";
import Kanyakumari from "./Kanyakumari";
import Loginbutton from "./Loginbutton";
import LogIn from "./LogIn";
import DateSelector from "./DateSelector";
import Date22 from "./Date22";
import "./FlightHeader.css";
import  { Link } from "react-router-dom";

const FlightHeader = () => {
  return (
    <div className="fullpage">
    <div className="frame24">
      <NavigationBar />
      <GroupComponent />
      </div>
      <div className="round-trip">Round Trip</div>
      <p className="From1">From</p>
      <div className="frame-child6" />
      <img className="frame-child7" alt="" src="/group-75.svg" />
      <div className="logo2">
        <i className="book1">{`Book `}</i>
        <i className="my-vacations1">MY VACATIONS</i>
      </div>
      <img className="icon1" alt="" src="/20230930134049922-1@2x.png" />
      <button className="navigation-bar">
        <div className="navigation-bar-child" />
        <Link to="/login "> <div className="log-in-button">
          <Loginbutton />
          <LogIn />
        </div></Link>
      </button>
      </div>
    
  );
};

export default FlightHeader;