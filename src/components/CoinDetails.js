import React from "react";
import Coin from "./Coin";
import axios from "axios";

const CoinDetails = () => {
  const [singleCoin, setSingleCoin] = React.useState({});

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
      "X-RapidAPI-Key": "fc5ddf5126msh1d48379b21e9d23p19d5aajsn82e9df5dbeec",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  React.useEffect(function () {
    getCoins();
  }, []);

  const getCoins = async () => {
    let response = await axios.request(options);
    console.log(response.data);
    setSingleCoin(response.data.data);
  };

  return <div></div>;
};

export default CoinDetails;
