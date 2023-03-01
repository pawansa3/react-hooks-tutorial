import { useReducer } from "react";

const UseReducerEx2 = () => {
  const initialState = {
    firstCounter: 0,
    secondCounter: 10
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, firstCounter: state.firstCounter + action.value };
      case "DECREMENT":
        return { ...state, firstCounter: state.firstCounter - action.value };
      case "INCREMENT2":
        return { ...state, secondCounter: state.secondCounter + action.value };
      case "DECREMENT2":
        return { ...state, secondCounter: state.secondCounter - action.value };

      case "RESET":
        return initialState;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>UseReducer example 2</h1>
      <h3>first Counter {count.firstCounter}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT", value: 1 })}>
        Increase
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", value: 1 })}>
        Decrease
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT", value: 5 })}>
        Increase by 5
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", value: 5 })}>
        Decrease by 5
      </button>

      <h3>second Counter {count.secondCounter}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT2", value: 1 })}>
        Increase2
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT2", value: 1 })}>
        Decrease2
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default UseReducerEx2;
