import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  Link,
  useLocation,
} from "react-router-dom";
import TrainHome from "./pages/TrainHome";
import FlightPage from "./pages/FlightPage";
import WhyUsPage from "./pages/WhyUsPage";
import Loginsignup from "./components/Loginsignup";
import Trains from "./components/Trains";
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/flight-home":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div>
        <nav>
          <Link to="/"><Trains/></Link>
        </nav>
    
     <Routes>
       <Route path="/" element={<TrainHome />} />
       <Route path="/Flight" element={<FlightPage />} />
       <Route path="/whyus" element={<WhyUsPage />} />
       <Route path="/login" element={<Loginsignup />} />
     </Routes>
    </div>
    
  );
}
export default App;
