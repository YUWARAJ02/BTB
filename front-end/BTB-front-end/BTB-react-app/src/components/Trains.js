import React, { useState } from 'react';
import "./Trains.css";
const Trains = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  }

  return <div className="trains1">
   <div 
        onClick={handleClick}
        style={{ color: isClicked ? 'var(--color-goldenrod)' : 'var(--color-white)' }}
      >
        Trains
      </div>
    </div>;
};

export default Trains;
