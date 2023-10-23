import { useCallback } from "react";
import "./SearchTrains.css";

const SearchTrains = () => {
  const onFrameButtonClick = useCallback(() => {
    // Please sync "Train ticket booking" to the project
  }, []);

  return (
    <button className="search-trains-wrapper" onClick={onFrameButtonClick}>
      <div className="search-trains">Search Trains</div>
    </button>
  );
};

export default SearchTrains;
