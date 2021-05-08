import React from "react";
import "./CarInsurance.css";
import "./MyDrive.css";
import SideNav from "../../CarSideNav.js";
import mapImage from "./../../../assets/map.png";
import graphImage from  "./../../../assets/graph.png";

function MyDrive() {
  return (
    <div>
      <SideNav className="navBar"/>

      <div className="background">
        
        

      </div>
      <h1 style={{textAlign: "left", top: 53, left: 551,}}>Score</h1>
      <img className="image" src={mapImage} alt="location"/>
      <img className="image" src={graphImage} alt="graph"/>
    </div>
    
    
  );
}

export default MyDrive;
