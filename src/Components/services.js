import React, { useState } from "react";
import "./css/services.css";
import GUnitGenerator from "./gunitGenerator";
import BuilderGenerator from "./builderGenerator";

const ServicesPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [key, setKey] = useState(0);

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
    setKey(prevKey => prevKey + 1); // Increment key to remount component
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "GUnit Generator":
        return <GUnitGenerator key={key} />;
      case "Builder Generator":
        return <BuilderGenerator key={key} />;
      default:
        return <div>Please select a menu item</div>;
    }
  };

  return (
    <div className="landing-page">
      <div className="sidebar">
        <ul className="menu">
          <li className="menu-item" onClick={() => handleMenuItemClick("GUnit Generator")}>
            GUnit Generator
          </li>
          <li className="menu-item" onClick={() => handleMenuItemClick("Builder Generator")}>
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
