import { memo } from "react";

const Count = (props) => {
  console.log("Rendering text", props.text);
  return (
    <div>
      <p>
        {props.text} : {props.count}{" "}
      </p>
    </div>
  );
};

export default memo(Count);
