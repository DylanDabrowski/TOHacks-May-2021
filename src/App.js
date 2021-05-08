import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import LandingPage from "./components/pages/LandingPage.js";
import CarClaim from "./components/pages/carInsurance/CarClaim";
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
          <Route path="/propertyclaim" component={PropertyClaim} />
          <Route path="/prevpropertyclaims" component={PrevPropertyClaims} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
