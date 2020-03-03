import React, { Component } from "react";
import "./App.scss";

import Navigation from "./Navigation";
import Competitions from "./Competitions";
import { BrowserRouter as Router } from "react-router-dom";
// import Competition from "./Competition";

// https://www.football-data.org/documentation/quickstart

class App extends Component {
  state = {};

  render() {
    console.log("render-app");
    return (
      <Router>
        <div className="app">
          <Navigation />
          <Competitions />
        </div>
      </Router>
    );
  }
}

export default App;
