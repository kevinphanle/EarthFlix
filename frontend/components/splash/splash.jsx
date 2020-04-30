import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import * as Images from "../images";
import SplashContent from "./splash-content";
import LoginForm from "../session/login_container";
import { AuthRoute } from "../../util/route_util";
import signup_container from "../session/signup_container";

const Splash = (props) => (
  <div
    className="splash-image-wrapper"
    style={{ backgroundImage: `url(${Images.earthBg})` }}
  >
    <div className="splash-content-wrapper">
      <Switch>
        <AuthRoute path="/login" component={LoginForm} />
        <AuthRoute path="/signup" component={signup_container} />
        <Route exact path="/" component={SplashContent} />

      </Switch>
    </div>
  </div>
);

export default Splash;
