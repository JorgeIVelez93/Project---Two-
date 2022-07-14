import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import fundcss from "./Fund.css";

const Fund = () => {
  const [coinsList, setCoinsList] = React.useState({});
  const [purse, setPurse] = React.useState(0);
  const [selectedCoin, setselectedCoin] = React.useState(1);
  const [wallet, setWallet] = React.useState({
    cryptoName: "",
    cryptoPrice: 0,
  });

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
    setCoinsList(response.data.data);
  };

  const coinPrice = (e) => {
    setselectedCoin(e);
    // console.log(e);
  };

  console.log(wallet);
  return (
    <div class="fundsexchange">
      <form>
        <label className="fonth3">Live Currency Exchange Rate</label>
        <br></br>
        <br></br>
        <select onChange={(e) => coinPrice(e.target.value)}>
          {coinsList.coins &&
            coinsList.coins.map(function (coin) {
              return <option value={coin.price}>{coin.name}</option>;
            })}
        </select>
        <br></br>
        <input
          type="number"
          placeholder="Enter amount to exchange"
          value={purse}
          onChange={(e) => setPurse(e.target.value)}
        ></input>
      </form>
      <h3 className="fonth3">Conversion Rate</h3>
      <p>
        {(purse / selectedCoin).toFixed(2)}{" "}
        {purse / selectedCoin > 1 ? "Coins" : "Coin"}
      </p>
    </div>
  );
};
export default Fund;
