import React from "react";
import { Link, withRouter } from "react-router-dom";
import * as Images from "../images";

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
      
        console.log(Images.earthBg)
    return (
      <div className="login-page" style={{backgroundImage: `url(${Images.earthBg})` }}>
        {/* <div className="login-wrapper-background">
          <img src={Images.earthBg} alt="" />
        </div> */}

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
                  onChange={this.update("email")}
                />
              </label>
              <label htmlFor="password">
                <span>Password:</span>
                <input
                  type="password"
                  id="password"
                  className="login-password-input"
                  value={this.state.password}
                  onChange={this.update("password")}
                />
              </label>

              <input
                type="submit"
                className="login-form-btn"
                value={this.props.formType}
              />

              <input
                type="submit"
                className="guest-login-btn"
                value="Demo User Login"
                onClick={this.handleGuestLogin}
              />

              <p className="other-form">
                New to EarthFlix? <Link to="/signup">Sign Up now!</Link>
              </p>
            </form>

            <figure className="black-bg"></figure>
          </div>
        </section>
      </div>
    );
  }
}
export default withRouter(LoginForm);
