import React, { useState,useEffect} from 'react';
import NavigationBar from "./NavigationBar";
import GroupComponent from "./GroupComponent";
import Loginbutton from "./Loginbutton";
import LogIn from "./LogIn";
import "./FlightHeader.css";
import  { Link } from "react-router-dom";
import Travellerandclass from "./Travellerandclass";
import "./Popuptravellers.css";
import Popuptravellers from "./Popuptravellers"
const FlightHeader = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (popupVisible && !document.getElementById('popup').contains(e.target)) {
        setPopupVisible(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [popupVisible]);

  const togglePopup = () => {
    console.log('clicked')
    setPopupVisible(!popupVisible);
  };

  const [formData, setFormData] = useState({
    // oneWay: false,
    // roundTrip: true,
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    travelerCount: 1,
    travelClass: 'economy'
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
    <div className="frame24">
      <NavigationBar />
      <GroupComponent />
      <form onSubmit={handleSubmit}>
      <div className='onewaylabel'>
        <label  className='o'>
          <input
             className='onewayinput'
            type="radio"
            name="radio_button"
            value="oneWay"
            checked={formData.tripType==="oneWay"}
            onChange={handleChange}
          />
          One Way
        </label>
        </div>
        <div className='roundlabel'>
        <label className='r'>
          <input
          className='roundinput'
            type="radio"
            name="radio_button"
            value="roundTrip"
            checked={formData.tripType==="roundTrip"}
            onChange={handleChange}
          />
          Round Trip
        </label></div><br /><br />
        <div className="from40">
         <label htmlFor="from" className='fromlabel'>From:</label>
         <div className='frominputdiv'>
        <input
          className='frominput'
          type="text"
          id="from"
          name="from"
          placeholder='Chennai'
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
          placeholder='Mumbai'
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

        { (
          <>
            <label htmlFor="returnDate" className='returnlabel'>Return </label>
            <input
              className='returninput'
              type="date"
              id="returnDate"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
            /><br /><br />
          </>
        )}
          <Travellerandclass togglePopup={togglePopup} />
      {popupVisible && (
           <Popuptravellers/>
      )}
        {/* <div className="input-container">
  <label htmlFor="travelerCount" className='travellerlabel'>Traveller & class</label>
 
  <div className="input-wrapper">
  <p className='texttravel'>travelers</p>
    <input
     className='travellerinput'
      type="number"
      id="travelerCount"
      name="travelerCount"
      value={formData.travelerCount}
      onChange={handleChange}
    />
    <label htmlFor="travelClass"></label>
    <select
      className='classinput'
      id="travelClass"
      name="travelClass"
      value={formData.travelClass}
      onChange={handleChange}
    >
      <option value="economy">Economy</option>
      <option value="business">Business</option>
      <option value="first">First Class</option>
    </select>
  </div>
</div> */}

        <input className='searchflightsbutton' type="submit" value="Search Flights" /> 
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