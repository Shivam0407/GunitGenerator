// src/Navbar.js
import React, { useState } from "react";
import "./css/nav.css";

const Navbar = ({ navigateTo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src={"https://www.exavalu.com/wp-content/themes/quincy/sds/assets/img/logo.png"}
          alt="Logo"
          className="navbar-logo"
          onClick={() => navigateTo("landing")}
        />
      </div>
      <ul className={`navbar-nav ${isOpen ? "open" : ""}`}>
        <li className="nav-item" onClick={() => navigateTo("services")}>
          <span className="nav-link">Services</span>
        </li>
      </ul>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
