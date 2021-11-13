import { useState, useEffect } from "react";
import { MarketValueContainer } from "./styles/MarketValueContainer.style";

const MarketValue = () => {
 // get the current market value
 useEffect(() => {
  fetchMarket();
 }, []);

 const [market, setMarket] = useState(null);
 const fetchMarket = async () => {
  const url = "https://api.coingecko.com/api/v3/global";

  try {
   const res = await fetch(url);
   const json = await res.json();
   setMarket(json.data.market_cap_change_percentage_24h_usd);
  } catch (error) {
   console.error("ERROR IN `MarketValue.js` while fetching market data");
   console.error(error);
  }
 };

 return (
  <MarketValueContainer rate={market > 0 && "positive"}>
   <h1>Market Value</h1>
   <p>
    The global market in the last 24 hours is {market > 0 ? "up" : "down"} up by
    <img src={market > 0 ? "./imgs/positive.svg" : "./imgs/negative.svg"} alt="icon" />
    <span>{Math.round(market * 100) / 100}%</span>
   </p>
  </MarketValueContainer>
 );
};

export default MarketValue;
