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
      </div>
    </nav>
  );
}

export default Navbar;
