
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Trains from "./Trains";
import Hotels from "./Hotels";
import Flights from "./Flights";
import Bus from "./Bus";
import "./GroupComponent.css";
import Loginbutton from "./Loginbutton";
import UserIcon from './UserIcon';

function  GroupComponent(){
  const [condition,setCondition]=useState(false);

  return (
    <>
    <div className="trains-parent">
      <Link to="/" ><Trains /></Link>
      <Link to="/hotel" ><Hotels/></Link>
      <Link to="/flight" ><Flights/></Link>
      <Link to="/bus" ><Bus/></Link>
      {/* <div className="frame-child5" /> */}
      {condition ? (
          <UserIcon />
        ) : (
          <Loginbutton />
        )}
    </div>
     
     </>
  );
  }

export default GroupComponent;
