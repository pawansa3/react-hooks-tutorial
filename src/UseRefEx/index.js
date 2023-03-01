import { useEffect, useRef } from "react";

const UseRefEx = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // focus the input element
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h3>UseRef Example</h3>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default UseRefEx;
