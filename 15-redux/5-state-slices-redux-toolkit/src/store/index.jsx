import { createSlice, configureStore } from '@reduxjs/toolkit'

// Initial State
const initialState = { value: 0, showCounter: true }

// (createSlice) this is like (Reducer)
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // (state) argument on every (reducers method) is the (initialState)
  reducers: {
    incremented(state) {
      state.value++
    },
    // If we have an extra (Data) we use (action)
    increase(state, action) {
      state.value = state.value + action.increaseBy
    },
    decremented(state) {
      state.value--
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    }
  }
})

// !(configureStore) to manage (createSlice) using (Redux Toolkit) which combines all those (Reducers) methods
const store = configureStore({ reducer: counterSlice.reducer })

export default store
