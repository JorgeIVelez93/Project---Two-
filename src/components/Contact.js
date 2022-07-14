import React from "react";
import Contactcss from "./Contact.css";
import knight from "../images/Top-100-Crypto-Memes-of-2022-31-no-escape-from-musk-tweets.jpg";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <nav className="navcss">
        <Link to="/home" className="navlinks" style={{ color: "#272727" }}>
          Home
        </Link>
        <Link to="/about" className="navlinks" style={{ color: "#272727" }}>
          About Us
        </Link>
      </nav>
      <div className="reachout">
        <h1>Reach out to us</h1>
        <p>You can reach us by phone at: (800) 444-4444</p>
        <p>You can also send an E-mail to: JorgeIVelez93@gmail.com </p>

        <img class="meme" src={knight} alt="knight"></img>
      </div>
    </div>
  );
};

export default Contact;
