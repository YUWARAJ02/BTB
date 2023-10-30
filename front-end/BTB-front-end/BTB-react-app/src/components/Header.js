import React, { useState } from 'react';
import "./Header.css";

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
    else {
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
          <div className='formcomponents'>
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
          <div className='searchT'>
          <input className='searchtrainsbutton' type="submit" value="Search Trains" />
          </div>
          </div>
        </form>
        <b className="book-train-tickets">Book Train Tickets</b>
        <b className="check-pnr-status">Check PNR Status</b>
      </div>
      <div className="frame-child6" />
    </div>

  );
};

export default Header;
