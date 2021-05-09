import React, { useState } from "react";
import "./PropertyClaim.css";
import SideNav from "../../PropertySideNav.js";

function PropertyClaim() {
  return (
    <div className="propertyclaim">
      <SideNav />
      <div>
        <h2>What type of claim would you like to make?</h2>
        <div className="CarInsurance">
          <div className="CarInsurance">
            <input type="radio" value="Property Damage" name="claimType" />{" "}
            <i class="fas fa-house-damage fa-5x"></i> Propery Damage
            <input type="radio" value="Water Damage" name="claimType" />{" "}
            <i class="fas fa-faucet fa-5x"></i> Water Damage
            <input type="radio" value="Fire Damage" name="claimType" />{" "}
            <i class="fas fa-fire fa-5x"></i> Fire Damage
            <input type="radio" value="Robbery" name="claimType" />{" "}
            <i class="fas fa-mask fa-5x"></i> Robbery
            <input type="radio" value="Other" name="claimType" />{" "}
            <i class="fas fa-plus fa-5x"></i> Other
          </div>
        </div>
      </div>

      <div className="address-textfield">
        <h2>Property Address</h2>
        <input type="text" id="address" name="address" />
        <input type="submit" value="Submit" />
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
