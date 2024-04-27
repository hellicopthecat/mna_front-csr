import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  clickNav: false,
};
const navSlice = createSlice({
  name: "NavSlice",
  initialState,
  reducers: {
    activeNav: (state) => {
      state.clickNav = true;
    },
    nonActiveNav: (state) => {
      state.clickNav = false;
    },
  },
});

export const {activeNav, nonActiveNav} = navSlice.actions;
export default navSlice.reducer;
