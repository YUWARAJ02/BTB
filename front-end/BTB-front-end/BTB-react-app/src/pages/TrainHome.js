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
import Contents from "../components/Contents";

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
  const imageUrls = [
    '/instantcashbacklp-1@2x.png',
    '/trainticketlp1-1@2x.png',
    '/image-1@2x.png',
    'instantcashbacklp-1@2x.png',
    'coupongiftfornewuserdesigntemplated79eb825d8d9cacba9f340652db93eba-screen-1@2x.png',
    'rectangle-19@2x.png'
  ];
  return (
    
    <div className="fullpage">
    <header className="head">
    <Header/>
    </header>
    <main>
      {/* <h1 className="offertitle">
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
        <ApToKk/>
        <ChennaiToDelhi/>
        <DelhiToKolkata/>
      </article>
      <article className="divideplace">
        <BookTicketsimg/>
      </article>
      <h1 className="meal"> Meals on Wheels</h1>
      <article className="tree">
        <ChatFormContainer/>
      </article>
      <h1 className="us">Why Choose Us </h1>
      <article className="savetime">
      <div className="can1">
      <img className="frame-icon" alt="" src="/frame1.svg" />
      <div className="savestimes">Saves time</div>
      </div>
      <div className="can2">
      <img className="frame-icon1" alt="" src="/frame2.svg" />
      <div className="costefficient">Cost Efficient</div>
      </div>
      <div className="can3">
      <img className="frame-icon2" alt="" src="/frame3.svg" />
      <div className="offerstext">Offers</div>
      </div>
      <div className="can4">
      <img className="frame-icon3" alt="" src="/frame4.svg" />
      <div className="foodtext">Food</div>
      </div>
      </article>
      <article className="spacefaq"></article>
    </main>
    <footer className="foot"><Footer></Footer></footer> */}
     <Contents imageUrls={imageUrls}/>    
     </main>
    </div>
  );
};

export default TrainHome;
