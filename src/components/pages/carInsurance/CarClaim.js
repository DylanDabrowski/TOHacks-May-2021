import React from "react";
import "./CarClaim.css";
import SideNav from "../../../CarSideNav.js";

function CarClaim() {
  return (
    <div>
      <SideNav />
      <div>
        <h2>What type of claim would you like to make?</h2>
        <div className="CarInsurance">
          <div className="CarInsuranceIcon">
            <i class="fas fa-car-crash fa-5x"></i>
          </div>
          <h2>Collision</h2>
        </div>
        <div className="CarInsurance">
          <div className="CarInsuranceIcon">
            <i class="fas fa-cloud-showers-heavy fa-5x"></i>
          </div>
          <h2>Hail</h2>
        </div>
        <div className="CarInsurance">
          <div className="CarInsuranceIcon">
            <i class="fas fa-shipping-fast fa-5x"></i>
          </div>
          <h2>Hit & Run</h2>
        </div>
        <div className="CarInsurance">
          <div className="CarInsuranceIcon">
            <i class="fas fa-mask fa-5x"></i>
          </div>
          <h2>Theft</h2>
        </div>
        <div className="CarInsurance">
          <div className="CarInsuranceIcon">
            <i class="fas fa-plus fa-5x"></i>
          </div>
          <h2>Other</h2>
        </div>
      </div>
      <div>
        <h2>Which vehicle would you like to maake a claim for?</h2>
        <input type="text" id="vehicle" name="vehicle" />
        <input type="submit" value="Submit" />
      </div>
      <div>
        <h2>Who is the primary driver of the vehicle?</h2>
        <input type="text" id="owner" name="owner" />
        <input type="submit" value="Submit" />
      </div>
      <a>Next Page</a>
    </div>
  );
}

export default CarClaim;
