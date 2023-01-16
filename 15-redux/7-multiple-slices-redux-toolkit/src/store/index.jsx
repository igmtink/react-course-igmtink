import { createSlice, configureStore } from '@reduxjs/toolkit'

// Initial Counter State
const initialCounterState = { value: 0, showCounter: true }

// (createSlice) this is like (Reducer)
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  // (state) argument on every (reducers method) is the (initialState)
  reducers: {
    incremented(state) {
      state.value++
    },
    // If we have an extra (Data) we use (action)
    increase(state, action) {
      state.value = state.value + action.payload
    },
    decremented(state) {
      state.value--
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    }
  }
})

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

// !(configureStore) to manage (createSlice) using (Redux Toolkit) which combines all those (Reducers) methods
const store = configureStore({
  // !Multiple Store for Multiple Slices
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
})

// (dispatchAction) of (Redux Toolkit) this we can access all (counterSlice dispatchAction) alternative of (useReducer)
export const counterActions = counterSlice.actions
export const authActions = authSlice.actions

export default store
