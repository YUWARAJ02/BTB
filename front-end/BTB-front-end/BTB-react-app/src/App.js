
import NavigationBar from "./components/NavigationBar";
import {Routes,Route} from "react-router-dom";
import "./pages/global.css"
import React from 'react';
import TrainHome from "./pages/TrainHome";
import Forgetpassword from "./components/Forgetpassword";







function App() {
  // ... (existing code)


  return (
 
    
    <div>
      <NavigationBar/>
      <Routes>
    <Route path="/" element={<TrainHome/>}/>
    <Route path="/forgetpassword" element={<Forgetpassword/>}/>
    </Routes>
    
   </div>   
  );
}
export default App ;
