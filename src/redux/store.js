import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

import { filmReducer } from "./Films/slice";
import { onFavourite } from "./Films/onAddFavourite";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { filterReducer } from "./Films/fliterSlice";

const persisConfig = {
  key: "root",
  storage,
};

export const store = configureStore({
  reducer: {
    favouriteId: persistReducer(persisConfig, onFavourite),
    films: persistReducer(persisConfig, filmReducer),
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
