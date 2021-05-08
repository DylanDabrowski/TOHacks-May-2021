import React from "react";
import "./SideNav.css";
import { Link } from "react-router-dom";
import logo from "./assets/intact-logo.png";

const SideNav = () => {
  return (
    <div className="sidenav">
      <Link to="/" className="sidenav-logo">
        <img src={logo} />
      </Link>
      <div className="sidenav-container">
        <Link className="sidenav-links" to="/propertyclaim">
          Make a Claim
        </Link>
        <Link className="sidenav-links" to="/prevpropertyclaims">
          Previous Claims
        </Link>
      </div>
    </div>
  );
};
export default SideNav;
