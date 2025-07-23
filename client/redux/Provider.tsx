"use client"

import type React from "react"

import { Provider } from "react-redux"
import { makestore, persistor } from "./store"
import { PersistGate } from "redux-persist/integration/react";



export default function Providers({ children }: { children: React.ReactNode }) {
  return (
  <Provider store={makestore()}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
  )
}

