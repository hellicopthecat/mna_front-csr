import {createSlice} from "@reduxjs/toolkit";

export const loginTypeSlice = createSlice({
  name: "loginType",
  initialState: {
    isSelect: true,
  },
  reducers: {
    setTrue: (state) => {
      state.isSelect = true;
    },
    setfalse: (state) => {
      state.isSelect = false;
    },
  },
});

export const {setTrue, setfalse} = loginTypeSlice.actions;
export default loginTypeSlice.reducer;
