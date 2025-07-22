import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import BookingReducer from './slice/BookingSlice'
import AuthReducer from './slice/authSlice'

export const makestore = () =>
  configureStore({
    reducer: {
      booking: BookingReducer,
      auth: AuthReducer
    },
    // devTools: process.env.NODE_ENV !== "production",
  });

  export type AppStore = ReturnType<typeof makestore>;
  export type AppState = ReturnType<AppStore['getState']>;
  export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makestore);