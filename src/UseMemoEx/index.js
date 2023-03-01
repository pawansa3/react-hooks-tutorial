import { useMemo, useState } from "react";

const UseMemoEx = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  // Difference between useCallback and useMemo is that
  // useCallback - caches the callback function
  // useMemo - caches the callback function result

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000) {
      i++;
    }
    // this will also delay UI update of second counter
    // so we need to tell react not to calculate
    // counterONe is odd/even when counterTwo has changed
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <h3>UseMemo Example</h3>

      <button onClick={incrementOne}>counterOne - {counterOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span>

      <button onClick={incrementTwo}>counterTwo - {counterTwo}</button>
    </div>
  );
};

export default UseMemoEx;
