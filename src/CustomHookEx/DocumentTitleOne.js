import { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

const CustomHookEx2 = () => {
  const [count, setCount] = useState(0);
  useDocumentTitle(count);

  return (
    <div>
      <h3> Custom Hook 2 example </h3>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count 2 - {count}
      </button>
    </div>
  );
};

export default CustomHookEx2;
