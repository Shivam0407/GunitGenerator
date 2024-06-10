import React from 'react';

const BusinessForm = ({
  lineOfBusiness,
  selectedBuilder,
  handleBuilderChange,
  selectedExposures,
  handleExposureChange,
  baseMethod,
  handleBaseMethodChange,
  showExposuresDropdown,
  toggleExposuresDropdown,
  showBaseMethod, // New prop to conditionally render base method
}) => {
  return (
    <div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="builder">Builder:</label>
          <select
            id="builder"
            value={selectedBuilder}
            onChange={handleBuilderChange}
            className="form-control"
          >
            <option value="">Select</option>
            {lineOfBusiness === "Personal Auto" && (
              <>
                <option value="Claim">Claim</option>
                <option value="Person">Person</option>
                <option value="Vehicle">Vehicle</option>
              </>
            )}
            {lineOfBusiness === "Home Owners" && (
              <>
                {/* Add options for Home Owners */}
              </>
            )}
            {lineOfBusiness === "Commercial Auto" && (
              <>
                {/* Add options for Commercial Auto */}
              </>
            )}
          </select>
        </div>

        <div className="form-group">
          <label>Exposures:</label>
          <div className="custom-dropdown">
            <div className="dropdown-toggle" onClick={toggleExposuresDropdown}>
              Select Exposures
            </div>
            {showExposuresDropdown && (
              <div className="dropdown-menu">
                <div>
                  <input
                    type="checkbox"
                    value="Exposure"
                    checked={selectedExposures.includes("Exposure")}
                    onChange={handleExposureChange}
                  />
                  <label>Exposure</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value="Address"
                    checked={selectedExposures.includes("Address")}
                    onChange={handleExposureChange}
                  />
                  <label>Address</label>
                </div>
                {/* Add more checkboxes for additional exposures */}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Conditionally render the base method text area */}
      {showBaseMethod && (
        <div className="form-group">
          <label htmlFor="baseMethod">Base Method:</label>
          <textarea
            id="baseMethod"
            value={baseMethod}
            onChange={handleBaseMethodChange}
            className="form-control"
          />
        </div>
      )}
    </div>
  );
};

export default BusinessForm;
