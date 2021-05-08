import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./components/pages/Home.js";
import CarInsurance from "./components/pages/CarInsurance.js";
import PropertyInsurance from "./components/pages/PropertyInsurance.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/carinsurance" component={CarInsurance} />
          <Route path="/propertyinsurance" component={PropertyInsurance} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
