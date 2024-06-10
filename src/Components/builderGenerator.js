import React, { useState } from 'react';
import './css/gunit.css'; // Import the CSS file
import LineOfBusinessSelector from './LineOfBusinessSelector';
import BusinessForm from './BusinessForm';

const BuilderGenerator = () => {
  const [lineOfBusiness, setLineOfBusiness] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedBuilder, setSelectedBuilder] = useState("");
  const [selectedExposures, setSelectedExposures] = useState([]);
  const [showExposuresDropdown, setShowExposuresDropdown] = useState(false);

  const handleChange = (event) => {
    setLineOfBusiness(event.target.value);
    setShowForm(true); // Show the form when a line of business is selected
  };

  const handleBuilderChange = (event) => {
    setSelectedBuilder(event.target.value);
  };

  const handleExposureChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedExposures([...selectedExposures, value]);
    } else {
      setSelectedExposures(selectedExposures.filter(item => item !== value));
    }
  };

  const toggleExposuresDropdown = () => {
    setShowExposuresDropdown(!showExposuresDropdown);
  };

  return (
    <div className="gunit-generator-container">
      <div className="gunit-generator">
        <h2>Builder Generator</h2>
        <LineOfBusinessSelector
          lineOfBusiness={lineOfBusiness}
          handleChange={handleChange}
        />
        
        {/* Conditional rendering of the form based on line of business selection */}
        {showForm && (
          <BusinessForm
            lineOfBusiness={lineOfBusiness}
            selectedBuilder={selectedBuilder}
            handleBuilderChange={handleBuilderChange}
            selectedExposures={selectedExposures}
            handleExposureChange={handleExposureChange}
            showExposuresDropdown={showExposuresDropdown}
            toggleExposuresDropdown={toggleExposuresDropdown}
            showBaseMethod={false} // Pass a prop to hide the base method
          />
        )}
        <button className="generate-button">Generate Builder</button>
      </div>
    </div>
  );
};

export default BuilderGenerator;
