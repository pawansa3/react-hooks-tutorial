import { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

const CustomHookEx = () => {
  const [count, setCount] = useState(0);
  useDocumentTitle(count);

  return (
    <div>
      <h3> Custom Hook example </h3>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count 1 - {count}
      </button>
    </div>
  );
};

export default CustomHookEx;
