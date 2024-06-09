import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/navbar";
import LandingPage from "./Components/landing";
import ServicesPage from "./Components/services"

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const navigateTo = (page) => {
      setCurrentPage(page);
  };

  return (
      <div className="App">
          <Navbar navigateTo={navigateTo} />
          {currentPage === 'landing' && <LandingPage navigateTo={navigateTo} />}
          {currentPage === 'services' && <ServicesPage />}
      </div>
  );
}

export default App;