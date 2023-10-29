import { Routes, Route } from "react-router-dom";
import TrainHome from "./pages/TrainHome";
import FlightPage from "./pages/FlightPage";
import WhyUsPage from "./pages/WhyUsPage";
import Login from './components/Loginsignup';
import Signup from './components/signup';
import NavigationBar from "./components/NavigationBar";


function App() {
  // ... (existing code)

  return (
    <div>
      <TrainHome/>
      <NavigationBar />
    

    </div>
  );
}

export default App;
