import { configureStore } from "@reduxjs/toolkit";

import { filmReducer } from "./Films/slice";
import onAddFavourite from "./Films/onAddFavourite";

import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persisConfig = {
  key: "root",
  storage,
};

export const store = configureStore({
  reducer: { 
    films: filmReducer, 
    favouriteId: persistReducer(persisConfig, onAddFavourite)
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});



export const persistor = persistStore(store);
