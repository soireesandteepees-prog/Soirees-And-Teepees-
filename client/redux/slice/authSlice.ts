import { createSlice, type PayloadAction } from "@reduxjs/toolkit"


const initialState = {
    isAuthenticated: false
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload
    },
    logout: (state) => {
        state.isAuthenticated = false
    }
}})

export const {
  setIsAuthenticated,
  logout
} = authSlice.actions

export default authSlice.reducer

