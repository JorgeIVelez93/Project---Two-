import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Coin from "./Coin";

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
    console.log(response.data);
    setCoinsList(response.data.data);
  };

  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <h1>Welcome!</h1>
      <br></br>
      <ul>
        {coinsList.coins &&
          coinsList.coins.map(function (coin) {
            return (
              <li>
                <Link to={`/coin/${coin.uuid}`}>{coin.name}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Home;
