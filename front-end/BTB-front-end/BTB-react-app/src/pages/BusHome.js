import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./global.css";
import OffersFrame from "../components/OffersFrame";
import Layer2Icon from "../components/Layer2Icon";
import BusHeader from "../components/BusHeader";
import Contents from "../components/Contents";

const TrainHome = () => {
  const navigate = useNavigate();

  const onFlightsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    // Please sync "Train ticket booking" to the project
  }, []);

  const onRectangle20Click = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onSeeMoreTextClick = useCallback(() => {
    // Please sync "Why us" to the project
  }, []);
  const imageUrls = [
    '/instantcashbacklp-1@2x.png',
    '/trainticketlp1-1@2x.png',
    '/image-1@2x.png',
    'instantcashbacklp-1@2x.png',
    'coupongiftfornewuserdesigntemplated79eb825d8d9cacba9f340652db93eba-screen-1@2x.png'
  ];

  return (
    <div className="fullpage">
    {/* <div className="bus-home">
      <img className="bg-img-icon1" alt="" src="/bus_banner.jpg" />
      <div className="bus-home-child" />
      <div className="bus-home-item" />
      <b className="book-train-tickets">Book Bus Tickets</b>
      <div className="check-pnr-status">Check PNR Status</div>
      <div className="bus-group">
        <div className="trains2">Trains</div>
        <div className="hotels2">Hotels</div>
        <div className="flights2" onClick={onFlightsTextClick}>
          Flights
        </div>
        <div className="bus2">Bus</div>
        <div className="frame-item" />
      </div>
      <div className="search-trains-wrapper" onClick={onFrameContainerClick}>
        <div className="search-trains">Search Trains</div>
      </div>
      <b className="offers2">Offers</b>
      <b className="popular-places">Popular Places</b>
      <b className="meals-on-wheels">Meals on Wheels</b>
      <b className="why-choose-us1">{`Why Choose Us `}</b>
      <b className="sed-ut-perspiciatis2">
        Sed ut perspiciatis unde omnis iste natus error sit?
      </b>
      <b className="sed-ut-perspiciatis3">
        Sed ut perspiciatis unde omnis iste natus error sit?
      </b>
      <b className="quis-autem-vel1">
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit?
      </b>
      <b className="faqs1">FAQs</b>
      <div className="banner1">
        <img className="banner-inner" alt="" src="/rectangle-192@2x.png" />
        <div className="rectangle-div" />
        <b className="book-tickets-in-container1">
          <p className="book-tickets-in1">Book Tickets in advance</p>
          <p className="book-tickets-in1">for the lowest cost</p>
        </b>
      </div>
      <div className="excepteur-sint-occaecat2">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ?
      </div>
      <div className="lorem-ipsum-dolor2">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore to Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla `}</div>
      <div className="excepteur-sint-occaecat3">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ?
      </div>
      <div className="offers-frame1">
        <img
          className="instant-cashback-lp-1-icon1"
          alt=""
          src="/instantcashbacklp-11@2x.png"
        />
        <img className="image-1-icon1" alt="" src="/image-11@2x.png" />
        <img
          className="bus-ticket-lp1-1-icon1"
          alt=""
          src="/trainticketlp1-11@2x.png"
        />
        <img
          className="phonepe-irctc-ticket-booking-o-icon1"
          alt=""
          src="/phonepe-irctc-ticket-booking-offer-11@2x.png"
        />
        <img
          className="coupon-gift-for-new-user-desig-icon1"
          alt=""
          src="/coupongiftfornewuserdesigntemplated79eb825d8d9cacba9f340652db93eba-screen-11@2x.png"
        />
        <div className="offers-frame-item" />
      </div>
      <div className="from2">
        <b className="from3">From</b>
        <div className="from-item" />
        <div className="chennai2">Chennai</div>
      </div>
      <div className="to3">
        <div className="to4">
          <b className="to5">To</b>
          <div className="to-inner" />
        </div>
        <div className="kanyakumari">Kanyakumari</div>
      </div>
      <div className="date">
        <div className="date1">
          <b className="date2">Date</b>
          <div className="from-item" />
        </div>
        <div className="oct-sun">22 Oct, Sun</div>
      </div>
      <div className="offers-frame2">
        <div className="offer-card-1-parent">
          <div className="offer-card-11">
            <img
              className="offer-card-1-item"
              alt=""
              src="/rectangle-14@2x.png"
            />
            <div className="offer-card-1-inner" />
            <div className="biriyani">Biriyani</div>
          </div>
          <div className="offer-card-31">
            <img
              className="offer-card-1-item"
              alt=""
              src="/rectangle-141@2x.png"
            />
            <div className="offer-card-1-inner" />
            <div className="north-indian">North Indian</div>
          </div>
          <div className="offer-card-5">
            <img
              className="offer-card-5-child"
              alt=""
              src="/rectangle-142@2x.png"
            />
            <div className="offer-card-1-inner" />
            <div className="pizzas">Pizzas</div>
          </div>
          <div className="offer-card-21">
            <img
              className="offer-card-1-item"
              alt=""
              src="/rectangle-143@2x.png"
            />
            <div className="offer-card-1-inner" />
            <div className="thalis">Thalis</div>
          </div>
          <div className="offer-card-41">
            <img className="download-1-icon" alt="" src="/download-1@2x.png" />
            <div className="offer-card-4-item" />
            <div className="pizzas">South Indian</div>
          </div>
          <div className="offer-card-6">
            <img
              className="offer-card-6-child"
              alt=""
              src="/rectangle-144@2x.png"
            />
            <div className="offer-card-1-inner" />
            <div className="pizzas">Chats</div>
          </div>
        </div>
      </div>
      <div className="popular-places1">
        <img
          className="popular-places-child"
          alt=""
          src="/rectangle-151@2x.png"
        />
        <div className="popular-places-item" />
        <b className="chennai-to-delhi">Chennai to Delhi</b>
        <img
          className="popular-places-inner"
          alt=""
          src="/rectangle-18@2x.png"
        />
        <div className="popular-places-child1" />
        <b className="delhi-to-kolakta">Delhi to Kolakta</b>
        <img
          className="popular-places-child2"
          alt=""
          src="/rectangle-161@2x.png"
        />
        <div className="popular-places-child3" />
        <b className="andhra-pradhesh-to">Andhra Pradhesh to Kanyakumari</b>
      </div>
      <div className="bus-home-inner" />
      <div className="why-us1">
        <div className="offer-card-12">
          <div className="offer-card-1-child1" />
          <div className="lorem-ipsum-dolor3">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed `}</div>
          <div className="saves-time1">Saves time</div>
        </div>
        <div className="offer-card-32">
          <div className="offer-card-3-child1" />
          <div className="ipsum-dolor-sit3">{`Ipsum dolor sit amet, consectetur adipiscing elit `}</div>
          <div className="offers3">Offers</div>
        </div>
        <div className="offer-card-22">
          <RectangleComponent />
          <div className="ipsum-dolor-sit3">{`Ipsum dolor sit amet, consectetur adipiscing elit `}</div>
          <div className="cost-efficient1">Cost Efficient</div>
        </div>
        <div className="offer-card-42">
          <div className="offer-card-4-inner" />
          <div className="ipsum-dolor-sit3">{`Ipsum dolor sit amet, consectetur adipiscing elit `}</div>
          <div className="food1">{`Food `}</div>
        </div>
      </div>
      <div className="navigation-bar1">
        <div className="navigation-bar-item" />
        <div className="log-in-button1">
          <div className="log-in-button-item" onClick={onRectangle20Click} />
          <div className="log-in1">Log in</div>
        </div>
      </div>
      <div className="bus-home-child1" />
      <div className="bus-home-child2" />
      <div className="bus-home-child3" />
      <div className="bus-home-child4" />
      <div className="bus-home-child5" />
      <div className="bus-home-child6" />
      <img className="bus-home-child7" alt="" src="/group-32.svg" />
      <img className="bus-home-child8" alt="" src="/group-36.svg" />
      <img className="bus-home-child9" alt="" src="/group-32.svg" />
      <img className="bus-home-child10" alt="" src="/group-32.svg" />
      <img className="bus-home-child11" alt="" src="/group-32.svg" />
      <div className="see-more" onClick={onSeeMoreTextClick}>
        See more
      </div>
      <img className="bus-home-child12" alt="" src="/group-75.svg" />
      <div className="logo1">
        <i className="book1">{`Book `}</i>
        <i className="my-vacations1">MY VACATIONS</i>
      </div>
      <img className="icon2" alt="" src="/20230930134049922-1@2x.png" />
      <div className="footer1">
        <div className="footer-item" />
        <div className="group-container">
          <div className="contact-group">
            <div className="contact1">Contact</div>
            <div className="support1">Support</div>
            <div className="faq1">FAQ</div>
            <div className="company1">Company</div>
          </div>
          <div className="flights-group">
            <div className="flights3">Flights</div>
            <div className="trains3">Trains</div>
            <div className="bus3">Bus</div>
            <div className="hotels3">Hotels</div>
            <div className="quick-links1">Quick links</div>
          </div>
          <div className="salesbookmyvacationsnowcom-parent">
            <div className="salesbookmyvacationsnowcom">
              sales@bookmyvacationsnow.com
            </div>
            <div className="div">94422 39333</div>
            <div className="ssv-complex-sri">
              SSV Complex, Sri Sarada College Road, Fairlands, Salem - 636 016.
            </div>
          </div>
          <div className="bookmyvacations-has-been">
            Bookmyvacations has been a leading award-winning travel company,
            tour operator and experiential destination management company (DMC).
          </div>
          <div className="newsletter-group">
            <div className="newsletter1">Newsletter</div>
            <div className="email3">
              <div className="email-item" />
              <div className="email-container">
                <div className="email4">Email</div>
                <img className="group-inner" alt="" src="/arrow-1.svg" />
              </div>
            </div>
            <img className="group-child1" alt="" src="/group-7.svg" />
          </div>
          <div className="logo2">
            <div className="logo3">
              <i className="book2">{`Book `}</i>
              <i className="my-vacations2">MY VACATIONS</i>
            </div>
            <img className="icon3" alt="" src="/20230930134049922-11@2x.png" />
          </div>
        </div>
      </div>
      <img className="clock-icon1" alt="" src="/clock-icon.svg" />
      <img className="vector-icon1" alt="" src="/vector.svg" />
      <img className="offer-icon1" alt="" src="/offer-icon.svg" />
      <img className="food-icon1" alt="" src="/food-icon.svg" />
      <img className="layer-2-icon2" alt="" src="/layer-2.svg" />
      <img className="layer-3-icon" alt="" src="/layer-2.svg" />
    </div> */}
    <header className="head">
    <BusHeader/>
    </header>
    <main>
      {/* <h1 className="offertitle">
      Offers
      </h1>
    <article className="frame" id="offers" data-animate-on-scroll>
        <OffersFrame />
        <Layer2Icon />
      </article> */}
      <Contents imageUrls={imageUrls}/>
    </main>
    </div>
  );
};

export default TrainHome;
