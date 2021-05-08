import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import LandingPage from "./components/pages/LandingPage.js";
import CarInsurance from "./components/pages/CarInsurance.js";
import PropertyInsurance from "./components/pages/property/PropertyInsurance.js";
import Login from "./components/pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/carinsurance" component={CarInsurance} />
          <Route path="/propertyinsurance" component={PropertyInsurance} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
