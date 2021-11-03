import React from "react";
import { Route, Redirect, Switch } from "react-router";

import {App} from "./App";


const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/home" />
      <Redirect exact from="/" to="/home" />
    </Switch>
  </App>
);

export default Routes;