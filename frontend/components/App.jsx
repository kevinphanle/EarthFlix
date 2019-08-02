
import React from 'react';
import SignupForm from './session/signup_container';
import LoginForm from './session/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import Splash from './splash/splash';
import Navbar from './navbar/navbar_container';
import footer from './footer/footer';
import ShowIndex from './show/show_index_container';
import IndexNav from './navbar/index_navbar_container';

const App = () => {
    return (
        <div>
            <Switch>
                <ProtectedRoute path="/browse" component={IndexNav} />
                <AuthRoute path="/signup" component={Navbar} />
                <AuthRoute path="/login" component={Navbar} />
                <AuthRoute exact path="/" component={Navbar} />
            </Switch>

            <main className="main-content">

                <AuthRoute exact path="/" component={Splash} />
                <AuthRoute path="/signup" component={SignupForm} />
                <AuthRoute path="/login" component={LoginForm} />
                <ProtectedRoute path="/browse" component={ShowIndex} />

            </main>

            <AuthRoute path="/" component={footer}/>
        </div>

    )
};

export default App;