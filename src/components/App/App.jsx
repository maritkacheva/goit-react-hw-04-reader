import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Reader from "../Reader/Reader";

const App = () => (
  <Switch>
    <Route path="/reader" component={Reader} />
    <Route path="/:some-route">
      <Redirect to="/reader" component={Reader} />
    </Route>
    <Redirect exact from="/" to="/reader" component={Reader} />
  </Switch>
);

export default App;
