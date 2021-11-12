import { useSelector } from "react-redux";
// import { changeCoinId } from "../redux/changeCoinId.redux";

import { MainContainer } from "./styles/MainContainer.style";
import { MainContainerComponentContainer } from "./styles/MainContainerComponentContainer.style";

import CryptoContainer from "./cryptoContainer/CryptoContainer";
import TrendingCoins from "./TrendingCoins";
import NewsComponent from "./NewsComponent";
import WatchList from "./WatchList";

const MainContainerParent = () => {
 const { staredCoinData } = useSelector((state) => state.trackStarCoin);
 const { coinId } = useSelector((state) => state.changeCoinId);

 return (
  <MainContainer>
   {/* show all the coins and their value */}
   <div>
    {staredCoinData.length > 0 && (
     <div className="watchList">
      <MainContainerComponentContainer>
       <WatchList />
      </MainContainerComponentContainer>
     </div>
    )}

    {/* coin data */}
    <MainContainerComponentContainer className="currencies">
     <CryptoContainer />
    </MainContainerComponentContainer>
   </div>

   <div className="dontFlexBox">
    <MainContainerComponentContainer className="trending">
     <TrendingCoins />
    </MainContainerComponentContainer>
    <MainContainerComponentContainer className="news">
     <NewsComponent currency={coinId} cookie="true" />
    </MainContainerComponentContainer>
   </div>
  </MainContainer>
 );
};

export default MainContainerParent;
