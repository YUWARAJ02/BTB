import Trains from "./Trains";
import Hotels from "./Hotels";
import Flights from "./Flights";
import Bus from "./Bus";
import "./GroupComponent.css";
import { Link } from "react-router-dom";
import React, { useState } from 'react';

const GroupComponent = () => {
  
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  }

  return (
    <div className="trains-parent">

      <Link to="/" onClick={handleClick}
        style={{ color: isClicked ? 'var(--color-goldenrod)' : 'var(--color-white)' }}><Trains /></Link>
      <Hotels />
      <Link to="/Flight"><Flights /></Link>
      <Bus />
      <div className="frame-child5" />
    </div>
  );
};

export default GroupComponent;
