import {createSlice} from "@reduxjs/toolkit";
import {COMPANY_ID, COMPANY_NAME} from "../libs/constants";

const initialState = {
  companyName: sessionStorage.getItem(COMPANY_NAME),
  companyId: sessionStorage.getItem(COMPANY_ID),
};
const companyStateSlice = createSlice({
  name: "CompanyStateSlice",
  initialState,
  reducers: {
    saveCompanyName: (state, {payload: {id, name}}) => {
      sessionStorage.setItem(COMPANY_ID, id);
      sessionStorage.setItem(COMPANY_NAME, name);
      state.companyName = sessionStorage.getItem(COMPANY_NAME);
      state.companyId = sessionStorage.getItem(COMPANY_ID);
    },
  },
});

export const {saveCompanyName} = companyStateSlice.actions;
export default companyStateSlice.reducer;
