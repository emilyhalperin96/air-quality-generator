import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import LocationDetails from './components/LocationDetails';
import UserDashboard from './components/UserDashboard';

function App() {
 
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path ="/navbar" element={<Navbar />} />
          <Route path="/location/:id" element={<LocationDetails />} />
          <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;