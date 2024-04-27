import {configureStore} from "@reduxjs/toolkit";
import tokenSliceReducer from "./redux/tokenSlice";
import loginTypeSliceReducer from "./redux/loginTypeSlice";
import themeTypeSliceReducer from "./redux/themeSlice";
import activeNavSliceReducer from "./redux/navSlice";

const store = configureStore({
  reducer: {
    token: tokenSliceReducer,
    isSelect: loginTypeSliceReducer,
    theme: themeTypeSliceReducer,
    activeNav: activeNavSliceReducer,
  },
});

//type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//state
export default store;
