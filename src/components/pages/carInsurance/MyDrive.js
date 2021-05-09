import React from "react";
import "./CarInsurance.css";
import "./MyDrive.css";
import SideNav from "../../CarSideNav.js";
import mydrive from "./../../../assets/mydrive.png";

function MyDrive() {
  return (
    <div className="mydrive">
      <SideNav className="navBar" />
      <img className="image" src={mydrive} alt="graph" />
    </div>
  );
}

export default MyDrive;
