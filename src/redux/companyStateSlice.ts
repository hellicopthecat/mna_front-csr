import {createSlice} from "@reduxjs/toolkit";
import {COMPANY_NAME} from "../libs/constants";

const initialState = {
  companyName: sessionStorage.getItem(COMPANY_NAME),
};
const companyStateSlice = createSlice({
  name: "CompanyStateSlice",
  initialState,
  reducers: {
    saveCompanyName: (state, {payload}) => {
      sessionStorage.setItem(COMPANY_NAME, payload);
      state.companyName = sessionStorage.getItem(COMPANY_NAME);
    },
  },
});

export const {saveCompanyName} = companyStateSlice.actions;
export default companyStateSlice.reducer;
