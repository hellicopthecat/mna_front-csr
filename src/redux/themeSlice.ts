import {createSlice} from "@reduxjs/toolkit";
const initialState = {
  theme: true,
};
const themeSlice = createSlice({
  name: "themeType",
  initialState,
  reducers: {
    setLight: (state) => {
      state.theme = true;
    },
    setDark: (state) => {
      state.theme = false;
    },
  },
});
export const {setDark, setLight} = themeSlice.actions;
export default themeSlice.reducer;
