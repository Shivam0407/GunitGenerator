// LineOfBusinessSelector.js

import React from 'react';

const LineOfBusinessSelector = ({ lineOfBusiness, handleChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="lineOfBusiness">Line of Business:</label>
      <select
        id="lineOfBusiness"
        value={lineOfBusiness}
        onChange={handleChange}
        className="form-control"
      >
        <option value="">Select</option>
        <option value="Personal Auto">Personal Auto</option>
        <option value="Home Owners">Home Owners</option>
        <option value="Commercial Auto">Commercial Auto</option>
      </select>
    </div>
  );
};

export default LineOfBusinessSelector;
