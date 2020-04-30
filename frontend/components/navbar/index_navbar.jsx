import React from "react";
import { Link } from "react-router-dom";
import Search from "./search_container";
import * as Images from "../images";

class IndexNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBackground: false,
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.storeScroll = this.storeScroll.bind(this);
    this.debounce = this.debounce.bind(this);
  }

  handleLogout() {
    this.props
      .unsetCurrentProfile(this.props.currentProfileId)
      .then(this.props.logout().then(() => this.props.history.push("/")));
  }

  debounce(fn) {
    let frame;
    return (...params) => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      frame = requestAnimationFrame(() => {
        fn(...params);
      });
    };
  }

  storeScroll() {
    document.documentElement.dataset.scroll = window.scrollY;
  }

  componentDidMount() {
    if (this.props.currentUser) {
      document.addEventListener("scroll", this.debounce(this.storeScroll), {
        passive: true,
      });
      this.storeScroll();
      this.props.fetchProfile(this.props.currentProfileId);
      this.props.fetchProfiles();
    }
  }

 

  render() {

    return (
      <header
        className="index-navbar-wrapper"
        // ref={(navRef) => {
        //   this.navRef = navRef;
        // }}
      >
        <header className="index-navbar fade-dark-nav">
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
