import { useState } from "react";
import { CurrencyContainer } from "../styles/CurrencyContainer.style";
//redux
import { useSelector, useDispatch } from "react-redux";
import { changeCurrency } from "../../redux/currencyChange.redux";

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

const ChangeCurrency = () => {
 // redux toolkit
 // get the currency state
 const { currency } = useSelector((state) => state.changeCurrency);
 // get the changeCurrency function from redux
 const dispatch = useDispatch();

 // use this to update the search bar, store all the values initially, filter as searched
 const [currencySearch, setCurrencySearch] = useState([...currencies]);

 // filter the search bar menu
 const searchCurrency = (e) => {
  // get the value from the search bar
  let value = e.target.value.toLowerCase();
  // store all the searched items
  let searchArr = [];

  // loop thru all the currency and look for matching inputs
  for (let i = 0; i < currencies.length; i++) {
   // select the matched inputs
   if (currencies[i].symbol.toLowerCase().includes(value) || currencies[i].name.toLowerCase().includes(value))
    searchArr.push(currencies[i]);
  }
  // update the menu options
  setCurrencySearch(searchArr);
 };

 // toggle the drop down
 const [dropDown, setDropDown] = useState("none");
 const toggleDropDown = (e) => {
  if (e.target.localName !== "input") dropDown === "none" ? setDropDown("block") : setDropDown("none");
 };

 return (
  <CurrencyContainer onClick={toggleDropDown}>
   <p>{currency}</p>
   <img
    src="../imgs/arrow.svg"
    alt="Coin Thumbnail"
    style={dropDown === "block" ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }}
   />

   <div className="subMenu" style={{ display: dropDown }}>
    <input type="text" placeholder="Search Currency" onKeyUp={searchCurrency} />
    {currencySearch.map((currency, index) => {
     return (
      <p onClick={() => dispatch(changeCurrency(currency.symbol))} key={index}>
       {currency.unit === currency.symbol
        ? `${currency.name} - ${currency.symbol}`
        : `${currency.name} - ${currency.unit} ${currency.symbol}`}
      </p>
     );
    })}
   </div>
  </CurrencyContainer>
 );
};

export default ChangeCurrency;
