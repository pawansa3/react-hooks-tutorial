import { memo } from "react";

const Button = (props) => {
  console.log("Rendering button", props.children);
  return <button onClick={() => props.handleClick()}>{props.children}</button>;
};

export default memo(Button);
