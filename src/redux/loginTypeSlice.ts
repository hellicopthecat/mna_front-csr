import {createSlice} from "@reduxjs/toolkit";

export const loginTypeSlice = createSlice({
  name: "loginType",
  initialState: {
    isLoginSelect: true,
  },
  reducers: {
    setTrue: (state) => {
      state.isLoginSelect = true;
    },
    setfalse: (state) => {
      state.isLoginSelect = false;
    },
  },
});

export const {setTrue, setfalse} = loginTypeSlice.actions;
export default loginTypeSlice.reducer;
