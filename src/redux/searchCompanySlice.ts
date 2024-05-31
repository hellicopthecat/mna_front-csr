import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  searchCompanyName: "",
  searchMode: false,
};
export const searchCompanySlice = createSlice({
  name: "searchCompany",
  initialState,
  reducers: {
    insertCompanyName: (state, {payload}: {payload: string}) => {
      state.searchCompanyName = payload + "";
    },
    setSearchMode: (state) => {
      state.searchMode = !state.searchMode;
    },
  },
});
export const {insertCompanyName, setSearchMode} = searchCompanySlice.actions;
export default searchCompanySlice.reducer;
