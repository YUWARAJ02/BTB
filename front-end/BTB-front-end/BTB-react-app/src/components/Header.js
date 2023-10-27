import React, { useState} from 'react';
import NavigationBar from "./NavigationBar";
import GroupComponent from "./GroupComponent";


import Loginbutton from "./Loginbutton";
import LogIn from "./LogIn";

import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [formData, setFormData] = useState({
    // oneWay: false,
    // roundTrip: true,
    from: '',
    to: '',
    departureDate: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'radio') {
      setFormData({
        ...formData,
        tripType: value
      });
    } else if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked
      });
    }
    else{
    setFormData({
      ...formData,
      [name]: value
    });
  }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log(formData);
  }
  return (
    <div className="fullpage">
     
    <div className="frame25">
    <form onSubmit={handleSubmit}>
      
      <div className="from400">
       <label htmlFor="from" className='fromlabel1'>From:</label>
       <div className='frominputdiv'>
      <input
        className='frominput1'
        type="text"
        id="from"
        name="from"
        placeholder='Chennai'
        value={formData.from}
        onChange={handleChange}
      />
      </div>
      </div>
       <label htmlFor="to" className='tolabel1'>To:</label>
      <input
        className='toinput1'
        type="text"
        id="to"
        name="to"
        placeholder='Mumbai'
        value={formData.to}
        onChange={handleChange}
      /><br /><br />
      <label htmlFor="departureDate" className='departurelabel1'>Departure</label>
      <input
        className='departureinput1'
        type="date"
        id="departureDate"
        name="departureDate"
        value={formData.departureDate}
        onChange={handleChange}
      /><br /><br />
      <input className='searchtrainsbutton' type="submit" value="Search Trains" /> 
    </form>
      <NavigationBar />
      <b className="book-train-tickets">Book Train Tickets</b>
      <div className="check-pnr-status">Check PNR Status</div>
      <GroupComponent />
      
      </div>
      <div className="to">
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
      
        </div>
        
      
    
  );
};

export default Header;
