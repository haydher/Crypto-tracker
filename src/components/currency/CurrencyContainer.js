import { MainContainer } from "../styles/MainContainer.style";
import { MainContainerComponentContainer } from "../styles/MainContainerComponentContainer.style";
import CoinData from "./CoinData";

import TrendingCoins from "../TrendingCoins";
const CurrencyContainer = () => {
 return (
  <MainContainer>
   <MainContainerComponentContainer className="cryptoContainer">
    <CoinData />
   </MainContainerComponentContainer>

   <div className="dontFlexBox">
    <MainContainerComponentContainer className="trending">
     <TrendingCoins />
    </MainContainerComponentContainer>
    <MainContainerComponentContainer className="news">News about crypto</MainContainerComponentContainer>
   </div>
  </MainContainer>
 );
};

export default CurrencyContainer;
