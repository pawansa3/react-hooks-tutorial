import { createContext, useContext, useReducer } from "react";
import UseReducerWithUseContext from ".";

export const CountContext = createContext(0);

const HocOfUseContextUseReducer = () => {
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
    <CountContext.Provider
      value={{ countState: count, dispatchCount: dispatch }}
    >
      <UseReducerWithUseContext />
    </CountContext.Provider>
  );
};

export default HocOfUseContextUseReducer;
