import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { TrendingCoinsStyle, CoinPercentage } from "./styles/TrendingCoins.style";
import { Title } from "./styles/Title.style";

const TrendingCoins = () => {
 const [trendingCoinInfo, setTrendingCoinInfo] = useState([]);
 // fetch trending coins
 useEffect(() => {
  const fetchTrendingCoins = async () => {
   const url = `https://api.coingecko.com/api/v3/search/trending`;

   fetch(url)
    .then((res) => res.json())
    .then((data) => {
     // dont fetch coins if the data is already fetched
     if (data.coins.length <= trendingCoinInfo.length) return;

     data.coins.forEach((coin) => {
      const coinURL = `https://api.coingecko.com/api/v3/coins/${coin.item.id}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`;
      fetch(coinURL)
       .then((res) => res.json())
       .then((data) => {
        setTrendingCoinInfo((oldValue) => [...oldValue, data]);
       });
     });
    });
  };
  fetchTrendingCoins();
 }, []);

 return (
  <TrendingCoinsStyle>
   <Title>Trending Coins</Title>

   {trendingCoinInfo.map((coin, index) => {
    return (
     <Link
      key={index}
      to={{
       pathname: "/currency",
       search: `?coinName=${coin.id}`,
      }}
     >
      <div className="mainContainer">
       <div className="coinName">
        <img src={coin.image.large} alt="coin thumbnail" />
        <p>{coin.name}</p>
       </div>

       <CoinPercentage rate={coin.market_data.price_change_percentage_24h > 0 && "positive"}>
        <p>{Math.round(coin.market_data.price_change_percentage_24h * 100) / 100} %</p>
        <img
         src={coin.market_data.price_change_percentage_24h > 0 ? "./imgs/positive.svg" : "./imgs/negative.svg"}
         alt="icon"
        />
       </CoinPercentage>
      </div>
     </Link>
    );
   })}
  </TrendingCoinsStyle>
 );
};

export default TrendingCoins;
