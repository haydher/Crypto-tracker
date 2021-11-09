import { createSlice } from "@reduxjs/toolkit";

export const changeCoinIdSlice = createSlice({
 name: "coinId",
 initialState: {
  coinId: "bitcoin",
 },
 reducers: {
  changeCoinId: (state, action) => {
   state.coinId = action.payload;
  },
 },
});

// Action creators are generated for each case reducer function
export const { changeCoinId } = changeCoinIdSlice.actions;

export default changeCoinIdSlice.reducer;
