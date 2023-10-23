import InstantCashbackLp1Icon from "./InstantCashbackLp1Icon";
import Image1Icon from "./Image1Icon";
import TrainTicketLp11Icon from "./TrainTicketLp11Icon";
import PhonePeIRCTCTicketBookingOIcon from "./PhonePeIRCTCTicketBookingOIcon";
import CouponGiftForNewUserDesigIcon from "./CouponGiftForNewUserDesigIcon";
import React, { useState, useEffect } from 'react';
import "./FlightpageOffersFrame.css"
const OffersFrame = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % 5);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const slides = [
    <InstantCashbackLp1Icon imageUrl="trainticketlp1-11@2x.png" key={0} />,
    <Image1Icon imageUrl="instantcashbacklp-11@2x.png" key={1} />,
    <TrainTicketLp11Icon imageUrl="image-11@2x.png" key={2} />,
    <PhonePeIRCTCTicketBookingOIcon imageUrl="phonepe-irctc-ticket-booking-offer-11@2x.png" key={3} />,
    <CouponGiftForNewUserDesigIcon imageUrl="coupongiftfornewuserdesigntemplated79eb825d8d9cacba9f340652db93eba-screen-11@2x.png" key={4} />
  ];
  return (
    <div className="carousel">
    <div className="slides-container">
      {slides.map((slide, index) => (
        <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
          {slide}
        </div>
      ))}
    </div>
  </div>
  );
}
export default OffersFrame;