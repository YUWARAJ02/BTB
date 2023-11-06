import Contents from "../components/Contents";
import FlightHead from "../components/FlightHead";
import "./FlightPage.css";
const FlightPage = () => {
  const imageUrls = [
    '/trainticketlp1-11@2x.png',
    '/instantcashbacklp-11@2x.png',
    '/image-11@2x.png',
    '/phonepe-irctc-ticket-booking-offer-11@2x.png',
    '/coupongiftfornewuserdesigntemplated79eb825d8d9cacba9f340652db93eba-screen-11@2x.png',
    '/rectangle-191@2x.png'
  ];
  return (
    <div className="fullpage">
    <header className="head">
      <FlightHead/>
    </header>
    <main className="nothing">
    <Contents imageUrls={imageUrls}/>    
    </main>
   </div>
  );
};

export default FlightPage;