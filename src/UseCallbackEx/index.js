import { useCallback, useState } from "react";
import Button from "./button";
import Title from "./title";
import Count from "./count";

const UseCallbackEx = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(5000);

  const increaseAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const increseSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={increaseAge}>Increment age</Button>

      <Count text="Salary" count={salary} />
      <Button handleClick={increseSalary}>Increment salary</Button>
    </div>
  );
};

export default UseCallbackEx;
