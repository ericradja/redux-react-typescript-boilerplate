import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders button submit task", () => {
  render(<App />);
  const btnElement = screen.getByText(/Submit/);
  expect(btnElement).toBeInTheDocument();
});
