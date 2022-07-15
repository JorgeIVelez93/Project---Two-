import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Coin from "./Coin";
import Homecss from "./Home.css";
import companylogo from "../images/quick crypto-logos_transparent.png";

const Home = () => {
  const [coinsList, setCoinsList] = React.useState({});

  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "50",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_COIN_API,
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  React.useEffect(function () {
    getCoins();
  }, []);

  const getCoins = async () => {
    let response = await axios.request(options);
    // console.log(response.data);
    console.log(response.data.data);
    setCoinsList(response.data.data);
  };

  return (
    <div className="mobilediv">
      <nav className="navcss">
        <div className="homeimg">
          <img src={companylogo} alt="logo"></img>
          <Link to="/home" className="navlinks" style={{ color: "#272727" }}>
            Home
          </Link>
          <Link to="/contact" className="navlinks" style={{ color: "#272727" }}>
            Contact
          </Link>
          <Link to="/about" className="navlinks" style={{ color: "#272727" }}>
            About
          </Link>
        </div>
      </nav>
      <h1>Crypto-Listo </h1>
      <br></br>
      {/* <p>From Algorand to USDC. See the top ranked crypto currencies. </p> */}
      <div className="homeflex">
        {coinsList.coins &&
          coinsList.coins.map(function (coin) {
            return (
              <div>
                <Link to={`/coin/${coin.uuid}`}>
                  <img
                    src={coin.iconUrl}
                    alt={coin.name}
                    width="100"
                    height="100"
                    className="mobileimg"
                  />
                </Link>
                <p className="mobileimgp">{coin.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
