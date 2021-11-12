import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Paginate from "./Paginate";
import { CryptoGridStyle } from "../styles/CryptoGridStyle.style";
import CryptoDataComp from "./CryptoDataComp";
import { changeCoinId } from "../../redux/changeCoinId.redux";

const CryptoCoins = ({ watchList }) => {
 // redux toolkit
 const dispatch = useDispatch();

 // get the selected currency
 const { currency } = useSelector((state) => state.changeCurrency);

 // keep track of the selected page number to fetch data
 const [pageNumber, setPageNumber] = useState(1);

 // store the response data from `fetchCoins` - store the coins shown on the page
 const [coins, setCoins] = useState([]);

 //get updated price every 10 seconds
 useEffect(() => {
  const fetchCoins = async () => {
   //  get the data if its for watch list
   if (watchList !== undefined) {
    try {
     const json = await Promise.all(
      watchList.map((coin) =>
       fetch(
        `https://api.coingecko.com/api/v3/coins/${coin}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
       ).then((res) => res.json())
      )
     );
     setCoins(json);
    } catch (err) {
     console.error("ERROR fetching the watch list data", err);
    }
   }
   //  get data for regular chart
   else {
    const itemsPerPage = "20";
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${itemsPerPage}&page=${pageNumber}&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d`;
    fetch(url)
     .then((res) => res.json())
     .then((data) => {
      setCoins(data);
     })
     .catch((err) => console.error("ERROR fetching the coin data", err));
   }
  };
  fetchCoins();
  const interval = setInterval(() => fetchCoins(), 10000);
  return () => clearInterval(interval);
  // update each time page or currency changes
 }, [pageNumber, currency, watchList]);

 // update page number state
 const handlePageClick = (data) => setPageNumber(data.selected + 1);

 // put a border for each crypto
 const style = {
  borderTop: "1px solid #A8A8A8",
 };
 return (
  <>
   {coins.length > 0
    ? coins.map((coin, index) => {
       return (
        <CryptoGridStyle key={index} onClick={() => dispatch(changeCoinId(coin.id))} style={style}>
         <CryptoDataComp data={coin} watchList={watchList} />
        </CryptoGridStyle>
       );
      })
    : ""}
   {watchList === undefined && <Paginate onPageClick={handlePageClick} />}
  </>
 );
};

export default CryptoCoins;
