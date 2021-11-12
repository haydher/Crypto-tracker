import { createSlice } from "@reduxjs/toolkit";

export const trackStaredCoinsSlice = createSlice({
 name: "staredCoin",
 initialState: {
  staredCoinData:
   localStorage.getItem("staredCoinData") !== null && localStorage.getItem("staredCoinData").length > 0
    ? localStorage.getItem("staredCoinData").split(",")
    : [],
 },
 reducers: {
  changeStaredCoin: (state, action) => {
   if (state.staredCoinData.includes(action.payload)) {
    state.staredCoinData = state.staredCoinData.filter((item) => item !== action.payload);
    localStorage.setItem("staredCoinData", state.staredCoinData);
    return;
   }
   state.staredCoinData.push(action.payload);
   localStorage.setItem("staredCoinData", [state.staredCoinData]);
  },
 },
});

// Action creators are generated for each case reducer function
export const { changeStaredCoin } = trackStaredCoinsSlice.actions;

export default trackStaredCoinsSlice.reducer;
