import React, { useMemo, useState, FC } from "react";

// Defining ParentComponent as a functional component
const ParentComponent: FC = () => {
  // State: count
  const [count, setCount] = useState<number>(0);

  // Using useMemo for expensiveValue to memorize the result of the computation
  const expensiveValue = useMemo(() => {
    console.log("Calculating expensiveValue...");
    return count * 2;
  }, [count]);
  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment Count
      </button>
    </div>
  );
};

export default ParentComponent;
