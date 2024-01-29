import React, { memo, FC } from "react";

interface FunctionalComponentProps {
  prop1: string;
  prop2: string;
}

// Memorizing FunctionalComponent for performance optimization
const FunctionalComponent: FC<FunctionalComponentProps> = memo(
  ({ prop1, prop2 }) => {
    console.log("Rendering FunctionalComponent");
    return (
      <div>
        <p>{prop1}</p>
        <p>{prop2}</p>
      </div>
    );
  }
);

export default FunctionalComponent;
