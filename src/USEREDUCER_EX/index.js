import React, { useReducer } from "react";

const UseReducerEx = () => {
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

  return (
    <div className="App">
      <h1>UseReducer example</h1>
      <h3>{count}</h3>
      <button onClick={() => dispatch("INCREMENT")}>Increase</button>
      <button onClick={() => dispatch("DECREMENT")}>Decrease</button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
    </div>
  );
};

export default UseReducerEx;
