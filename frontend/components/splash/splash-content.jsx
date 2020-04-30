import React from "react";
import { Link } from 'react-router-dom';

function SplashContent() {
  return (
    <section className="splash-content">
      <h2>See what's next.</h2>
      <span>Watch Anywhere. Cancel Anytime.</span>

      <Link to="/signup" className="splash-signup-btn">
        <h3>Sign Up Today </h3>
        <span>></span>
      </Link>
    </section>
  );
}

export default SplashContent;
