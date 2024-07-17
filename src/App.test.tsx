import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders welcome message", () => {
  render(<App />);
  const subtitle = screen.getByText("Test your knowledge");
  expect(subtitle).toBeInTheDocument();
});
