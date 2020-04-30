import React from "react";
import { Link, withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const user = { email, password };
    this.props.login(user).then(() => this.props.history.push("/browse"));
  }

  initLogin(event) {
    event.preventDefault();
    const email = "guest@guest.com";
    const password = "password";

    email.split("").forEach((char, emailIndex) => {
      setTimeout(() => {
        this.setState({ email: this.state.email + char });
      }, emailIndex * 50);

      if (emailIndex === email.length - 1)
        password.split("").forEach((char, passwordIndex) => {
          setTimeout(() => {
            this.setState({ password: this.state.password + char }, () => {
              if (passwordIndex === password.length - 1)
                this.props.login(this.state);
            });
          }, passwordIndex * 50 + emailIndex * 50);
        });
    });
  }

  handleGuestLogin(e) {
    e.preventDefault();
    this.initLogin(e);
    // this.props.login(this.state).then(() => this.props.history.push('/browse'));
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {

    console.log(this.state);

    return (
      <section className="login-form-wrapper">
        <h3>{this.props.formType}</h3>

        <form className="login-form" onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            <input
              type="text"
              id="email"
              className="login-email-input"
              placeholder="Email"
              value={this.state.email}
              onChange={this.update("email")}
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              className="login-password-input"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update("password")}
            />
          </label>

          <div className="login-buttons">
            <input
              type="submit"
              className="login-form-btn"
              value={this.props.formType}
            />

            <input
              type="submit"
              className="guest-login-btn"
              value="Demo User"
              onClick={this.handleGuestLogin}
            />
          </div>

          <p className="other-form">
            New to EarthFlix? <Link to="/signup">Sign Up now!</Link>
          </p>
        </form>
      </section>
    );
  }
}
export default withRouter(LoginForm);
