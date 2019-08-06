
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
import Watch from './watch/watch_container';

const App = () => {
    return (
        <div>
            <main className="main-content">
                <Switch>
                    <ProtectedRoute path="/browse" component={IndexNav} />
                    <AuthRoute exact path={["/", "/signup", "/login"]} component={Navbar} />
                </Switch>

                <AuthRoute exact path="/" component={Splash} />
                <AuthRoute path="/signup" component={SignupForm} />
                <AuthRoute path="/login" component={LoginForm} />

                <ProtectedRoute path="/browse" component={ShowIndex} />
                <ProtectedRoute path="/watch/:showId" component={Watch} />

            </main>

            <AuthRoute path="/" component={footer}/>
        </div>

    )
};

export default App;