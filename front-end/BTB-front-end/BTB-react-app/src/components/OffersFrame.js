
import React from 'react';
import "./OffersFrame.css"
const OffersFrame = ({imageUrls}) => {
  const images = [
      imageUrls[0],
      imageUrls[1],
      imageUrls[2],
      imageUrls[3],
      imageUrls[4],
  ];
  
  return (
    <div className='foodsliders'>
    <div className='slide-track'>
      <div className='foodslide'>
        <img className="fooodimages" src={images[0]} alt="slide1" />
      </div>
      <div className='foodslide'>
        <img className="fooodimages" src={images[1]} alt="slide2" />
      </div>
      <div className='foodslide'>
        <img className="fooodimages" src={images[2]} alt="slide3" />
      </div>
      <div className='foodslide'>
        <img className="fooodimages" src={images[3]} alt="slide4" />
      </div>
      <div className='foodslide'>
        <img className="fooodimages" src={images[4]} alt="slide5" />
      </div>
    <div className='foodslide'>
        <img className="fooodimages" src={images[0]} alt="slide1" />
      </div>
      <div className='foodslide'>
        <img className="fooodimages" src={images[1]} alt="slide2" />
      </div>
      <div className='foodslide'>
        <img className="fooodimages" src={images[2]} alt="slide3" />
      </div>
      <div className='foodslide'>
        <img className="fooodimages" src={images[3]} alt="slide4" />
      </div>
      <div className='foodslide'>
        <img className="fooodimages" src={images[4]} alt="slide5" />
      </div>
    </div>
    </div>
  );
}

export default OffersFrame;
