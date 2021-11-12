import { useSelector } from "react-redux";
import { MainContainer } from "../styles/MainContainer.style";
import { MainContainerComponentContainer } from "../styles/MainContainerComponentContainer.style";
import CoinData from "./CoinData";
import NewsComponent from "../NewsComponent";
import TrendingCoins from "../TrendingCoins";

const CurrencyContainer = () => {
 const { coinId } = useSelector((state) => state.changeCoinId);
 return (
  <MainContainer>
   <MainContainerComponentContainer className="cryptoContainer">
    <CoinData />
   </MainContainerComponentContainer>

   <div className="dontFlexBox">
    <MainContainerComponentContainer className="trending">
     <TrendingCoins />
    </MainContainerComponentContainer>
    <MainContainerComponentContainer className="news">
     <NewsComponent currency={coinId} />
    </MainContainerComponentContainer>
   </div>
  </MainContainer>
 );
};

export default CurrencyContainer;
