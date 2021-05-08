import React from "react";
import "./SideNav.css";
import { Link } from "react-router-dom";
import logo from "./assets/intact-logo.png";

const SideNav = (props) => {
  return (
    <div className="sidenav">
      <Link to="/" className="sidenav-logo">
        <img src={logo} />
      </Link>
      <div className="sidenav-container">
        <Link className="sidenav-links">Make a Claim</Link>
        <Link className="sidenav-links">Previous Claims</Link>
      </div>
    </div>
  );
};
export default SideNav;
