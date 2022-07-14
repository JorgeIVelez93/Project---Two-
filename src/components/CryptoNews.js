import React from "react";
import axios from "axios";

const CryptoNews = () => {
  const [cryptoNews, setCryptoNews] = React.useState([]);

  const options = {
    method: "GET",
    url: "https://crypto-news-live3.p.rapidapi.com/news",
    headers: {
      "X-RapidAPI-Key": "fc5ddf5126msh1d48379b21e9d23p19d5aajsn82e9df5dbeec",
      "X-RapidAPI-Host": "crypto-news-live3.p.rapidapi.com",
    },
  };

  React.useEffect(function () {
    getNews();
  }, []);

  const getNews = async () => {
    let response = await axios.request(options);
    // console.log(response.data);
    console.log(response.data[0].source);
    setCryptoNews(response.data.slice(0, 5));
  };
  return (
    <div>
      {cryptoNews.map(function (news) {
        return (
          <div className="news">
            <a href={news.url}>
              {news.title}, <br></br>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default CryptoNews;
