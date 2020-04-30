import React from "react";
import SignupForm from "./session/signup_container";
import LoginForm from "./session/login_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";
import Splash from "./splash/splash";
import Navbar from "./navbar/navbar_container";
import footer from "./footer/footer";
import ShowIndex from "./show/show_index_container";
import IndexNav from "./navbar/index_navbar_container";
import Watch from "./watch/watch_container";
import search_index_container from "./search/search_index_container";
import MyListIndex from "./mylist/mylist_index_container";
import Modal from "./modal/modal";

const App = () => {
  return (
    <main className="main-content">
      <Switch>
        <AuthRoute exact path={["/", "/signup", "/login"]} component={Navbar} />
        <ProtectedRoute path={["/browse", "/search"]} component={IndexNav} />
      </Switch>

      <Route path="/browse" component={Modal} />
      <Switch>
        <AuthRoute exact path={["/", "/login", "/signup"]} component={Splash} />

        <ProtectedRoute exact path="/browse" component={ShowIndex} />
        <ProtectedRoute path="/watch/:showId" component={Watch} />
        <ProtectedRoute exact path="/browse/my-list" component={MyListIndex} />
        <ProtectedRoute path="/search" component={search_index_container} />
      </Switch>

      <Switch>
        <Route path={["/", "/browse"]} component={footer} />
      </Switch>
    </main>
  );
};

export default App;
