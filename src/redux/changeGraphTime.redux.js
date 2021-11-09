import { createSlice } from "@reduxjs/toolkit";

export const changeGraphTimeSlice = createSlice({
 name: "selectedTime",
 initialState: {
  time: 3600,
 },
 reducers: {
  changeTime: (state, action) => {
   state.time = action.payload;
  },
 },
});

// Action creators are generated for each case reducer function
export const { changeTime } = changeGraphTimeSlice.actions;

export default changeGraphTimeSlice.reducer;
