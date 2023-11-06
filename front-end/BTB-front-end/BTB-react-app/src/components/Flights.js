import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Flights.css";

const Flights = () => {
  const location = useLocation();
  return (
    <div className={`flights1 ${location.pathname === '/flight' ? 'current-location' : ''}`}>
      Flights
    </div>
  );
};

export default Flights;
