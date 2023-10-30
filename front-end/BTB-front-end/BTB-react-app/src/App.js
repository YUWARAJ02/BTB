import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TrainHome from './pages/TrainHome';
import FlightPage from './pages/FlightPage';
import WhyUsPage from './pages/WhyUsPage';
import Login from './components/Loginsignup';
import Signup from './components/signup';
import NavigationBar from './components/NavigationBar';

const App = () => {
  return (
    <div>
        
      <Routes>
        <Route path="/" element={<TrainHome />} />
        <Route path="/flight" element={<FlightPage />} />
        <Route path="/why-us" element={<WhyUsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <NavigationBar />
    </div>
  );
};

export default App;
