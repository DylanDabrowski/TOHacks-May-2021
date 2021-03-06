import React from "react";
import { Link } from "react-router-dom";
import "./AutoHome.css";
import { useHistory } from "react-router";
function AutoHome() {
  const history = useHistory();
  return (
    <div className="mainSelectionContainer">
      <div className="selectionContainer">
        <h1 className="autoText">Select Insurance Type</h1>
        <div className="choiceHolder">
          <div className="autoSelection" onClick={() => history.push("/carclaim")}>
            <div className="autoChoice">
              <i class="fas fa-car fa-5x"></i>
              <h1 className="whiteTitle">Auto</h1>
            </div>
          </div>
          <div className="homeSelection" onClick={() => history.push("/propertyclaim")}>
            <div className="homeChoice">
              <i class="fas fa-home fa-5x"></i>
              <h1 className="whiteTitle">Home</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutoHome;
