import "./Hotels.css";
import React from 'react';
import { useLocation } from 'react-router-dom';
const Hotels = () => {
  const location = useLocation();

  return <div className={`hotels1 ${location.pathname === '/hotel' ? 'current-location' : ''}`}>Hotels</div>;
};

export default Hotels;
