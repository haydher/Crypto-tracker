import CryptoHeaderComp from "./CryptoHeaderComp";
import { CryptoGridStyle } from "../styles/CryptoGridStyle.style";

const CryptoHeader = () => {
 return (
  <CryptoGridStyle>
   <CryptoHeaderComp grid="1 / 1 / 2 / 3" text="Name" />
   <CryptoHeaderComp grid="1 / 3 / 2 / 4" text="Price" sort="sort" />
   <CryptoHeaderComp grid="1 / 4 / 2 / 5" text="7d % " sort="sort" />
   <CryptoHeaderComp grid="1 / 5 / 2 / 6" text="24h % " sort="sort" />
   <CryptoHeaderComp grid="1 / 6 / 2 / 8" text="Last 7 Days" />
  </CryptoGridStyle>
 );
};

export default CryptoHeader;
