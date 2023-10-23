import { useCallback } from "react";
import "./Flights.css";

const Flights = () => {
  const onFlightsTextClick = useCallback(() => {
    // Please sync "Flight home" to the project
  }, []);

  return (
    <div className="flights1" onClick={onFlightsTextClick}>
      Flights
    </div>
  );
};

export default Flights;
