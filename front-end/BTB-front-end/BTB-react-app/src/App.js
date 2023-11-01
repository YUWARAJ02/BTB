
import NavigationBar from "./components/NavigationBar";
import {Routes,Route} from "react-router-dom";
import "./pages/global.css"
import React from 'react';
import Header from "./components/Header";
import TrainHome from "./pages/TrainHome";






function App() {
  // ... (existing code)


  return (
 
    
    <div>
      <NavigationBar/>
      <TrainHome/>
   </div>
    
  

   
  );
}
export default App ;
