//REVIEW[epic=test, seq=1] 1- React , when creating app with CRA, it comes with React testing library, and a little example of a test.

import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  const linkElement = screen.getByText(/learn react/i); // "/.../i" is regExp to make it case insensitive
  //REVIEW[epic=test, seq=3] 3- We would use "sceen.getByTestId("myLink") .
  // const linkElement = screen.getByTestId("myLink");
  expect(linkElement).toBeInTheDocument();
});

//REVIEW[epic=test, seq=4] 4- RUN THE TEST : npm run test . Since we have the Extension, we can also run it in the code.

//REVIEW[epic=test, seq=6] 6- Create a new Test, by copying the previous one
test("renders 3 list items", () => {
  render(<App />);
  //REVIEW[epic=test, seq=7] 7-use.getAllByRole() because they are several

  const listItems = screen.getAllByRole("listitem");
  //REVIEW[epic=test, seq=8] 8- select method "toHaveLength(3)" to say there has to be 3
  // expect(listItems).toHaveLength(3);
  //REVIEW[epic=test, seq=9] 9- Other ways : expect(listItems.length).toBe(3)  . Look for more in https://jestjs.io/docs/expect
  expect(listItems.length).toBe(3);
  // expect(listItems.length).toEqual(3);
});

//REVIEW[epic=test, seq=11] 11- Create Test for testid
test("renders title", () => {
  render(<App />);
  const title = screen.getByTestId("myTestId");
  expect(title).toBeInTheDocument();
});

//REVIEW[epic=test, seq=12] 12 - Create Test for title
test("sum should be 12", () => {
  render(<App />);
  const sum = screen.getByTitle("sum");
  expect(sum.textContent).toBe("12");
});

//REVIEW[epic=test, seq=13] 13 - Mess a bit with the tests and see how they fail and the message.
//so also possibilities of WALLABY extension : messages, view test history, etc..
