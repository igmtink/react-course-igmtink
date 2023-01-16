import { createSlice } from '@reduxjs/toolkit'

const initialAuthState = { isAuthenticated: false }

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true
    },
    logout(state) {
      state.isAuthenticated = false
    }
  }
})

// (dispatchAction) of (Redux Toolkit) this we can access all (counterSlice dispatchAction) alternative of (useReducer)
export const authActions = authSlice.actions

export default authSlice
