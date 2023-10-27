
import React from 'react';
import { Link, useLocation} from "react-router-dom";
import Trains from "./Trains";
import Hotels from "./Hotels";
import Flights from "./Flights";
import Bus from "./Bus";
import "./GroupComponent.css";


function  GroupComponent(){
  const location = useLocation();

    let trainStyle = {};
    if (location.pathname === '/') {
      trainStyle = { color: 'var(--color-white)', position: 'absolute',
      top: 0,
      left: 0,
      fontSize:'var(--font-size-base)',
      fontWeight: 600,
      fontFamily: 'var(--font-montserrat)',
      textAlign: 'left'};
    }
  return (
    <div className="trains-parent">
      <Trains/>
      <Link to="/hotel" ><Hotels/></Link>
      <Link to="/flight" ><Flights/></Link>
      <Link to="/bus" ><Bus/></Link>
      <div className="frame-child5" />
    </div>
  );
  }

export default GroupComponent;
