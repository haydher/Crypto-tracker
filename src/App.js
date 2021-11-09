import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/styles/Theme";
import { GlobalComponents } from "./components/styles/GlobalComponents";
import NavBar from "./components/navBar/NavBar";
import MainContainerParent from "./components/MainContainerParent";
import { MainContainerParentStyle } from "./components/styles/MainContainerParent.style";
import MarketValue from "./components/MarketValue";

import CurrencyContainer from "./components/currency/CurrencyContainer";

const App = () => {
 // const [theme, setTheme] = useState("light");
 const theme = "light";

 return (
  <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
   <GlobalComponents />
   <div className="App">
    <NavBar />
    <Routes>
     {/* home page */}
     <Route
      path="/"
      element={
       <MainContainerParentStyle>
        <MarketValue />
        <MainContainerParent />
       </MainContainerParentStyle>
      }
     />

     {/* opened currency */}
     <Route
      path={`/currency`}
      element={
       <MainContainerParentStyle>
        <CurrencyContainer />
       </MainContainerParentStyle>
      }
     />
    </Routes>
   </div>
  </ThemeProvider>
 );
};

export default App;
