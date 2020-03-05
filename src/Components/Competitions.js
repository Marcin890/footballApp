import React from "react";
import { Switch, Route } from "react-router-dom";
import Competition from "./Competition";

const Competitions = () => (
  <Switch>
    <Route
      path="/:id"
      render={props => <Competition key={props.match.params.id} {...props} />}
      // component={Competition}
    />
  </Switch>
);

export default Competitions;
