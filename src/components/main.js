import React from "react";
import landingpage from "./landingpage";
import { Switch, Route } from "react-router-dom";
import about from "./about";
import work from "./work";
import contact from "./contact";

const Main = () => (
  <Switch>
    <Route exact path="/" component={landingpage} />
    <Route path="/about" component={about} />
    <Route path="/work" component={work} />
    <Route path="/contact" component={contact} />
  </Switch>
)

export default Main;