import { MainContainer } from "./styles/MainContainer.style";
import { MainContainerComponentContainer } from "./styles/MainContainerComponentContainer.style";

import CryptoContainer from "./cryptoContainer/CryptoContainer";
import TrendingCoins from "./TrendingCoins";

const MainContainerParent = () => {
 return (
  <MainContainer>
   {/* show all the coins and their value */}
   <MainContainerComponentContainer className="cryptoContainer">
    <CryptoContainer />
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

export default MainContainerParent;
