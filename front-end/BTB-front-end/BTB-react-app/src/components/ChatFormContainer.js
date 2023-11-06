import React from 'react';
import "./ChatFormContainer.css";

const ChatFormContainer = () => {
  const images = [
    "/rectangle-14@2x.png",
    "/rectangle-141@2x.png",
    "/rectangle-142@2x.png",
    "/rectangle-143@2x.png",
    "/download-1@2x.png",
    "/rectangle-144@2x.png"
  ];
  return (
    <div className='foodbody'>
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
          <img className="fooodimages" src={images[5]} alt="slide6" />
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
        <div className='foodslide'>
          <img className="fooodimages" src={images[5]} alt="slide6" />
        </div>
      </div>
    
    </div>
    </div>
  );
};

export default ChatFormContainer;
