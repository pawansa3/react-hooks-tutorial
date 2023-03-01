import React from "react";
import CustomHookEx from "./CustomHookEx";
import CustomHookEx2 from "./CustomHookEx/DocumentTitleOne";
import DataFetchingWithUseState from "./DataFetchingWithUseStateUseReducer";
import DataFetchingWithUseReducer from "./DataFetchingWithUseStateUseReducer/index2";

import "./styles.css";
import UseCallbackEx from "./UseCallbackEx";
import UseMemoEx from "./UseMemoEx";
import HocOfUseContextUseReducer from "./UseReducerWithUseContext/hocOfUseContextUseReducer";
import UseReducerEx from "./USEREDUCER_EX";
import UseReducerEx2 from "./USEREDUCER_EX/index2";
import UseReducerEx3 from "./USEREDUCER_EX/index3";
import UseRefEx from "./UseRefEx";
import ClassTimer from "./UseRefEx/classTimer";
import HookTimer from "./UseRefEx/HookTimer";
import UseStateEx from "./UseState_EX";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      {/* <UseStateEx />
      <UseReducerEx />
      <UseReducerEx2 />
      <UseReducerEx3 />

      <HocOfUseContextUseReducer /> */}

      <DataFetchingWithUseState />
      <DataFetchingWithUseReducer />

      <UseCallbackEx />

      <UseMemoEx />

      <UseRefEx />

      <ClassTimer />
      <HookTimer />

      <CustomHookEx />
      <CustomHookEx2 />
    </div>
  );
}
