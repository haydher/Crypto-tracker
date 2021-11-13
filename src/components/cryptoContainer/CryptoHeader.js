import CryptoHeaderComp from "./CryptoHeaderComp";
import { CryptoGridStyle } from "../styles/CryptoGridStyle.style";

const CryptoHeader = () => {
 const mobile = 384;

 return (
  <CryptoGridStyle>
   <CryptoHeaderComp grid={window.innerWidth > mobile ? "1 / 1 / 2 / 3" : "1 / 1 / 2 / 4"} text="Name" />
   <CryptoHeaderComp grid={window.innerWidth > mobile ? "1 / 3 / 2 / 4" : "1 / 5 / 2 / 4"} text="Price" sort="sort" />
   {window.innerWidth > mobile && <CryptoHeaderComp grid="1 / 4 / 2 / 5" text="7d % " sort="sort" />}
   {window.innerWidth > mobile && <CryptoHeaderComp grid="1 / 5 / 2 / 6" text="24h % " sort="sort" />}
   <CryptoHeaderComp
    grid={window.innerWidth > mobile ? "1 / 6 / 2 / 8" : "1 / 6 / 2 / 8"}
    text={window.innerWidth > mobile ? "Last 7 Days" : "7 Days"}
   />
  </CryptoGridStyle>
 );
};

export default CryptoHeader;
