import React from "react";
import { Link, withRouter } from "react-router-dom";
import * as Images from "../images";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.history.push("/"));
  }
  render() {
    const { currentUser } = this.props;

    return (
      <header className="header-wrapper">
        <section className="header-nav">
          <Link to="/" className="logo-btn">
            <img src={window.mainLogo} alt="" />
          </Link>

          <Link to="/login" className="login-btn">
            Sign In
          </Link>
        </section>
      </header>
    );
  }
}

export default withRouter(Navbar);
