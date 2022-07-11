import React from "react";
import { Link } from "react-router-dom";

const Opening = () => {
  return (
    <div>
      <h1>Value Hoops</h1>
      <h3>
        Is your favorite player living up to their contract or are they a flop?
      </h3>
      <h5>Find out! </h5>

      <Link to="/home">Tip off!</Link>
    </div>
  );
};

export default Opening;
