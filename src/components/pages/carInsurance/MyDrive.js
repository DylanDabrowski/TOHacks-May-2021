import React from "react";
import "./CarInsurance.css";
import "./MyDrive.css";
import SideNav from "../../CarSideNav.js";
import mapImage from "./../../../assets/map.png";
import graphImage from "./../../../assets/graph.png";

function MyDrive() {
  return (
    <div className="mydrive">
      <SideNav className="navBar" />
      <div className="row">
        <div className="column">
          <h2>Your Score</h2>
          <div className="score">92 / 100</div>
          <img className="image" src={graphImage} alt="graph" />
        </div>
        <div className="column">
          <h2>Vehicle</h2>
          <h1>CHRYSLER TOWN & COUNTRY</h1>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <h1>Showing: weekly results</h1>
          <div className="row">
            <div className="column">
              <h2>Harsh Breaking</h2>
              <h1 className="results-box-bad">-5%</h1>
              <h3>This week you have had 11 harsh breaks recorded</h3>
            </div>
            <div className="column">
              <h2>Speed</h2>
              <h1 className="results-box-good">+10%</h1>
              <h3>
                Congratulations, you have exceeded the speed limit 0 times this
                week
              </h3>
            </div>
            <div className="column">
              <h2>Harsh Breaking</h2>
              <h1 className="results-box-good">+16%</h1>
              <h3>Congratulations, you have maintained focus this week</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="recent-trips">
        <h2>Recent Trips:</h2>
        <img className="image" src={mapImage} alt="location" />
      </div>
    </div>
  );
}

export default MyDrive;
