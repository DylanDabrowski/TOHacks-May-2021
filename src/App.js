import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import LandingPage from "./components/pages/LandingPage.js";
import CarClaim from "./components/pages/CarInsurance/CarClaim";
import CarHistory from "./components/pages/CarInsurance/CarHistory";
import CarMyDrive from "./components/pages/CarInsurance/MyDrive";
import PropertyClaim from "./components/pages/property/PropertyClaim.js";
import PrevPropertyClaims from "./components/pages/property/PrevPropertyClaims.js";
import Login from "./components/pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/carclaim" component={CarClaim} />
          <Route path="/carhistory" component={CarHistory} />
          <Route path="/carmydrive" component={CarMyDrive} />
          <Route path="/propertyclaim" component={PropertyClaim} />
          <Route path="/prevpropertyclaims" component={PrevPropertyClaims} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
