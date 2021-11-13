import ChartComponent from "../ChartComponent";
import { PStyle } from "../styles/CryptoData.style";
// redux
import { useSelector, useDispatch } from "react-redux";
import { changeStaredCoin } from "../../redux/trackStaredCoins.redux";
import { Link } from "react-router-dom";

const currencies = [
 { symbol: "BTC", name: "Bitcoin", unit: "BTC", type: "crypto" },
 { symbol: "ETH", name: "Ether", unit: "ETH", type: "crypto" },
 { symbol: "LTC", name: "Litecoin", unit: "LTC", type: "crypto" },
 { symbol: "BCH", name: "Bitcoin Cash", unit: "BCH", type: "crypto" },
 { symbol: "BNB", name: "Binance Coin", unit: "BNB", type: "crypto" },
 { symbol: "EOS", name: "EOS", unit: "EOS", type: "crypto" },
 { symbol: "XRP", name: "XRP", unit: "XRP", type: "crypto" },
 { symbol: "XLM", name: "Lumens", unit: "XLM", type: "crypto" },
 { symbol: "LINK", name: "Chainlink", unit: "LINK", type: "crypto" },
 { symbol: "DOT", name: "Polkadot", unit: "DOT", type: "crypto" },
 { symbol: "YFI", name: "Yearn.finance", unit: "YFI", type: "crypto" },
 { symbol: "USD", name: "US Dollar", unit: "$", type: "fiat" },
 { symbol: "AED", name: "United Arab Emirates Dirham", unit: "DH", type: "fiat" },
 { symbol: "ARS", name: "Argentine Peso", unit: "$", type: "fiat" },
 { symbol: "AUD", name: "Australian Dollar", unit: "A$", type: "fiat" },
 { symbol: "BDT", name: "Bangladeshi Taka", unit: "৳", type: "fiat" },
 { symbol: "BHD", name: "Bahraini Dinar", unit: "BD", type: "fiat" },
 { symbol: "BMD", name: "Bermudian Dollar", unit: "$", type: "fiat" },
 { symbol: "BRL", name: "Brazil Real", unit: "R$", type: "fiat" },
 { symbol: "CAD", name: "Canadian Dollar", unit: "CA$", type: "fiat" },
 { symbol: "CHF", name: "Swiss Franc", unit: "Fr.", type: "fiat" },
 { symbol: "CLP", name: "Chilean Peso", unit: "CLP$", type: "fiat" },
 { symbol: "CNY", name: "Chinese Yuan", unit: "¥", type: "fiat" },
 { symbol: "CZK", name: "Czech Koruna", unit: "Kč", type: "fiat" },
 { symbol: "DKK", name: "Danish Krone", unit: "kr.", type: "fiat" },
 { symbol: "EUR", name: "Euro", unit: "€", type: "fiat" },
 { symbol: "GBP", name: "British Pound Sterling", unit: "£", type: "fiat" },
 { symbol: "HKD", name: "Hong Kong Dollar", unit: "HK$", type: "fiat" },
 { symbol: "HUF", name: "Hungarian Forint", unit: "Ft", type: "fiat" },
 { symbol: "IDR", name: "Indonesian Rupiah", unit: "Rp", type: "fiat" },
 { symbol: "ILS", name: "Israeli New Shekel", unit: "₪", type: "fiat" },
 { symbol: "INR", name: "Indian Rupee", unit: "₹", type: "fiat" },
 { symbol: "JPY", name: "Japanese Yen", unit: "¥", type: "fiat" },
 { symbol: "KRW", name: "South Korean Won", unit: "₩", type: "fiat" },
 { symbol: "KWD", name: "Kuwaiti Dinar", unit: "KD", type: "fiat" },
 { symbol: "LKR", name: "Sri Lankan Rupee", unit: "Rs", type: "fiat" },
 { symbol: "MMK", name: "Burmese Kyat", unit: "K", type: "fiat" },
 { symbol: "MXN", name: "Mexican Peso", unit: "MX$", type: "fiat" },
 { symbol: "MYR", name: "Malaysian Ringgit", unit: "RM", type: "fiat" },
 { symbol: "NGN", name: "Nigerian Naira", unit: "₦", type: "fiat" },
 { symbol: "NOK", name: "Norwegian Krone", unit: "kr", type: "fiat" },
 { symbol: "NZD", name: "New Zealand Dollar", unit: "NZ$", type: "fiat" },
 { symbol: "PHP", name: "Philippine Peso", unit: "₱", type: "fiat" },
 { symbol: "PKR", name: "Pakistani Rupee", unit: "₨", type: "fiat" },
 { symbol: "PLN", name: "Polish Zloty", unit: "zł", type: "fiat" },
 { symbol: "RUB", name: "Russian Ruble", unit: "₽", type: "fiat" },
 { symbol: "SAR", name: "Saudi Riyal", unit: "SR", type: "fiat" },
 { symbol: "SEK", name: "Swedish Krona", unit: "kr", type: "fiat" },
 { symbol: "SGD", name: "Singapore Dollar", unit: "S$", type: "fiat" },
 { symbol: "THB", name: "Thai Baht", unit: "฿", type: "fiat" },
 { symbol: "TRY", name: "Turkish Lira", unit: "₺", type: "fiat" },
 { symbol: "TWD", name: "New Taiwan Dollar", unit: "NT$", type: "" },
 { symbol: "UAH", name: "Ukrainian hryvnia", unit: "₴", type: "fiat" },
 { symbol: "VEF", name: "Venezuelan bolívar fuerte", unit: "Bs.F", type: "fiat" },
 { symbol: "VND", name: "Vietnamese đồng", unit: "₫", type: "fiat" },
 { symbol: "ZAR", name: "South African Rand", unit: "R", type: "fiat" },
 { symbol: "XDR", name: "IMF Special Drawing Rights", unit: "XDR", type: "fiat" },
 { symbol: "XAG", name: "Silver - Troy Ounce", unit: "XAG", type: "commodity" },
 { symbol: "SAR", name: "Gold - Troy Ounce", unit: "XAU", type: "commodity" },
 { symbol: "Bits", name: "Bits", unit: "μBTC", type: "crypto" },
 { symbol: "SATS", name: "Satoshi", unit: "sats", type: "crypto" },
];

const CryptoDataComp = ({ data, watchList }) => {
 // coins in watch list
 const { staredCoinData } = useSelector((state) => state.trackStarCoin);
 // theme to change icons
 const { currTheme } = useSelector((state) => state.changeTheme);
 // get the selected currency type
 const { currency } = useSelector((state) => state.changeCurrency);
 const dispatch = useDispatch();

 // get the percentage change between 7 days
 const getSevenDayChange = () => {
  if (watchList !== undefined) return Math.round(data.market_data.price_change_percentage_7d * 100) / 100;

  const firstValue = data.sparkline_in_7d.price[0];
  const lastValue = data.sparkline_in_7d.price[data.sparkline_in_7d.price.length - 1];

  let change = lastValue - firstValue;
  change = (change / firstValue) * 100;

  return Math.round(change * 100) / 100;
 };

 // formate the price, put comma between numbers
 const formatNums = (x) => (x >= 1 ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : x);

 // update the currency sign for the price
 const selectedCurrency = currencies.filter((currencyData) => currencyData.symbol === currency);

 // screen size for small devices
 const mobile = 384;

 return (
  <>
   {/* name */}
   <PStyle gridArea={window.innerWidth > mobile ? "1 / 1 / 2 / 3" : "1 / 1 / 2 / 4"}>
    <img
     className="star"
     src={
      staredCoinData.length > 0 && staredCoinData.includes(data.id)
       ? currTheme === "light"
         ? "./imgs/starFill.svg"
         : "./imgs/starFillDark.svg"
       : currTheme === "light"
       ? "./imgs/star.svg"
       : "./imgs/starDark.svg"
     }
     alt="star coin"
     onClick={() => dispatch(changeStaredCoin(data.id))}
    />
    <Link
     to={{
      pathname: "/currency",
      search: `?coinName=${data.id}`,
     }}
    >
     {window.innerWidth > mobile && (
      <img src={watchList !== undefined ? data.image.large : data.image} alt="coin thumbnail" />
     )}
     {data.name} {window.innerWidth > mobile && data.symbol.toUpperCase()}
    </Link>
   </PStyle>
   {/* price */}
   <PStyle gridArea={window.innerWidth > mobile ? "1 / 3 / 2 / 4" : "1 / 5 / 2 / 4"}>
    <Link
     to={{
      pathname: "/currency",
      search: `?coinName=${data.id}`,
     }}
    >
     {selectedCurrency[0].unit}
     {watchList !== undefined ? formatNums(data.market_data.current_price.usd) : formatNums(data.current_price)}
    </Link>
   </PStyle>
   {/* 7d % */}
   {window.innerWidth > mobile && (
    <PStyle gridArea="1 / 4 / 2 / 5" color={getSevenDayChange() < 0 ? "#FE2929" : "#10CE3A"}>
     <Link
      to={{
       pathname: "/currency",
       search: `?coinName=${data.id}`,
      }}
     >
      {getSevenDayChange()}%
     </Link>
    </PStyle>
   )}

   {/* 24 h*/}
   {window.innerWidth > mobile && (
    <PStyle
     gridArea="1 / 5 / 2 / 6"
     color={
      watchList !== undefined
       ? data.market_data.market_cap_change_percentage_24h < 0
         ? "#FE2929"
         : "#10CE3A"
       : data.price_change_percentage_24h < 0
       ? "#FE2929"
       : "#10CE3A"
     }
    >
     <Link
      to={{
       pathname: "/currency",
       search: `?coinName=${data.id}`,
      }}
     >
      {watchList !== undefined
       ? Math.round(data.market_data.market_cap_change_percentage_24h * 100) / 100
       : Math.round(data.price_change_percentage_24h * 100) / 100}
      %
     </Link>
    </PStyle>
   )}

   {/* graph */}
   <p
    style={{
     gridArea: window.innerWidth > mobile ? "1 / 6 / 2 / 8" : "1 / 5 / 2 / 8",
     marginLeft: "10px",
     width: "100%",
    }}
   >
    <Link
     to={{
      pathname: "/currency",
      search: `?coinName=${data.id}`,
     }}
    >
     <ChartComponent
      color={getSevenDayChange() < 0 ? "#FE2929" : "#10CE3A"}
      priceData={watchList !== undefined ? data.market_data.sparkline_7d.price : data.sparkline_in_7d.price}
     />
    </Link>
   </p>
  </>
 );
};

export default CryptoDataComp;
