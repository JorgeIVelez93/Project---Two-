import React from "react";
import { Link } from "react-router-dom";
import aboutcss from "./About.css";

const About = () => {
  return (
    <div className="mobilep">
      <nav className="navcss">
        <Link className="navlinks" to="/home" style={{ color: "#272727" }}>
          Home
        </Link>
        <Link className="navlinks" to="/contact" style={{ color: "#272727" }}>
          Contact Us
        </Link>
      </nav>
      <h1>About Quick Crypto</h1>
      <p>
        Quick Crypo was created with a simple goal. Quickly update you on what's
        going on in the Cryptoverse.
      </p>
      <p>
        View the top ranked Cryto currencies in the market and check what your
        dollar is worth in crypto, all in real time.{" "}
      </p>
    </div>
  );
};

export default About;
