
import React from 'react';
import SignupForm from './session/signup_container';
import LoginForm from './session/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Link } from 'react-router-dom';
import Splash from './splash/splash';
const App = () => (
    <div>
        <header className="headerBar">
            <Link to="/">
                <h1>EarthFlix</h1>
            </Link>
        </header>

        
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute path="/signup" component={SignupForm} />
        <AuthRoute path="/login" component={LoginForm} />
    </div>
);

export default App;