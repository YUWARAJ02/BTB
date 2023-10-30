import { useCallback, useEffect } from "react";
import "./global.css";
import './WhyUsPage.css'
import WhyUsHeader from "../components/WhyUsHeader";
import Footer from "../components/Footer";

const WhyUsPage = () => {
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
    
    <div className="fullpage">
    <div className="train-home" data-animate-on-scroll>
      <div className="train-home-child" />
      <div className="train-home-item" />
      <div className="train-home-inner" />
      <div className="train-home-child" />
      <div className="train-home-item" />
      <div className="train-home-inner" />
      
      <div className="seemore">
      </div>
      <Footer/>
      <WhyUsHeader/>
      <div className="why-us1">
        <div className="frame-child4" />
      <h4>SAFETY FIRST</h4>
      <div>Quality Controls are stringent at Bookmyvacations and are reviewed continuously. We ensure that all services, products and arrangements are monitored to provide the highest standards of punctuality, efficiency and attentive service.
       <br /> <br />

Extensive Health and Safety Audits have been done at each hotel as per ABTA & EU norms and necessary actions being taken wherever and whenever required.
<br /><br />

We are committed to keeping you safe and secure. You can depend on us for quality service with no compromise. </div> 
<h4>SERVICES OF EXPERT KNOWLEDGABLE</h4>
<div>The presence of our on-site local teams at strategic locations at our destinations makes a big difference when it comes to offering authentic programs and support to you! <br /><br />

Our ground services team relentlessly deliver unforgettable local encounters coupled with efficient and reliable services ensuring a sense of trust and confidence in demanding travellers with excellent customer support. <br /> <br />

With a team of over 150 people at our multiple offices. we are an extended team of our Travel Agents & Tour Operator partners and guarantee complete brand protection throughout all our operations, using your branding, logos and signages on the ground. </div>
        </div>
        <h4>OUTSTANDING PERSONALISED SERVICE GUARANTEED</h4>
        <div>Discover the enchanting world your way. Our travel experts completely customise your private tour to match your interests and preferences with their comprehensive knowledge of each destination. <br /><br />

With an undulating focus on fulfilling our guests' needs and aspirations, we leave no stone unturned in ensuring you get what you desire!</div>
<h4>
WE CARE FOR THE NATURE
</h4>
<div>As exciting as it is to dine with royalty in their palaces, it is often the time spent in tribal homes, schools and monasteries that are ultimately most uplifting and enlightening. <br /><br />

We are proud to be associated with various NGOs and non-profit organisations to be part of public welfare projects pertaining to free school education for the underprivileged children, orphanages, women empowerment and girl child care <br /> <br />

We are very particular about Animal welfare, and all animals encountered while on your tour are treated humanely with respect. We are strictly following animal welfare standards to adhere to ABTAs’ guideline and five freedoms. <br /> <br />

Sustainability always remains at the core of our businesses, operations and endeavours, form designing Carbon Minimal Holidays to making our day to day operations greener – we are conscious of the urgent need of arresting the further degradation of our planet.</div>
<h4>YOU ARE ALWAYS FINANCIALLY PROTECTED</h4>
<div>We’re members of all the major travel industry Associations worldwide and we also have an IATA license. This means that all trips we organize are fully financially protected in all aspects, should a supplier fail. We’ll look after you. That’s our guarantee.</div>
<h4>NEED WE SAY MORE!?</h4>
<div>We always aim for higher customer satisfaction and NPS score for our travellers and travel partners and listen closely to what they say. <br /> <br />

Our job is not only to service our clients on the ground but to ensure we deliver all the promises made & ensuring each guest is served well and is sent back with happy memories, only coming back saying … once is not enough! <br /> <br />

We invite you to experience the world of Bookmyvacations and can’t wait to see you soon with us!</div>
    </div>

    </div>
    
  );
};

export default WhyUsPage;

  