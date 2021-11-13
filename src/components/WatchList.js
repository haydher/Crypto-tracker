import CryptoHeader from "./cryptoContainer/CryptoHeader";
import CryptoCoins from "./cryptoContainer/CryptoCoins";
import { Title } from "./styles/Title.style";
import { useSelector } from "react-redux";

const WatchList = () => {
 const { staredCoinData } = useSelector((state) => state.trackStarCoin);

 return (
  <>
   <Title>Watch List</Title>
   <CryptoHeader />
   <CryptoCoins watchList={staredCoinData} />
  </>
 );
};

export default WatchList;
