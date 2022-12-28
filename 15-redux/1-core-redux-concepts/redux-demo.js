const redux = require("redux");

// !Reducer
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// !(Redux) store for (Reducer)
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  // !Latest state
  const latestState = store.getState();
  console.log(latestState);
};

// !To call (counterSubscriber) function everytime the data is changed
store.subscribe(counterSubscriber);

// !(Reducer) dispatch action
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
