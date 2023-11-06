import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Trains.css";

const Trains = () => {
  const location = useLocation();

  return (
    <div className={`trains1 ${location.pathname === '/' ? 'current-location' : ''}`}>
      Trains
    </div>
  );
};

export default Trains;
