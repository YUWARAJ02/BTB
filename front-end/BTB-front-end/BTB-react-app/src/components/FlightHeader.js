import React, { useState } from 'react';
import NavigationBar from "./NavigationBar";
import GroupComponent from "./GroupComponent";
import Loginbutton from "./Loginbutton";
import LogIn from "./LogIn";
import "./FlightHeader.css";
import  { Link } from "react-router-dom";

const FlightHeader = () => {

  const [formData, setFormData] = useState({
    oneWay: false,
    roundTrip: true,
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    travelerCount: 1,
    travelClass: 'economy'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log(formData);
  }
  return (
    <div className="fullpage">
    <div className="frame24">
      <NavigationBar />
      <GroupComponent />
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="oneWay"
            value={true}
            checked={formData.oneWay}
            onChange={handleChange}
          />
          One Way
        </label>
        <label>
          <input
            type="radio"
            name="roundTrip"
            value={true}
            checked={formData.roundTrip}
            onChange={handleChange}
          />
          Round Trip
        </label><br /><br />
        <div className="from40">
         <label htmlFor="from" className='fromlabel'>From:</label>
         <div className='frominputdiv'>
        <input
          className='frominput'
          type="text"
          id="from"
          name="from"
          value={formData.from}
          onChange={handleChange}
        />
        </div>
        </div>
         <label htmlFor="to" className='tolabel'>To:</label>
        <input
          className='toinput'
          type="text"
          id="to"
          name="to"
          value={formData.to}
          onChange={handleChange}
        /><br /><br />

        <label htmlFor="departureDate" className='departurelabel'>Departure</label>
        <input
          className='departureinput'
          type="date"
          id="departureDate"
          name="departureDate"
          value={formData.departureDate}
          onChange={handleChange}
        /><br /><br />

       {/* {formData.roundTrip && (
          <>
            <label htmlFor="returnDate">Return Date:</label>
            <input
              type="date"
              id="returnDate"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
            /><br /><br />
          </>
        )}

        <label htmlFor="travelerCount">Traveler Count:</label>
        <input
          type="number"
          id="travelerCount"
          name="travelerCount"
          value={formData.travelerCount}
          onChange={handleChange}
        /><br /><br />

        <label htmlFor="travelClass">Travel Class:</label>
        <select
          id="travelClass"
          name="travelClass"
          value={formData.travelClass}
          onChange={handleChange}
        >
          <option value="economy">Economy</option>
          <option value="business">Business</option>
          <option value="first">First Class</option>
        </select><br /><br />

        <input type="submit" value="Search Flights" /> */}
      </form>
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
        <Link to="/login "> <div className="log-in-button">
          <Loginbutton />
          <LogIn />
        </div></Link>
      </button>
      </div>
    
  );
};

export default FlightHeader;