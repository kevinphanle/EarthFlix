import React from "react";
import { Link } from "react-router-dom";
import Search from "./search_container";
import * as Images from "../images";

class IndexNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props
      .unsetCurrentProfile(this.props.currentProfileId)
      .then(this.props.logout().then(() => this.props.history.push("/")));
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop: isTop });
      }
    });
    if (this.props.currentUser) {
      this.props.fetchProfile(this.props.currentProfileId);
      this.props.fetchProfiles();
    }
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.storeScroll);
  }

  render() {
    let navStyles = {};
    if (this.state.isTop) {
      navStyles.backgroundColor = "rgba(52, 52, 52, 0.0)";
    } else {
      navStyles.backgroundColor = "#000";
    }
    return (
      <header
        className="index-navbar-wrapper"
        style={{ backgroundColor: navStyles.backgroundColor }}
      >
        <header className="index-navbar">
          <section className="left-nav">
            <Link to="/browse" className="main-logo-btn">
              <img src={Images.mainLogo} className="earthflix-logo" alt="" />
            </Link>
            <Link to="/">Home</Link>
            <Link to="/browse/my-list">My List</Link>
          </section>

          <section className="right-nav">
            <Search />

            <button onClick={this.handleLogout} className="logout-btn">
              Log Out
            </button>
          </section>
        </header>
      </header>
    );
  }
}

export default IndexNav;
