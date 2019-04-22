import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "./assets/scss/material-kit-react.scss?v=1.4.0";

// pages for this product
import Home from "./views/Home/Home.jsx";
import ComponentsExamples from "./views/Components/ComponentsExamples.jsx";
import LandingPage from "./views/LandingPage/LandingPage.jsx";
import ProfilePage from "./views/ProfilePage/ProfilePage.jsx";
import LoginPage from "./views/LoginPage/LoginPage.jsx";
import Info from "./views/Info/Info.jsx";
import Bagpipe from "./views/Bagpipe/Bagpipe.jsx";
import Bagpipers from "./views/Bagpipers/Bagpipers.jsx";
import Activities from "./views/Activities/Activities.jsx";
import Contacts from "./views/Contacts/Contacts.jsx";
import Participations from "./views/Participations/Participations.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/info" component={Info} />
      <Route path="/components" component={ComponentsExamples} />
      <Route path="/bagpipe" component={Bagpipe} />
      <Route path="/bagpipers" component={Bagpipers} />
      <Route path="/activities" component={Activities} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/participations" component={Participations} />

      <Route path="/" component={Home} />


    </Switch>
  </Router>,
  document.getElementById("root")
);
