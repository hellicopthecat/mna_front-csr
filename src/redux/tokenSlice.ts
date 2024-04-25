import {createSlice} from "@reduxjs/toolkit";
import {TOKEN} from "../libs/constants";

export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: Boolean(sessionStorage.getItem(TOKEN)),
  },
  reducers: {
    setToken: (state, {payload}) => {
      sessionStorage.setItem(TOKEN, payload + "");
      state.token = true;
    },
    removeToken: (state) => {
      sessionStorage.removeItem(TOKEN);
      state.token = false;
    },
  },
});

export const {setToken, removeToken} = tokenSlice.actions;

export default tokenSlice.reducer;
