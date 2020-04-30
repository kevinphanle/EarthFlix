import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import * as Images from "../images";
import SplashContent from "./splash-content";
import LoginForm from "../session/login_form";
import { AuthRoute } from "../../util/route_util";

const Splash = (props) => (
  <div
    className="splash-image-wrapper"
    style={{ backgroundImage: `url(${Images.earthBg})` }}
  >
    <div className="splash-content-wrapper">
      <Switch>
        <AuthRoute path="/login" component={LoginForm} />
        <Route exact path="/" component={SplashContent} />

      </Switch>
    </div>
  </div>
);

export default Splash;
