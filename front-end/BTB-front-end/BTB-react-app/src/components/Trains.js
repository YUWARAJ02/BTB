import "./Trains.css"
import { useNavigate } from 'react-router-dom';

const Trains = () => {

  const navigate = useNavigate();
  function handleClick() {
    navigate('/'); // Replace with the desired route
  }
  return <div className="trains1" onClick={handleClick}>
        Trains
      </div>
};

export default Trains;
