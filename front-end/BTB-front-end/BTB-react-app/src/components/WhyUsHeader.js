import NavigationBar from "./NavigationBar";
import Loginbutton from "./Loginbutton";
import LogIn from "./LogIn";
import "./WhyUsHeader.css";
import GroupComponent from "./GroupComponent";

const WhyUsHeader = () => {
  return (
    <div className="fullpage">
    <div className="frame26">
      <NavigationBar />
      <GroupComponent/>
      <div className="frame-child6" />
      <div className="logo">
        <i className="book1">{`Book `}</i>
        <i className="my-vacations1">MY VACATIONS</i>
      </div>
      <img className="icon1" alt="" src="/20230930134049922-1@2x.png" />
      <button className="navigation-bar">
        <div className="navigation-bar-child" />
        <div className="log-in-button">
          <Loginbutton />
          <LogIn />
        </div>
      </button>
    </div>
    </div>
  );
};

export default WhyUsHeader;