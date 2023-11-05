import { useCallback, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OffersFrame from "../components/OffersFrame";
import Layer2Icon from "../components/Layer2Icon";
import ChatFormContainer from "../components/ChatFormContainer";
import ExcepteurSintOccaeat from "../components/ExcepteurSintOccaeat";
import Offers from "../components/Offers";
import PopularPlacesspace from "../components/PopularPlacesspace";
import MealsOnWheels from "../components/MealsOnWheels";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQs from "../components/FAQs";
import BookTicketsimg from "../components/BookTicketsimg";
import LoremIpsumDolor from "../components/LoremIpsumDolor";
import ChennaiToDelhi from "../components/ChennaiToDelhi";
import DelhiToKolkata from "../components/DelhiToKolkata";
import ApToKk from "../components/ApToKk";
import "./TrainHome.css";
import "./global.css";
import {
  Link
} from "react-router-dom";
import Places from "../components/Places";

const TrainHome = () => {
  // useEffect(() => {
  //   const scrollAnimElements = document.querySelectorAll(
  //     "[data-animate-on-scroll]"
  //   );
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       for (const entry of entries) {
  //         if (entry.isIntersecting || entry.intersectionRatio > 0) {
  //           const targetElement = entry.target;
  //           targetElement.classList.add("animate");
  //           observer.unobserve(targetElement);
  //         }
  //       }
  //     },
  //     {
  //       threshold: 0.15,
  //     }
  //   );

  //   for (let i = 0; i < scrollAnimElements.length; i++) {
  //     observer.observe(scrollAnimElements[i]);
  //   }

  //   return () => {
  //     for (let i = 0; i < scrollAnimElements.length; i++) {
  //       observer.unobserve(scrollAnimElements[i]);
  //     }
  //   };
  // }, []);

  // const onSeeMoreTextClick = useCallback(() => {
  //   // Please sync "Why us" to the project
  // }, []);

  return (
    
    <div className="fullpage">
    {/* <div className="train-home" data-animate-on-scroll>
      <div className="train-home-child" />
      <div className="train-home-item" />
      <div className="train-home-inner" />
      <div className="line-div" />
      <div className="see-more" >
       <Link to="/whyus">See more</Link> 
      </div>
      <Header />
      <article className="frame" id="offers" data-animate-on-scroll>
        <OffersFrame />
        <Layer2Icon />
      </article>
      <article className="frame1" id="meals">
        <img className="layer-3-icon" alt="" src="/layer-2.svg" />
        <ChatFormContainer />
      </article>
      <div className="frame2">
        <ExcepteurSintOccaeat />
        <div className="frame-child" />
      </div>
      <div className="frame3">
        <b className="sed-ut-perspiciatis">
          Sed ut perspiciatis unde omnis iste natus error sit?
        </b>
        <img className="frame-item" alt="" src="/group-32.svg" />
      </div>
      <div className="frame4">
        <b className="sed-ut-perspiciatis">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit?
        </b>
        <img className="frame-inner" alt="" src="/group-32.svg" />
      </div>
      <div className="frame5">
        <b className="sed-ut-perspiciatis">
          Sed ut perspiciatis unde omnis iste natus error sit?
        </b>
        <img className="group-icon" alt="" src="/group-32.svg" />
      </div>
      <div className="frame6">
        <div className="excepteur-sint-occaecat">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ?
        </div>
        <img className="frame-child1" alt="" src="/group-32.svg" />
      </div>
      <div className="frame7">
        <Offers />
      </div>
      <PopularPlacesspace />
      <div className="frame8">
        <MealsOnWheels />
      </div>
      <div className="frame9">
        <WhyChooseUs />
      </div>
      <div className="frame10">
        <FAQs />
      </div>
      <div className="frame1111">
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
      <div className="frame13">
        <div className="banner">
          <div className="frame14">
            <img className="rectangle-icon" alt="" src="/rectangle-15@2x.png" />
            <ChennaiToDelhi />
            <b className="chennai-to-delhi">Chennai to Delhi</b>
          </div>
          <div className="frame15">
            <img className="rectangle-icon" alt="" src="/rectangle-18@2x.png" />
            <DelhiToKolkata />
            <b className="delhi-to-kolakta">Delhi to Kolakta</b>
          </div>
          <div className="frame16">
            <img className="rectangle-icon" alt="" src="/rectangle-16@2x.png" />
            <ApToKk />
            <b className="andhra-pradhesh-to">Andhra Pradhesh to Kanyakumari</b>
          </div>
        </div>
      </div>
      <div className="train-home-child1" />
      <div className="train-home-child2" />
      <div className="frame17">
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
    </div> */}
  
    <header className="head">
    <Header/>
    </header>
    <main>
      <h1 className="offertitle">
      Offers
      </h1>
    <article className="frame" id="offers" data-animate-on-scroll>
        <OffersFrame />
        <Layer2Icon />
      </article>
      <h1 className="popularplacetitle">
       Popular places
      </h1>
      <article className="not">
      </article>
    </main>
    </div>
  );
};

export default TrainHome;
