import React from 'react';
import NavBar from './components/Navbar';
import Advisor from './pages/Advisor';
import CountriesInfo from './pages/CountriesInfo';
import NextTrip from './pages/NextTrip';
import "./style.css";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Homepage from './pages/Homepage';

function App() {
  return (
    <>
      <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/advisor" element={<Advisor/>} />
      <Route path="/next-trip" element ={<NextTrip />} />
      <Route path="countries-info" element ={<CountriesInfo/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
