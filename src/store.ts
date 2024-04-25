import {configureStore} from "@reduxjs/toolkit";
import tokenSliceReducer from "./redux/tokenSlice";
import loginTypeSliceReducer from "./redux/loginTypeSlice";

const store = configureStore({
  reducer: {
    token: tokenSliceReducer,
    isSelect: loginTypeSliceReducer,
  },
});

//type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//state
export default store;
