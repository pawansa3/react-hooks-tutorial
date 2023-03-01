import { useContext } from "react";
import { CountContext } from "./hocOfUseContextUseReducer";

const UseReducerWithUseContext = () => {
  const countContext = useContext(CountContext);

  return (
    <div className="App">
      <h1>UseReducer with UseContext example</h1>
      <h3>{countContext.countState}</h3>
      <button onClick={() => countContext.dispatchCount("INCREMENT")}>
        Increase
      </button>
      <button onClick={() => countContext.dispatchCount("DECREMENT")}>
        Decrease
      </button>
      <button onClick={() => countContext.dispatchCount("RESET")}>Reset</button>
    </div>
  );
};

export default UseReducerWithUseContext;
