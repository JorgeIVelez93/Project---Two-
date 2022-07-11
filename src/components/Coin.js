import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
    console.log(response.data);
    setSingleCoin(response.data.data);
  };

  return (
    <div>
      <p>{singleCoin.name}</p>
    </div>
  );
};

export default Coin;
