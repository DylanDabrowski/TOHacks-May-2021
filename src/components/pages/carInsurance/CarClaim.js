import React from "react";
import "./CarInsurance.css";
import SideNav from "../../CarSideNav";

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
        <h2>Which vehicle would you like to make a claim for?</h2>
        <input type="text" id="vehicle" name="vehicle" />
      </div>
      <div>
        <h2>Who is the primary driver of the vehicle?</h2>
        <input type="text" id="owner" name="owner" />
      </div>
      <div>
        <h2>What time did the collision occur?</h2>
        <input type="text" id="time" name="time" />
      </div>
      <div>
        <h2>Where did the collision occur?</h2>
        <input type="text" id="location" name="location" />
      </div>
      <div>
        <h2>Who was driving the vehicle?</h2>
        <input type="text" id="driver" name="driver" />
      </div>
      <div>
        <h2>What is the severity of collision?</h2>
        <input type="text" id="severity" name="severity" />
      </div>
      <div>
        <h2>Additional Info</h2>
        <input type="textarea" id="additional" name="additional" />
      </div>
      <input type="submit" value="Submit" />
    </div>
  );
}

export default CarClaim;
