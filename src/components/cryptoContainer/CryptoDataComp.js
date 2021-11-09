import ChartComponent from "../ChartComponent";
import { PStyle } from "../styles/CryptoData.style";
// redux
import { useSelector } from "react-redux";

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

const CryptoDataComp = ({ data }) => {
 // get the selected currency type
 const { currency } = useSelector((state) => state.changeCurrency);

 // get the percentage change between 7 days
 const getSevenDayChange = () => {
  const firstValue = data.sparkline_in_7d.price[0];
  const lastValue = data.sparkline_in_7d.price.at(-1);

  let change = lastValue - firstValue;
  change = (change / firstValue) * 100;

  return Math.round(change * 100) / 100;
 };

 // formate the price, put comma between numbers
 const formatNums = (x) => {
  return x >= 1 ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : x;
 };

 // update the currency sign for the price
 const selectedCurrency = currencies.filter((currencyData) => currencyData.symbol === currency);

 return (
  <>
   <PStyle gridArea="1 / 1 / 2 / 3">
    <img src={data.image} alt="coin thumbnail" />
    {data.name} {data.symbol.toUpperCase()}
   </PStyle>
   <PStyle gridArea="1 / 3 / 2 / 4">
    {selectedCurrency[0].unit}
    {formatNums(data.current_price)}
   </PStyle>
   <PStyle gridArea="1 / 4 / 2 / 5" color={getSevenDayChange() < 0 ? "#FE2929" : "#10CE3A"}>
    {getSevenDayChange()}%
   </PStyle>
   <PStyle gridArea="1 / 5 / 2 / 6" color={data.price_change_percentage_24h < 0 ? "#FE2929" : "#10CE3A"}>
    {Math.round(data.price_change_percentage_24h * 100) / 100}%
   </PStyle>
   <p style={{ gridArea: "1 / 6 / 2 / 8" }}>
    <ChartComponent color={getSevenDayChange() < 0 ? "#FE2929" : "#10CE3A"} priceData={data.sparkline_in_7d.price} />
   </p>
  </>
 );
};

export default CryptoDataComp;
