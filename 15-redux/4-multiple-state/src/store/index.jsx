import { createStore } from 'redux'

// Initial State
const initialState = { value: 0, showCounter: true }

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
