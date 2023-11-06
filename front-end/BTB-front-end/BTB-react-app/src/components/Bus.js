import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Bus.css";
const Bus = () => {
  const location = useLocation();
  return <div className={`bus1 ${location.pathname === '/bus' ? 'current-location' : ''}`}>Bus</div>;
};

export default Bus;
