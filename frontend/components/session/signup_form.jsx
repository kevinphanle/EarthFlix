import React from "react";
import { Link, withRouter } from 'react-router-dom';
                    
class SignupFrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGuestLogin = this.handleGuestLogin.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value})
        }
    }

    handleGuestLogin(e) {
        e.preventDefault();
        const guest = { email: 'guest@guest.com', password: 'password' };
        this.props.login(guest).then(() => this.props.history.push('/browse'));
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state).then(()=> this.props.history.push('/'))
    }

    render () {
        return (
            <div className="signup-wrapper">
                    
                <div className="guest-login">
                    <button onClick={this.handleGuestLogin}>Demo User</button>
                </div>
                <section className="signup-form-wrapper">
                    <h3>{this.props.formType}</h3>
                    <form className="signup-form" onSubmit={this.handleSubmit}>
                        <label htmlFor="email">Email:
                            <input
                                type="text"
                                id="email"
                                value={this.state.email}
                                className="signup-email-input"
                                onChange={this.update('email')}
                            />
                        </label>
                        <label htmlFor="password">
                            <span>Password:</span>
                            <input
                                type="password"
                                id="password"
                                value={this.state.password} 
                                className="signup-password-input"
                                onChange={this.update('password')}
                            />
                        </label>

                        <input type="submit" className="signup-form-btn" value="Sign Up" />
                        <p>Already a part of EarthFlix? <Link to="/login">Sign In now!</Link></p>
                    </form>
                </section>
            </div>
        );
    }
}
export default withRouter(SignupFrom);