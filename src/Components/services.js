import React from "react";
import "./css/services.css";
import  { useState } from "react";
import GUnitGenerator from "./gunitGenerator"

const ServicesPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderContent = () => {
    switch (selectedItem) {
      case "GUnit Generator":
        return <GUnitGenerator />;
      // case "Builder Generator":
      //   return <BuilderGenerator />;
      default:
        return <div>Please select a menu item</div>;
    }
  };
  return (
    <div className="landing-page">
      <div className="sidebar">
        <ul className="menu">
          <li className="menu-item" onClick={() => setSelectedItem("GUnit Generator")}>
            GUnit Generator
          </li>
          <li className="menu-item" onClick={() => setSelectedItem("Builder Generator")}>
            Builder Generator
          </li>
        </ul>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};
export default ServicesPage;
