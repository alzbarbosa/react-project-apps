import React from 'react';
import NavBar from './components/Navbar';
import Advisor from './pages/Advisor';
import CountriesInfo from './pages/CountriesInfo';
import "./style.css";

function App() {
  return (
    <div>
      <NavBar />
      <Advisor />
    </div>
  );
}

export default App;
