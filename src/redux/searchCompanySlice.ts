import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  searchCompanyName: "",
};
export const searchCompanySlice = createSlice({
  name: "searchCompany",
  initialState,
  reducers: {
    insertCompanyName: (state, {payload}: {payload: string}) => {
      state.searchCompanyName = payload + "";
    },
  },
});
export const {insertCompanyName} = searchCompanySlice.actions;
export default searchCompanySlice.reducer;
