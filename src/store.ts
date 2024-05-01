import {configureStore} from "@reduxjs/toolkit";
import tokenSlice from "./redux/tokenSlice";
import loginTypeSlice from "./redux/loginTypeSlice";
import themeTypeSlice from "./redux/themeSlice";
import activeNavSlice from "./redux/navSlice";
import companyStateSlice from "./redux/companyStateSlice";
import inNoutNavStateSlice from "./redux/inNoutNavStateSlice";

const store = configureStore({
  reducer: {
    token: tokenSlice,
    isLoginSelect: loginTypeSlice,
    theme: themeTypeSlice,
    activeNav: activeNavSlice,
    companyState: companyStateSlice,
    inNoutNav: inNoutNavStateSlice,
  },
});

//type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//state
export default store;
