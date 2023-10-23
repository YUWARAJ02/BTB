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

  const onSeeMoreTextClick = useCallback(() => {
    // Please sync "Why us" to the project
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
      <b className="safety-first">SAFETY FIRST</b>
      <b className="services-of-expert">SERVICES OF EXPERT KNOWLEDGABLE</b>
      <b className="outstanding-personalised-servi">
        OUTSTANDING PERSONALISED SERVICE GUARANTEED
      </b>
      <b className="we-care-for">WE CARE FOR THE NATURE</b>
      <b className="you-are-always">YOU ARE ALWAYS FINANCIALLY PROTECTED</b>
      <b className="need-we-say">NEED WE SAY MORE!?</b>
      <div className="quality-controls-are-container" data-animate-on-scroll>
        <p className="quality-controls-are">
          Quality Controls are stringent at Bookmyvacations and are reviewed
          continuously. We ensure that all services, products and arrangements
          are monitored to provide the highest standards of punctuality,
          efficiency and attentive service.
        </p>
        <p className="quality-controls-are">&nbsp;</p>
        <p className="quality-controls-are">{`Extensive Health and Safety Audits have been done at each hotel as per ABTA & EU norms and necessary actions being taken wherever and whenever required.`}</p>
        <p className="quality-controls-are">&nbsp;</p>
        <p className="quality-controls-are">
          We are committed to keeping you safe and secure. You can depend on us
          for quality service with no compromise.
        </p>
      </div>
      <div className="the-presence-of-container" data-animate-on-scroll>
        <p className="quality-controls-are">
          The presence of our on-site local teams at strategic locations at our
          destinations makes a big difference when it comes to offering
          authentic programs and support to you!
        </p>
        <p className="quality-controls-are">&nbsp;</p>
        <p className="quality-controls-are">
          Our ground services team relentlessly deliver unforgettable local
          encounters coupled with efficient and reliable services ensuring a
          sense of trust and confidence in demanding travellers with excellent
          customer support.
        </p>
        <p className="quality-controls-are">&nbsp;</p>
        <p className="quality-controls-are">{`With a team of over 150 people at our multiple offices. we are an extended team of our Travel Agents & Tour Operator partners and guarantee complete brand protection throughout all our operations, using your branding, logos and signages on the ground.`}</p>
      </div>
      <div className="discover-the-enchanting-container" data-animate-on-scroll>
        <p className="quality-controls-are">
          Discover the enchanting world your way. Our travel experts completely
          customise your private tour to match your interests and preferences
          with their comprehensive knowledge of each destination.
        </p>
        <p className="quality-controls-are">&nbsp;</p>
        <p className="quality-controls-are">
          With an undulating focus on fulfilling our guests' needs and
          aspirations, we leave no stone unturned in ensuring you get what you
          desire!
        </p>
      </div>
      <div className="as-exciting-as-container" data-animate-on-scroll>
        <p className="quality-controls-are">
          As exciting as it is to dine with royalty in their palaces, it is
          often the time spent in tribal homes, schools and monasteries that are
          ultimately most uplifting and enlightening.
        </p>
        <p className="quality-controls-are">&nbsp;</p>
        <p className="quality-controls-are">
          We are proud to be associated with various NGOs and non-profit
          organisations to be part of public welfare projects pertaining to free
          school education for the underprivileged children, orphanages, women
          empowerment and girl child care.
        </p>
        <p className="quality-controls-are">&nbsp;</p>
        <p className="quality-controls-are">
          We are very particular about Animal welfare, and all animals
          encountered while on your tour are treated humanely with respect. We
          are strictly following animal welfare standards to adhere to ABTAs’
          guideline and five freedoms.
        </p>
        <p className="quality-controls-are">&nbsp;</p>
        <p className="quality-controls-are">
          Sustainability always remains at the core of our businesses,
          operations and endeavours, form designing Carbon Minimal Holidays to
          making our day to day operations greener – we are conscious of the
          urgent need of arresting the further degradation of our planet.
        </p>
        <br></br>
        <br></br>
      </div>
      <div className="were-members-of" data-animate-on-scroll>
        We’re members of all the major travel industry Associations worldwide
        and we also have an IATA license. This means that all trips we organize
        are fully financially protected in all aspects, should a supplier fail.
        We’ll look after you. That’s our guarantee.
      </div>
      <div className="we-always-aim-container" data-animate-on-scroll>
        <p className="quality-controls-are">
          We always aim for higher customer satisfaction and NPS score for our
          travellers and travel partners and listen closely to what they say.
        </p>
        <p className="quality-controls-are">&nbsp;</p>
        <p className="quality-controls-are">{`Our job is not only to service our clients on the ground but to ensure we deliver all the promises made & ensuring each guest is served well and is sent back with happy memories, only coming back saying … once is not enough!`}</p>
        <p className="quality-controls-are">&nbsp;</p>
        <p className="quality-controls-are">
          We invite you to experience the world of Bookmyvacations and can’t
          wait to see you soon with us!
        </p>
        </div>
    </div>
    </div>
    </div>
  );
};

export default WhyUsPage;

  