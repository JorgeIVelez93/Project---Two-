import React from "react";
import { Link } from "react-router-dom";
import CreateAcccss from "./CreateAcc.css";
import companylogo from "../images/quick crypto-logos_transparent.png";

const CreateAcc = () => {
  const [firstName, setfirstName] = React.useState("");
  const [lastName, setlastName] = React.useState("");
  const [birthday, setBirthday] = React.useState();
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("");

  const addProfile = (e) => {
    e.preventDefault();
    setfirstName("");
    setlastName("");
    setBirthday("");
    setEmail("");
    setStatus(
      `Thank you for enrolling in our news letter, ${firstName} ${lastName}. You will now receive news and alerts on all things Crypto.`
    );
  };
  return (
    <div className="createacccss">
      <img src={companylogo} alt="logo" className="companylogo"></img>
      <h1>Join our news letter! </h1>
      <br></br>
      <form onSubmit={addProfile}>
        <div className="inputcss">
          <label>First Name</label>
          <input
            type="text"
            placeholder="First Name"
            required
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          ></input>
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            required
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          ></input>
        </div>
        <div className="inputcss">
          <label>Date of Birth</label>
          <input
            type="date"
            placeholder="DOB"
            required
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          ></input>
          <label>Email</label>
          <input
            type="Email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <button type="submit" className="Linkcss">
            Submit
          </button>
        </div>
      </form>
      <p>{status}</p>
      <Link to="/home" style={{ textDecoration: "none" }} className="Linkcss">
        View Exchange Rates
      </Link>
    </div>
  );
};

export default CreateAcc;
