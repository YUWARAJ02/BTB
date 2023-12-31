
import NavigationBar from "./components/NavigationBar";
import {Routes,Route} from "react-router-dom";
import "./pages/global.css"
import React from 'react';
import TrainHome from "./pages/TrainHome";
import Forgetpassword from "./components/Forgetpassword";
import BusHome from "./pages/BusHome";
import FlightPage from "./pages/FlightPage";
import HotelHome from "./pages/HotelHome";
// import ChatFormContainer from "./components/ChatFormContainer";





function App() {
  // ... (existing code)


  return (
 
    
    <div>
      <NavigationBar/>
      <Routes>
    <Route path="/" element={<TrainHome/>}/>
    <Route path="/forgetpassword" element={<Forgetpassword/>}/>
    <Route path="/bus" element={<BusHome/>}/>
    <Route path="/flight" element={<FlightPage/>}/>
    <Route path="/hotel" element={<HotelHome/>}/>
    </Routes>
    {/* <ChatFormContainer/> */}
    
   </div>   
  );
}
export default App ;
