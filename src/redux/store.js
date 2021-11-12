import { configureStore } from "@reduxjs/toolkit";
import changeCurrencySlice from "./currencyChange.redux";
import changeGraphTimeSlice from "./changeGraphTime.redux";
import changeCoinIdSlice from "./changeCoinId.redux";
import trackStaredCoinsSlice from "./trackStaredCoins.redux";
import changeThemeSlice from "./changeTheme.redux";

export default configureStore({
 reducer: {
  changeCurrency: changeCurrencySlice,
  changeTime: changeGraphTimeSlice,
  changeCoinId: changeCoinIdSlice,
  trackStarCoin: trackStaredCoinsSlice,
  changeTheme: changeThemeSlice,
 },
});
