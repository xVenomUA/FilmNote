import { configureStore } from "@reduxjs/toolkit";
import { filmReducer } from "./Films/slice";


export const store = configureStore({
  reducer: {
    films: filmReducer,
  },
});
