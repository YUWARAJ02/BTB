import { useCallback, useEffect } from "react";
import FlightHeader from "../components/FlightHeader";
import FlightpageOffersFrame from "../components/FlightpageOffersFrame";
import Layer2Icon from "../components/Layer2Icon";
import ExcepteurSintOccaeat from "../components/ExcepteurSintOccaeat";
import Offers from "../components/Offers";
import SpecialForce from "../components/SpecialForce";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQs from "../components/FAQs";
import BookTicketsimg from "../components/BookTicketsimg";
import LoremIpsumDolor from "../components/LoremIpsumDolor";
import SpecialForceFrame from "../components/SpecialForceFrame";
import "./TrainHome.css";
import "./global.css";
import "./FlightPage.css";
import {
  Link
} from "react-router-dom";
import WhyUsFooter from "../components/WhyUsFooter";

const FlightPage = () => {
  const customStyle = {
    top:'162.81rem'
    // Add any other CSS properties you want to apply
  };
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onSeeMoreTextClick = useCallback(() => {
    // Please sync "Why us" to the project
  }, []);

  return (
    
    <div className="fullpage">
    <div className="train-home" data-animate-on-scroll>
      <div className="train-home-child" />
      <div className="train-home-item" />
      <div className="train-home-inner" />
      <div className="line-div" />
      <Link to="/whyus"><div className="see-moree" >
       See more
      </div></Link> 
      <div className="footer1" style={customStyle}>
      <WhyUsFooter />
      </div>
      <FlightHeader />
      <article className="frame" id="offers" data-animate-on-scroll>
      <FlightpageOffersFrame/>
        <Layer2Icon />
      </article>
      <SpecialForce/>
      <div className="frame112">
        <ExcepteurSintOccaeat />
        <div className="frame-child" />
      </div>
      <div className="frame113">
        <b className="sed-ut-perspiciatis">
          Sed ut perspiciatis unde omnis iste natus error sit?
        </b>
        <img className="frame-item" alt="" src="/group-32.svg" />
      </div>
      <div className="frame114">
        <b className="sed-ut-perspiciatis">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit?
        </b>
        <img className="frame-inner" alt="" src="/group-32.svg" />
      </div>
      <div className="frame115">
        <b className="sed-ut-perspiciatis">
          Sed ut perspiciatis unde omnis iste natus error sit?
        </b>
        <img className="group-icon" alt="" src="/group-32.svg" />
      </div>
      <div className="frame116">
        <div className="excepteur-sint-occaecat">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ?
        </div>
        <img className="frame-child1" alt="" src="/group-32.svg" />
      </div>
      <div className="frame7">
        <Offers />
      </div>
      <div className="frame999">
      <WhyChooseUs />
      </div>
      <div className="frame100">
        <FAQs />
      </div>
      <div className="frame111">
        <div className="banner">
          <img className="banner-child" alt="" src="/rectangle-19@2x.png" />
          <BookTicketsimg />
          <b className="book-tickets-in-container">
            <p className="book-tickets-in">Book Tickets in advance</p>
            <p className="book-tickets-in">for the lowest cost</p>
          </b>
        </div>
      </div>
      <div className="frame12">
        <LoremIpsumDolor />
      </div>
      <SpecialForceFrame/>
      <div className="train-home-child1" />
      <div className="train-home-child2" />
      <div className="frame177">
        <div className="why-us">
          <div className="offer-card-1">
            <div className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed `}</div>
            <div className="saves-time">Saves time</div>
          </div>
          <div className="offer-card-3">
            <div className="ipsum-dolor-sit">{`Ipsum dolor sit amet, consectetur adipiscing elit `}</div>
            <div className="offers">Offers</div>
          </div>
          <div className="offer-card-2">
            <div className="ipsum-dolor-sit">{`Ipsum dolor sit amet, consectetur adipiscing elit `}</div>
            <div className="cost-efficient">Cost Efficient</div>
          </div>
          <div className="offer-card-4">
            <div className="ipsum-dolor-sit">{`Ipsum dolor sit amet, consectetur adipiscing elit `}</div>
            <div className="food">{`Food `}</div>
          </div>
        </div>
        <img className="frame-icon" alt="" src="/frame1.svg" />
        <img className="frame-icon1" alt="" src="/frame2.svg" />
        <img className="frame-icon2" alt="" src="/frame3.svg" />
        <img className="frame-icon3" alt="" src="/frame4.svg" />
      </div>
    </div>
    </div>
  );
};

export default FlightPage;