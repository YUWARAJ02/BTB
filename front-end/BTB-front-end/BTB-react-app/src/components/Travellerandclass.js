
import "./Travellerandclass.css";
import React from 'react';
const Travellerandclass = ({togglePopup}) => {
  return (
    <div className="clickable-area" onClick={togglePopup}>
    <div className="to8">
      <b className="traveller-class1">{`Traveller & Class`}</b>
      <div className="to-child1" />
      <div className="traveller1">{`1 Traveller `}</div>
      <div className="economy2">Economy</div>
    </div>
    </div>
  );
};
export default Travellerandclass;
