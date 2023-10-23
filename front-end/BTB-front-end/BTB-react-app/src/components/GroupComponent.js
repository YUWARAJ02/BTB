import Trains from "./Trains";
import Hotels from "./Hotels";
import Flights from "./Flights";
import Bus from "./Bus";
import "./GroupComponent.css";
import { Link } from "react-router-dom";
const GroupComponent = () => {
  return (
    <div className="trains-parent">
      <Link to="/"><Trains /></Link>
      <Hotels />
      <Link to="/Flight"><Flights /></Link>
      <Bus />
      <div className="frame-child5" />
    </div>
  );
};

export default GroupComponent;
