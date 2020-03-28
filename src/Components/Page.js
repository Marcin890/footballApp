import React from "react";
import { Switch, Route } from "react-router-dom";
import Competition from "./Competition";
import Matches from "./Matches";

const Page = () => (
  <Switch>
    <Route path="/:id" component={Competition} />
    <Route path="/" exact component={Matches} />} />
  </Switch>
);

export default Page;
