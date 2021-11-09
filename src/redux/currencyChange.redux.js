import { createSlice } from "@reduxjs/toolkit";

export const changeCurrencySlice = createSlice({
 name: "currCurrency",
 initialState: {
  currency: "USD",
 },
 reducers: {
  changeCurrency: (state, action) => {
   state.currency = action.payload;
  },
 },
});

// Action creators are generated for each case reducer function
export const { changeCurrency } = changeCurrencySlice.actions;

export default changeCurrencySlice.reducer;
