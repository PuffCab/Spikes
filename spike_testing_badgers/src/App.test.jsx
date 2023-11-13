import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";

test("Should render React + Vite text on the screen", () => {
  //Arrange
  render(<App />);

  //ACT
  const headerText = screen.getByRole("heading");
  console.log("headerText :>> ", headerText);

  // Assertion
  expect(headerText.innerHTML).toBe("Vite + React");
});

test("should 2 img elements be displayed", () => {
  render(<App />);

  const imgElements = screen.getAllByRole("img");

  expect(imgElements.length).toBe(2);
});
test("should contain a p tag", () => {
  render(<App />);

  const pTag = screen.getByTestId("p-tag");
  const pWithCode = screen.getByTitle("p-with-code");
  expect(pTag).toBeInTheDocument();
  expect(pWithCode).toBeInTheDocument();
});
