import { createSlice } from '@reduxjs/toolkit'

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

// (dispatchAction) of (Redux Toolkit) this we can access all (counterSlice dispatchAction) alternative of (useReducer)
export const counterActions = counterSlice.actions

export default counterSlice
