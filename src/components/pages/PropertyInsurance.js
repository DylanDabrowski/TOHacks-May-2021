import React from "react";
import "./PropertyInsurance.css";
import { Link } from "react-router-dom";

function PropertyInsurance() {
  return (
    <div className="propertyinsurance">
      <nav className="property-navbar">
        <div className="property-navbar-container">
          <Link to="/" className="navbar-logo">
            <h1>Property Damage</h1>
          </Link>
          <Link to="/" className="navbar-logo">
            <h1>Water Damage</h1>
          </Link>
          <Link to="/" className="navbar-logo">
            <h1>Fire Damage</h1>
          </Link>
          <Link to="/" className="navbar-logo">
            <h1>Robbery</h1>
          </Link>
        </div>
      </nav>
      <h1>Property Insurance</h1>
    </div>
  );
}

export default PropertyInsurance;
