import "./NavigationBar.css";
import GroupComponent from "./GroupComponent";
import { useState } from "react";

const NavigationBar = () => {
  const [condition,setCondition]=useState(false);
  return (
    <div className="fp">
  <nav className="rectangle-nav" id="navbar" >
  <GroupComponent />
  <div className="iconcontainer">
  <img className="icon1" alt="" src="/20230930134049922-1@2x.png" />
  <div className="logo2">
        <i className="book1">{`Book `}</i>
        <i className="my-vacations1">MY VACATIONS</i>
      </div>
      </div>
  </nav>
  </div>
  
  );
};

export default NavigationBar;
