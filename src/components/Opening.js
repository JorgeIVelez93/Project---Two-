import React from "react";
import { Link } from "react-router-dom";
import Openingcss from "./Opening.css";
import companylogo from "../images/quick crypto-logos_transparent.png";

const Opening = () => {
  return (
    <div>
      <img src={companylogo} alt="logo" className="companylogo"></img>
      <div className="openingcss">
        <h1>QuickCrypto</h1>
        <br></br>
        <br></br>
        <h3>Up to the hour Crypto exchange rates. </h3>
        <p>
          Crypto is hard enough to understand. Finding updated prices shouldn't
          be.
        </p>
        <br></br>
        <div className="ctnbtn">
          <Link
            to="/createacc
      "
            style={{ textDecoration: "none" }}
            className="Linkcss"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Opening;
