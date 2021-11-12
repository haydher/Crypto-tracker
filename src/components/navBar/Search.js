import { SearchContainer } from "../styles/SearchContainer.style";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Search = () => {
 // current theme
 const { currTheme } = useSelector((state) => state.changeTheme);
 //
 const inputRef = useRef();

 // for the initial fetch to store all the results
 const [coinList, setCoinList] = useState([]);

 // store the filter searched results
 const [searchedCoins, setSearchedCoins] = useState([]);

 // toggle the drop down
 const [dropDown, setDropDown] = useState("none");

 // get the search results
 const searchField = (event) => {
  // get the value from the search bar
  let value = event.target.value.toLowerCase();
  // store all the searched items
  let searchArr = [];

  // loop thru all the currency and look for matching inputs
  for (let i = 0; i < coinList.length; i++) {
   // select the matched inputs
   if (coinList[i].symbol.toLowerCase().includes(value) || coinList[i].name.toLowerCase().includes(value))
    searchArr.push(coinList[i]);
  }
  // update the menu options,
  setSearchedCoins(searchArr);
 };

 // fetch coin list once clicked on the search bar
 const fetchList = async () => {
  const url = `https://api.coingecko.com/api/v3/coins/list`;

  if (coinList.length > 1 || (localStorage.getItem("searchData") !== null && localStorage.getItem("searchData") > 0))
   return;

  try {
   const res = await fetch(url);
   const json = await res.json();
   console.log(json);
   setCoinList(json);
   localStorage.setItem("searchData", json);
  } catch (error) {
   console.error("Error fetching search results");
   console.error(error);
  }
 };

 const closeDropDown = () => {
  setDropDown("none");
  setSearchedCoins([]);
 };

 return (
  <SearchContainer>
   <input
    type="text"
    name="search"
    autoComplete="off"
    placeholder="Search..."
    onKeyUp={searchField}
    onFocus={() => {
     fetchList();
     setDropDown("block");
    }}
    // onBlur={() => setDropDown("none")}
    ref={inputRef}
   />
   <div className="btnContainer">
    <img src={currTheme === "light" ? "../imgs/search.svg" : "../imgs/searchDark.svg"} alt="search button" />
   </div>

   <div className="subMenu" style={{ display: dropDown }}>
    {searchedCoins.length > 0 && (
     <h1 className="closeMenu" onClick={closeDropDown}>
      X
     </h1>
    )}

    {searchedCoins.length > 0 &&
     searchedCoins.map((currency, index) => {
      return (
       <Link
        key={index}
        to={{
         pathname: "/currency",
         search: `?coinName=${currency.id}`,
        }}
       >
        <p
         onClick={() => {
          closeDropDown();
          console.log(inputRef.current.value);
          inputRef.current.value = "";
          // inputRef.current.blur();
         }}
        >
         {currency.name}
        </p>
       </Link>
      );
     })}
   </div>
  </SearchContainer>
 );
};

export default Search;
