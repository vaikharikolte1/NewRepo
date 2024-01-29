import React, { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";

const ComponentA: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    if (counter < 5) {
      setCounter((prevCounter) => prevCounter + 1);
    } else {
      // Simulate an error to trigger the ErrorBoundary
      throw new Error("Counter exceeded the limit!");
    }
  };

  return (
    <ErrorBoundary>
      <div>
        <h2>Component A</h2>
        <p>Counter: {counter}</p>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    </ErrorBoundary>
  );
};

export default ComponentA;
