import { configureStore, combineReducers } from "@reduxjs/toolkit";
import Preferiti from "../reducers/Preferiti";

const unifiedReducer = combineReducers({
  preferiti: Preferiti,
});

const store = configureStore({
  reducer: unifiedReducer,
});

export default store;
