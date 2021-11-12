import CryptoHeader from "./cryptoContainer/CryptoHeader";
import CryptoCoins from "./cryptoContainer/CryptoCoins";
import { Title } from "./styles/Title.style";
import { WatchListStyle } from "./styles/WatchList.style";
import { useSelector } from "react-redux";

const WatchList = () => {
 const { staredCoinData } = useSelector((state) => state.trackStarCoin);

 return (
  <WatchListStyle>
   <Title>Watch List</Title>
   <CryptoHeader />
   <CryptoCoins watchList={staredCoinData} />
  </WatchListStyle>
 );
};

export default WatchList;
