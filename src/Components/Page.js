import React from "react";
import { Switch, Route } from "react-router-dom";
import Competition from "./Competition";

const Page = () => (
  <Switch>
    <Route
      path="/:id"
      render={props => <Competition key={props.match.params.id} {...props} />}
    />
  </Switch>
);

export default Page;
