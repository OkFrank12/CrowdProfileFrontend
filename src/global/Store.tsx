import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PURGE,
  REGISTER,
  REHYDRATE,
  PERSIST,
  persistReducer,
} from "redux-persist";
import reducer from "./GlobalState";
import storage from "redux-persist/lib/storage";

const storageConfigure = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(storageConfigure, reducer);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PURGE, REHYDRATE, REGISTER, PERSIST],
      },
    }),
});
