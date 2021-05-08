import React from "react";
import "./SideNav.css";
import { Link } from "react-router-dom";
import logo from "./assets/intact-logo.png";

const CarSideNav = () => {
  return (
    <div className="sidenav">
      <Link to="/" className="sidenav-logo">
        <img src={logo} />
      </Link>
      <div className="sidenav-container">
        <Link className="sidenav-links" to="/carclaim">
          Make a Claim
        </Link>
        <Link className="sidenav-links">Previous Claims</Link>
      </div>
    </div>
  );
};
export default CarSideNav;
