import { configureStore } from '@reduxjs/toolkit'

import counterSlice from './counter-slice'
import authSlice from './auth-slice'

// !(configureStore) to manage (createSlice) using (Redux Toolkit) which combines all those (Reducers) methods
const store = configureStore({
  // !Multiple Store for Multiple Slices
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
})

export default store
