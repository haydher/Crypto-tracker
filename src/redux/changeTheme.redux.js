import { createSlice } from "@reduxjs/toolkit";

export const changeThemeSlice = createSlice({
 name: "theme",
 initialState: {
  currTheme: localStorage.getItem("currTheme") !== null ? localStorage.getItem("currTheme") : "dark",
 },
 reducers: {
  changeThemeState: (state) => {
   if (state.currTheme === "light") state.currTheme = "dark";
   else state.currTheme = "light";

   localStorage.setItem("currTheme", state.currTheme);
  },
 },
});

// Action creators are generated for each case reducer function
export const { changeThemeState } = changeThemeSlice.actions;

export default changeThemeSlice.reducer;
