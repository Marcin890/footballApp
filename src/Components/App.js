import React, { Component } from "react";
import "./App.scss";

import Navigation from "./Navigation";
import Competition from "./Competition";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// https://www.football-data.org/documentation/quickstart

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div className="app">
          <Navigation />
          <Switch>
            <Route
              path="/:id"
              render={props => (
                <Competition key={props.match.params.id} {...props} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
