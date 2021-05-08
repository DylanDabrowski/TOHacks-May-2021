import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Login from "./components/pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" />
          <Route path="/Login" component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
