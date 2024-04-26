import {createSlice} from "@reduxjs/toolkit";
import {THEME} from "../libs/constants";
const initialState = {
  theme: Boolean(localStorage.getItem(THEME)),
};
const themeSlice = createSlice({
  name: "themeType",
  initialState,
  reducers: {
    setLight: (state) => {
      localStorage.removeItem(THEME);
      state.theme = Boolean(localStorage.getItem(THEME));
    },
    setDark: (state) => {
      localStorage.setItem(THEME, "ON");
      state.theme = Boolean(localStorage.getItem(THEME));
    },
  },
});
export const {setDark, setLight} = themeSlice.actions;
export default themeSlice.reducer;
