import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Competition from "./Competition";

const Competitions = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/:id" render={props => <Competition key={"2"} />} />
    </Switch>
  </BrowserRouter>
);

export default Competitions;
