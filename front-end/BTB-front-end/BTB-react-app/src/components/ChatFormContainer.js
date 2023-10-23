import Briyani from "./Briyani";
import NorthIndian from "./NorthIndian";
import Pizzas from "./Pizzas";
import Thalis from "./Thalis";
import SouthIndian from "./SouthIndian";
import "./ChatFormContainer.css";

const ChatFormContainer = () => {
  return (
    <div className="offers-frame1">
      <div className="offer-card-1-parent">
        <div className="offer-card-11">
          <img
            className="offer-card-1-item"
            alt=""
            src="/rectangle-14@2x.png"
          />
          <Briyani />
          <div className="biriyani">Biriyani</div>
        </div>
        <div className="offer-card-31">
          <img
            className="offer-card-1-item"
            alt=""
            src="/rectangle-141@2x.png"
          />
          <NorthIndian />
          <div className="north-indian">North Indian</div>
        </div>
        <div className="offer-card-5">
          <img
            className="offer-card-5-item"
            alt=""
            src="/rectangle-142@2x.png"
          />
          <Pizzas />
          <div className="pizzas">Pizzas</div>
        </div>
        <div className="offer-card-21">
          <img
            className="offer-card-1-item"
            alt=""
            src="/rectangle-143@2x.png"
          />
          <Thalis />
          <div className="thalis">Thalis</div>
        </div>
        <div className="offer-card-41">
          <img className="download-1-icon" alt="" src="/download-1@2x.png" />
          <SouthIndian />
          <div className="pizzas">South Indian</div>
        </div>
        <div className="offer-card-6">
          <img
            className="offer-card-6-child"
            alt=""
            src="/rectangle-144@2x.png"
          />
          <div className="offer-card-6-item" />
          <div className="pizzas">Chats</div>
        </div>
      </div>
    </div>
  );
};

export default ChatFormContainer;
