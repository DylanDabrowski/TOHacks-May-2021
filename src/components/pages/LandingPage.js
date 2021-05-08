import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landingpage">
      <Link to="/carinsurance" className="nav-links">
        <h2>Car Insurance</h2>
      </Link>
      <Link to="/propertyinsurance" className="nav-links">
        <h2>Property Insurance</h2>
      </Link>
      <Link to="/login" className="nav-links">
        <h2>Login</h2>
      </Link>
    </div>
  );
}

export default LandingPage;