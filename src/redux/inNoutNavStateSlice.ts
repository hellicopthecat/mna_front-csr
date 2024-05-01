import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  inNoutMode: 1,
};
const inNoutNavState = createSlice({
  name: "InNoutState",
  initialState,
  reducers: {
    setInNoutNavMode: (state, {payload}) => {
      state.inNoutMode = payload;
    },
  },
});

export const {setInNoutNavMode} = inNoutNavState.actions;
export default inNoutNavState.reducer;
