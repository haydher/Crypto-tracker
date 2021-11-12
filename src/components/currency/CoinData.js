import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import CoinChart from "./CoinChart";
import Price from "./Price";
import { About } from "../styles/About.style";
// redux
import { useSelector } from "react-redux";

const useQuery = () => {
 const { search } = useLocation();
 return useMemo(() => new URLSearchParams(search), [search]);
};
const CoinData = () => {
 // redux
 // get selected time for graph
 const { time } = useSelector((state) => state.changeTime);

 // get query params / coin name
 const query = useQuery();
 const coinName = query.get("coinName");

 // fetch info about selected coin
 const [coinData, setCoinData] = useState();
 // const [graphData, setGraphData] = useState({});
 const [graphData, setGraphData] = useState(null);

 //get updated price every 10 seconds
 useEffect(() => {
  if (coinName === undefined || coinName === null || coinName === "") {
   console.error("Invalid link");
   return;
  }

  // fetch selected coin
  const fetchCoinData = async () => {
   const url = `https://api.coingecko.com/api/v3/coins/${coinName}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`;
   try {
    const res = await fetch(url);
    const json = await res.json();
    setCoinData(json);
   } catch (error) {
    console.error("ERROR Fetching Coin Data from `CoinData.js - fetchCoinData`");
    console.error(error);
   }
  };
  // fetch graph data for the selected coin
  const fetchGraphData = async () => {
   const currRangeUNIX = (new Date().getTime() / 1000).toFixed(0);
   const prevRangeUNIX = currRangeUNIX - time;
   const url = `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart/range?vs_currency=usd&from=${prevRangeUNIX}&to=${currRangeUNIX}`;
   try {
    const res = await fetch(url);
    const json = await res.json();
    setGraphData(json.prices);
   } catch (error) {
    console.error("ERROR Fetching Coin Data from `CoinData.js - fetchGraphData`");
    console.error(error);
   }
  };

  fetchCoinData();
  fetchGraphData();

  const interval = setInterval(() => {
   fetchCoinData();
   fetchGraphData();
  }, 10000);
  return () => clearInterval(interval);
 }, [time, coinName]);

 return (
  <>
   {coinData == null ? "rendering" : <Header coin={coinData} />}

   <div style={{ height: "500px", margin: "36px 0" }}>{<CoinChart graph={graphData && graphData} />}</div>
   {coinData == null ? "rendering" : <Price coin={coinData} />}

   {coinData == null ? (
    "rendering"
   ) : (
    <About>
     {coinData.description.en.length > 0 && <h1>About {coinData.name}</h1>}
     {coinData.description.en.length > 0 && <p>{coinData.description.en.replaceAll(/<[^>]+>/g, "")}</p>}
    </About>
   )}
  </>
 );
};

export default CoinData;
