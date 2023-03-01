import { memo } from "react";

const Title = () => {
  console.log("Rendering title");
  return <h3>UseCallBack Hook Example</h3>;
};

export default memo(Title);
