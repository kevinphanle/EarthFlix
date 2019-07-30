import React from "react";
import { Link } from 'react-router-dom';
                    
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
            <section className="login-form-wrapper">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email:
                        <input
                            type="text"
                            id="email"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <label htmlFor="password">Password:
                        <input
                            type="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>

                    <input type="submit" value="Sign Up" />
                    <p>New to EarthFlix? <Link to="/signup">Sign Up now!</Link></p>
                </form>
            </section>
        );
    }
}
export default LoginForm;