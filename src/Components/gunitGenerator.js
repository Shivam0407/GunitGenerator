import React, { useState } from 'react';

const GUnitGenerator = () => {
  const [lineOfBusiness, setLineOfBusiness] = useState("");

  const handleChange = (event) => {
    setLineOfBusiness(event.target.value);
  };

  return (
    <div>
      <h2>GUnit Generator</h2>
      <div>
        <label>
          Line of Business:
          <select value={lineOfBusiness} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Personal Auto">Personal Auto</option>
            <option value="Home Owners">Home Owners</option>
            <option value="Commercial Auto">Commercial Auto</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default GUnitGenerator;
