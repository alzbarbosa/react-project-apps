import React from 'react';
import NavBar from './components/Navbar';
import Advisor from './pages/Advisor';
import CountriesInfo from './pages/CountriesInfo';
import NextTrip from './pages/NextTrip';
import "./style.css";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Homepage from './pages/Homepage';
import CountryDetails from './components/CountryDetails';


function App() {
  return (
    <>
      <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/advisor" element={<Advisor/>} />
      <Route path="/next-trip" element ={<NextTrip />} />
      <Route path="/countries-info" element ={<CountriesInfo/>} />
      <Route path="/countries/:id" element = {<CountryDetails/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
