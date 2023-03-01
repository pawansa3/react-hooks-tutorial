import React, { useState } from "react";

const UseStateEx = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>UseState example</h1>
      <h3>{count}</h3>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increase
      </button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        Decrease
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default UseStateEx;
