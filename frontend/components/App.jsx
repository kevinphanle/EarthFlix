
import React from 'react';
import SignupForm from './session/signup_container';
import LoginForm from './session/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Link } from 'react-router-dom';
import Splash from './splash/splash';
import Navbar from './navbar/navbar_container';
import footer from './footer/footer';
const App = () => (
    <div>
        <Navbar />

        
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute path="/signup" component={SignupForm} />
        <AuthRoute path="/login" component={LoginForm} />
        <AuthRoute path="/" component={footer}/>
    </div>
);

export default App;