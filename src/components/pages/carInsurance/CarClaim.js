import React, { useState } from "react";
import "./CarInsurance.css";
import SideNav from "../../CarSideNav";

export default function CarClaim() {
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
  };

  return (
    <div>
      <SideNav />
      <div className="mainView">
        <div>
          <h2>What type of claim would you like to make?</h2>
          <div className="CarInsurance">
            <div className="CarInsuranceIcon">
              <i class="fas fa-car-crash fa-5x"></i>
              <input type="radio" name="collision" hidden="" />
            </div>
            <h2>Collision</h2>
          </div>
          <div className="CarInsurance">
            <div className="CarInsuranceIcon">
              <i class="fas fa-cloud-showers-heavy fa-5x"></i>
              <input type="radio" name="hail" hidden="" />
            </div>
            <h2>Hail</h2>
          </div>
          <div className="CarInsurance">
            <div className="CarInsuranceIcon">
              <i class="fas fa-shipping-fast fa-5x"></i>
              <input type="radio" name="hitandrun" hidden="" />
            </div>
            <h2>Hit & Run</h2>
          </div>
          <div className="CarInsurance">
            <div className="CarInsuranceIcon">
              <i class="fas fa-mask fa-5x"></i>
              <input type="radio" name="theft" hidden="" />
            </div>
            <h2>Theft</h2>
          </div>
        </div>
        <div>
          <h2>Which vehicle would you like to maake a claim for?</h2>
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
          <textarea id="additional" name="additional" />
        </div>
        <h2>Add photos:</h2>
        <p>Add up to 10 photos to help illustrate the damage.</p>
        <div className="upload">
          <label htmlFor="upload-button">
            {image.preview ? (
              <img src={image.preview} alt="dummy" width="300" height="300" />
            ) : (
              <>
                <div className="CarInsuranceIcon">
                  <i class="fas fa-plus fa-5x"></i>
                  <br></br>
                </div>
              </>
            )}
          </label>
          <input
            type="file"
            id="upload-button"
            style={{ display: "none" }}
            onChange={handleChange}
          />
          <br></br>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}
