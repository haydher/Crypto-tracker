import { SearchContainer } from "../styles/SearchContainer.style";

const Search = () => {
 return (
  <SearchContainer>
   <input type="text" name="search" placeholder="Search..." />
   <div className="btnContainer">
    <img src="../imgs/search.svg" alt="search button" />
   </div>
  </SearchContainer>
 );
};

export default Search;
