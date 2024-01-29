import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MyComponent from "./MyComponent";

test("renders the component with data", () => {
  render(<MyComponent />);
  expect(screen.getByText("Welcome to the Testing")).toBeInTheDocument();
  expect(screen.getByText("This is my Component")).toBeInTheDocument();
});
