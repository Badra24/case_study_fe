import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import auto_Reducer from "./auth/autoRender";

const rooteReducer = combineReducers({
  autoRender: auto_Reducer,
});

const store = configureStore({
  reducer: rooteReducer,
  middleware: [thunk],
});

export default store;
