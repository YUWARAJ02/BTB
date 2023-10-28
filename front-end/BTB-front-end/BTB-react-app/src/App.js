import { Routes, Route } from "react-router-dom";
import TrainHome from "./pages/TrainHome";
import FlightPage from "./pages/FlightPage";
import WhyUsPage from "./pages/WhyUsPage";
import Login from './components/Loginsignup';
import Signup from './components/signup';

function App() {
  // ... (existing code)

  return (
    <div>
      <Routes>
        <Route path="/" element={<TrainHome />} />
        <Route path="/Flight" element={<FlightPage />} />
        <Route path="/whyus" element={<WhyUsPage />} />
        <Route path="/login" element={<Login />} /> {/* Updated route for Login */}
        <Route path="/signup" element={<Signup />} /> {/* Added route for Signup */}
      </Routes>
    </div>
  );
}

export default App;
