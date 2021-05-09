import React, { useState } from "react";
import "./PropertyClaim.css";
import SideNav from "../../PropertySideNav.js";

function PropertyClaim() {
  return (
    <div className="propertyclaim">
      <SideNav />
      <div>
        <h2>What type of claim would you like to make?</h2>
        <div>
          <h2>What type of claim would you like to make?</h2>
          <div className="CarInsurance">
            <div className="CarInsuranceIcon">
              <i class="fas fa-house-damage fa-5x"></i>
              <input type="radio" value="Property Damage" name="claim-type" />
            </div>
            <h2>Property Damage</h2>
          </div>
          <div className="CarInsurance">
            <div className="CarInsuranceIcon">
              <i class="fas fa-faucet fa-5x"></i>
              <input type="radio" value="Water Damage" name="claim-type" />
            </div>
            <h2>Water Damage</h2>
          </div>
          <div className="CarInsurance">
            <div className="CarInsuranceIcon">
              <i class="fas fa-fire fa-5x"></i>
              <input type="radio" value="Fire Damage" name="claim-type" />
            </div>
            <h2>Fire Damage</h2>
          </div>
          <div className="CarInsurance">
            <div className="CarInsuranceIcon">
              <i class="fas fa-mask fa-5x"></i>
              <input type="radio" value="Theft" name="claim-type" />
            </div>
            <h2>Theft</h2>
          </div>
        </div>
      </div>

      <div className="address-textfield">
        <h2>Property Address</h2>
        <input type="text" id="address" name="address" />
      </div>
      <div className="description-textfield">
        <h2>Description of damage</h2>
        <textarea type="text" id="description" name="description" />
        <input type="submit" value="Submit" />
      </div>
    </div>
  );
}

export default PropertyClaim;
