import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #f44336;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`; //applied the style to the button using styled componennt
const Style = () => {
  return (
    <div>
      <Button> Click me</Button>
    </div>
  );
};
export default Style;
