// import { render, screen } from "@testing-library/react";
// import { describe, expect, it, test } from "vitest";
// import App from "../src/App";

// test("should render Test + React on home screen", () => {
//   // ENVIROMENT
//   render(<App />);

//   // ACT
//   const headerText = screen.getByText("Vite + React");

//   //ASSERT
//   expect(headerText).toBeInTheDocument();
// });

// describe("testing App component", () => {
//   it("should cotain two a tags", () => {
//     render(<App />);

//     const aTags = screen.queryAllByRole("link");
//     // console.log("aTags :>> ", aTags);

//     expect(aTags.length).toBe(2);
//   });

//   it("should render a button with count value 0", () => {
//     render(<App />);

//     const button = screen.getByTestId("button-test");
//     const buttonValue = 0;

//     const buttonText = `count is ${buttonValue}`;

//     expect(button).toHaveTextContent(buttonText);
//   });
// });

// function sum(a, b) {
//   return a + b;
// }

// test("sum function should return 6", () => {
//   expect(sum(4, 2)).toEqual(6);
// });
