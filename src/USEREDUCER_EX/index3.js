import React, { useReducer } from "react";

const UseReducerEx3 = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      case "RESET":
        return initialState;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>UseReducer example 3</h1>
      <h3>Count 1: {count}</h3>
      <button onClick={() => dispatch("INCREMENT")}>Increase</button>
      <button onClick={() => dispatch("DECREMENT")}>Decrease</button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
      <h3>Count 2: {count2}</h3>
      <button onClick={() => dispatch2("INCREMENT")}>Increase</button>
      <button onClick={() => dispatch2("DECREMENT")}>Decrease</button>
      <button onClick={() => dispatch2("RESET")}>Reset</button>
    </div>
  );
};

export default UseReducerEx3;
