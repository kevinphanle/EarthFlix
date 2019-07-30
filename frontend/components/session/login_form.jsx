import React from "react";
import { Link, withRouter } from 'react-router-dom';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;
        const user = { email, password };
        this.props.login(user).then(() => this.props.history.push('/'))
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value})
        }
    }

    render () {
        return (

            <div>
                <div className="login-wrapper-background">
                    <img src={window.splashBackground} alt=""/>
                </div>

                <section className="login-form-wrapper">
                    <div className="login-form-body">
                        <h3>{this.props.formType}</h3>

                        <form className="login-form" onSubmit={this.handleSubmit}>
                            <label htmlFor="email">
                                <span>Email:</span>
                                <input
                                    type="text"
                                    id="email"
                                    className="login-email-input"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                />
                            </label>
                            <label htmlFor="password">
                                <span>Password:</span>
                                <input
                                    type="password"
                                    id="password"
                                    className="login-password-input"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </label>

                            <input type="submit" className="login-form-btn" value={this.props.formType} />
                            <p className="other-form">New to EarthFlix? <Link to="/signup">Sign Up now!</Link></p>
                        </form>

                        <figure className="black-bg"></figure>
                    </div>
                </section>
            </div>
        );
    }
}
export default withRouter(LoginForm);