import { createStore } from 'redux'

// !(Reducer) for managing (states)
const counterReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'incremented':
      return { value: state.value + 1 }
    case 'decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

// !(createStore) to manage (Reducer) using (Redux)
const store = createStore(counterReducer)

export default store
