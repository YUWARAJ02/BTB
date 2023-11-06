import InstantCashbackLp1Icon from "./InstantCashbackLp1Icon";
import Image1Icon from "./Image1Icon";
import TrainTicketLp11Icon from "./TrainTicketLp11Icon";
import PhonePeIRCTCTicketBookingOIcon from "./PhonePeIRCTCTicketBookingOIcon";
import CouponGiftForNewUserDesigIcon from "./CouponGiftForNewUserDesigIcon";
import React, { useState, useEffect } from 'react';
import "./OffersFrame.css"
const OffersFrame = ({imageUrls}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const image1=imageUrls[0];
  const image2=imageUrls[1];
  const image3=imageUrls[2];
  const image4=imageUrls[3];
  const image5=imageUrls[4];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % 5);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    <InstantCashbackLp1Icon imageUrl={image1} key={0} />,
    <Image1Icon imageUrl={image2} key={1} />,
    <TrainTicketLp11Icon imageUrl={image3} key={2} />,
    <PhonePeIRCTCTicketBookingOIcon imageUrl={image4} key={3} />,
    <CouponGiftForNewUserDesigIcon imageUrl={image5} key={4} />
  ];
  // const imageUrls = [
  //   '/instantcashbacklp-1@2x.png',
  //   '/trainticketlp1-1@2x.png',
  //   '/image-1@2x.png',
  //   'instantcashbacklp-1@2x.png',
  //   'coupongiftfornewuserdesigntemplated79eb825d8d9cacba9f340652db93eba-screen-1@2x.png'
  // ];
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
