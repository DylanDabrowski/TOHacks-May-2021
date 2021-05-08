import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/intact-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/carinsurance" className="nav-links">
              <h2>Car Insurance</h2>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/propertyinsurance" className="nav-links">
              <h2>Property Insurance</h2>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-links">
              <h2>Login</h2>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
