"use client"

import type React from "react"

import { Provider } from "react-redux"
import { makestore } from "./store"

export default function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={makestore()}>{children}</Provider>
}

