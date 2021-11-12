import CryptoHeader from "./CryptoHeader";
import CryptoCoins from "./CryptoCoins";
import { Title } from "../styles/Title.style";

const CryptoContainer = () => {
 return (
  <>
   <Title>Crypto Currencies</Title>
   <CryptoHeader />
   <CryptoCoins />
  </>
 );
};

export default CryptoContainer;
