import { createStore } from 'redux'
import { createSlice } from '@reduxjs/toolkit'

// Initial State
const initialState = { value: 0, showCounter: true }

// (createSlice) this is like (Reducer)
createSlice({
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

// !(Reducer) for managing (states)
const counterReducer = (state = initialState, action) => {
  // !(Switch Statement) for managing (Dispatch)
  switch (action.type) {
    case 'incremented':
      return { value: state.value + 1, showCounter: state.showCounter }
    case 'increase':
      return {
        value: state.value + action.counter,
        showCounter: state.showCounter
      }
    case 'decremented':
      return { value: state.value - 1, showCounter: state.showCounter }
    case 'toggle':
      return { showCounter: !state.showCounter, value: state.value }
    default:
      return state
  }
}

// !(createStore) to manage (Reducer) using (Redux)
const store = createStore(counterReducer)

export default store
