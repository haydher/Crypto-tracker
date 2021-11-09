import { CoinDataContainer, CurrPrice, PriceChangeContainer, PriceChange } from "../styles/CurrPrice.style";

const Price = ({ coin }) => {
 // round down percentage
 const roundDown = (num) => {
  return Math.round(num * 100) / 100;
 };

 // calculate percentage change
 const calcPerChange = (currPrice, originalPrice) => {
  let increase = currPrice - originalPrice;
  return roundDown((increase / originalPrice) * 100);
 };

 // formate the price, put comma between numbers
 const formatNums = (x) => {
  return x >= 1 ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : x;
 };

 return (
  <CoinDataContainer>
   <CurrPrice rate={coin.market_data.price_change_percentage_24h > 0 && "positive"}>
    <h1 className="name">{coin.name} Price</h1>
    <div>
     <h1 className="price">
      {"$"}
      {formatNums(coin.market_data.current_price.usd)}
     </h1>
     <span className="percentage">{roundDown(coin.market_data.price_change_percentage_24h)}%</span>
    </div>
   </CurrPrice>
   <PriceChangeContainer>
    <PriceChange
     rate={calcPerChange(coin.market_data.current_price.usd, coin.market_data.low_24h.usd) > 0 && "positive"}
    >
     <p className="title">Low 24H</p>
     <h1 className="price">
      {"$"}
      {formatNums(coin.market_data.low_24h.usd)}
     </h1>
     <span className="percentage">
      <img
       src={
        calcPerChange(coin.market_data.current_price.usd, coin.market_data.low_24h.usd) > 0
         ? "./imgs/positive.svg"
         : "./imgs/negative.svg"
       }
       alt=""
      />{" "}
      {calcPerChange(coin.market_data.current_price.usd, coin.market_data.low_24h.usd)}%
     </span>
    </PriceChange>

    <PriceChange
     rate={calcPerChange(coin.market_data.current_price.usd, coin.market_data.high_24h.usd) > 0 && "positive"}
    >
     <p className="title">High 24</p>
     <h1 className="price">
      {"$"}
      {formatNums(coin.market_data.high_24h.usd)}
     </h1>
     <span className="percentage">
      <img
       src={
        calcPerChange(coin.market_data.current_price.usd, coin.market_data.high_24h.usd) > 0
         ? "./imgs/positive.svg"
         : "./imgs/negative.svg"
       }
       alt=""
      />{" "}
      {calcPerChange(coin.market_data.current_price.usd, coin.market_data.high_24h.usd)}%
     </span>
    </PriceChange>

    <PriceChange rate={coin.market_data.ath_change_percentage.usd > 0 && "positive"}>
     <p className="title">All Time High</p>
     <h1 className="price">
      {"$"}
      {formatNums(coin.market_data.ath.usd)}
     </h1>
     <span className="percentage">
      <img
       src={coin.market_data.ath_change_percentage.usd > 0 ? "./imgs/positive.svg" : "./imgs/negative.svg"}
       alt=""
      />{" "}
      {roundDown(coin.market_data.ath_change_percentage.usd)}%
     </span>
    </PriceChange>

    <PriceChange rate={coin.market_data.market_cap_change_percentage_24h > 0 && "positive"}>
     <p className="title">Market Cap</p>
     <h1 className="price">
      {"$"}
      {formatNums(coin.market_data.market_cap.usd)}
     </h1>
     <span className="percentage">
      <img
       src={coin.market_data.market_cap_change_percentage_24h > 0 ? "./imgs/positive.svg" : "./imgs/negative.svg"}
       alt=""
      />{" "}
      {roundDown(coin.market_data.market_cap_change_percentage_24h)}%
     </span>
    </PriceChange>

    <PriceChange
     rate={calcPerChange(coin.market_data.current_price.usd, coin.market_data.low_24h.usd) > 0 && "positive"}
    >
     <p className="title">Total Volume</p>
     <h1 className="price">
      {"$"}
      {formatNums(coin.market_data.total_volume.usd)}
     </h1>
     {/* <span className="percentage">
      <img src="./imgs/positive.svg" /> 24%
     </span> */}
    </PriceChange>

    {/* <PriceChange>
     <p className="title">Fully Distributed Market Cap</p>
     <h1 className="price">$ 69,699</h1>
     <span className="percentage">
      <img src="./imgs/positive.svg" /> 24%
     </span>
    </PriceChange> */}
   </PriceChangeContainer>
  </CoinDataContainer>
 );
};

export default Price;
