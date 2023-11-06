import React, { useEffect } from 'react'
import "./Contents.css"
import OffersFrame from './OffersFrame'
import Layer2Icon from './Layer2Icon'
import ApToKk from './ApToKk'
import ChennaiToDelhi from './ChennaiToDelhi'
import DelhiToKolkata from './DelhiToKolkata'
import BookTicketsimg from './BookTicketsimg'
import ChatFormContainer from './ChatFormContainer'
import Footer from './Footer'
function Contents({imageUrls}) {
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
  return (
    <div>
        <main>
      <h2 className="offertitle">
      Offers
      </h2>
    <article className="frame" id="offers" data-animate-on-scroll>
        <OffersFrame imageUrls={imageUrls}/>
        <Layer2Icon />
      </article>
      <h2 className="popularplacetitle">
       Popular places
      </h2>
      <article className="not">
        <ApToKk/>
        <ChennaiToDelhi/>
        <DelhiToKolkata/>
      </article>
      <article className="divideplace">
        <BookTicketsimg imageUrls={imageUrls[5]}/>
      </article>
      <h2 className="meal"> Meals on Wheels</h2>
      <article className="tree">
        <ChatFormContainer/>
      </article>
      <h2 className="us">Why Choose Us </h2>
      <article className="savetime">
      <div className="can1">
      <img className="frame-icon" alt="" src="/frame1.svg" />
      <div className="savestimes">Saves time</div>
      <div className='savestimes1'>Time saved is money earned</div>
      </div>
      <div className="can2">
      <img className="frame-icon1" alt="" src="/frame2.svg" />
      <div className="costefficient">Cost Efficient</div>
      <div className='costefficient1'>Saving on costs today, investing in tomorrow</div>
      </div>
      <div className="can3">
      <img className="frame-icon2" alt="" src="/frame3.svg" />
      <div className="offerstext">Offers</div>
      <div className='offerstext1'>Unwrap Savings, Discover Joy</div>
      </div>
      <div className="can4">
      <img className="frame-icon3" alt="" src="/frame4.svg" />
      <div className="foodtext">Food</div>
      <div className='foodtext1'>Eat well, feel well</div>
      </div>
      </article>
      <article className="spacefaq">
      <h2 className='faqtext'>FAQs</h2>
       <details>
           <summary>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ?</summary>
           <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore to Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla </div>
       </details>
       <hr />
       <details>
           <summary>Sed ut perspiciatis unde omnis iste natus error sit?</summary>
           <div>No comments</div>
       </details>
       <hr />
       <details>
           <summary>Quis autem vel eum iure reprehenderit qui in ea voluptate velit?</summary>
           <div>No comments</div>
       </details>
       <hr />
       <details>
           <summary>Sed ut perspiciatis unde omnis iste natus error sit?</summary>
           <div>No comments</div>
       </details>
       <hr />
       <details>
           <summary>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ?</summary>
           <div>No comments</div>
       </details>
      </article>
    </main>
    <footer className="foot"><Footer></Footer></footer>
    </div>
  )
}

export default Contents