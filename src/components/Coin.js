import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Fund from "./Fund";
import { Link } from "react-router-dom";
import CryptoNews from "./CryptoNews";
import Coincss from "./Coin.css";
import LineChart from "./LineChart";

const Coin = () => {
  const [singleCoin, setSingleCoin] = React.useState({});
  const params = useParams();

  const options = {
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/coin/${params.uuid}`,
    params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "24h" },
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
    console.log(response.data.data);
    setSingleCoin(response.data.data.coin);
  };

  return (
    <div className="singlecoin">
      <nav className="navcss">
        <Link to="/home" className="navlinks">
          <img
            src={singleCoin.iconUrl}
            alt="crypto logo"
            className="cryptologohome"
          ></img>
        </Link>
        <Link to="/contact" className="navlinks">
          Contact Us
        </Link>
        <Link to="/about" className="navlinks">
          About Us
        </Link>
      </nav>
      <br></br>
      <div className="exchange">
        <div className="coininfo">
          <img src={singleCoin.iconUrl} alt="Bitcoin logo" width="100px"></img>
          <h3 style={{ color: singleCoin.color }}>{singleCoin.name}</h3>
          <p>
            Cost(USD): $
            {singleCoin.price && Number(singleCoin.price).toFixed(2)}
          </p>
        </div>
        <div className="coininfo">
          <p>Index: {singleCoin.symbol}</p>
          <p>
            Market Cap: $
            {singleCoin.marketCap &&
              Number(singleCoin.marketCap).toLocaleString()}
          </p>
          <a href={singleCoin.websiteUrl} style={{ color: singleCoin.color }}>
            Official Site: {singleCoin.websiteUrl}
          </a>
        </div>
        <div className="coininfo">
          <Fund />
        </div>
      </div>
      <div className="news">
        <p>
          {singleCoin.description &&
            singleCoin.description.replace(/(<([^>]+)>)/gi, "")}
        </p>
      </div>
      <div className="namesinfo">
        <p>News</p>
        <CryptoNews />
      </div>
    </div>
  );
};

export default Coin;
