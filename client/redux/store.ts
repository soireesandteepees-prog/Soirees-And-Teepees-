import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import BookingReducer from './slice/BookingSlice'
import AuthReducer from './slice/authSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, AuthReducer);

export const makestore = () =>
  configureStore({
    reducer: {
      booking: BookingReducer,
      auth: persistedAuthReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // devTools: process.env.NODE_ENV !== "production",
  });

  export const persistor = persistStore(makestore());

  export type AppStore = ReturnType<typeof makestore>;
  export type AppState = ReturnType<AppStore['getState']>;
  export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makestore);