
import "./pages/global.css"
import React from 'react';
import TrainHome from "./pages/TrainHome"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";






function App() {
  // ... (existing code)


  return (
 
    
    <div>
      
      <NavigationBar/>
      <Routes>
      <Route path="/"element={<TrainHome/>}></Route>
      </Routes>
      
     </div>
    
  

   
  );
}
export default App ;
