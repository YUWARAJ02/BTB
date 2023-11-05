
import NavigationBar from "./components/NavigationBar";
import {Routes,Route} from "react-router-dom";
import "./pages/global.css"
import React from 'react';
import Header from "./components/Header";
import TrainHome from "./pages/TrainHome";
<<<<<<< HEAD
import Forgetpassword from "./components/Forgetpassword";
=======
import BusHome from "./pages/BusHome";
>>>>>>> 1620fe499730c2ea71936bec2e753e591979f3d2






function App() {
  // ... (existing code)


  return (
 
    
    <div>
      <NavigationBar/>
<<<<<<< HEAD
      <Routes>
    <Route path="/" element={<TrainHome/>}/>
    <Route path="/forgetpassword" element={<Forgetpassword/>}/>
    </Routes>
=======
      <BusHome/>
>>>>>>> 1620fe499730c2ea71936bec2e753e591979f3d2
   </div>
    
  

   
  );
}
export default App ;
