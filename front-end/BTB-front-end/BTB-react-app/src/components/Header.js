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
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fullpage">
    <div className="frame25">
      <NavigationBar />
      <b className="book-train-tickets">Book Train Tickets</b>
      <div className="check-pnr-status">Check PNR Status</div>
      <GroupComponent />
      <SearchTrains />
      <div className="from">
        <b className="from1">From</b>
        <Chennai />
      </div>
      <div className="to">
        <div className="to1">
          <b className="to2">To</b>
          <KanyakumariTo />
        </div>
        <Kanyakumari />
      </div>
      <div className="frame-child6" />
      <img className="frame-child7" alt="" src="/group-75.svg" />
      <div className="logo2">
        <i className="book1">{`Book `}</i>
        <i className="my-vacations1">MY VACATIONS</i>
      </div>
      <img className="icon1" alt="" src="/20230930134049922-1@2x.png" />
      <button className="navigation-bar">
        <div className="navigation-bar-child" />
        <Link to="/login">
       <div className="log-in-button">
          <Loginbutton />
          <LogIn />
        </div></Link>
      </button>
      <div className="date">
        <div className="date1">
          <b className="date2">Date</b>
          <DateSelector />
        </div>
        <Date22 />
      </div>
    </div>
    </div>
  );
};

export default Header;
