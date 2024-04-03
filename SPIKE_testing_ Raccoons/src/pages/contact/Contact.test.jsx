import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect, test } from "vitest";
import Contact from "./Contact";

test("header element renders", () => {
  render(<Contact />);

  const headerElement = screen.getByRole("heading");

  expect(headerElement).toBeInTheDocument();
  expect(headerElement.innerHTML).toBe("Contact");
});
test("header contains text Contact", () => {
  render(<Contact />);

  const headerElement = screen.getByRole("heading");

  expect(headerElement).toBeInTheDocument();
  expect(headerElement.innerHTML).toBe("Contact");
});
test("renders two imputs with placerholder value name and email", () => {
  render(<Contact />);

  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");

  expect(nameInput, emailInput).toBeInTheDocument();
});
test("renders a button element", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});
test("span shouldn't be initially visible", () => {
  render(<Contact />);

  //if we want to text the non existance of an element
  // const span = screen.queryByTestId("span-text");
  // expect(span).toBeNull();

  const span = screen.getByTestId("span-text");

  expect(span).not.toBeVisible();
});
test("inputs  should be initially empty", () => {
  render(<Contact />);

  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");

  expect(nameInput.value).toBe("");
  expect(emailInput.value).toBe("");
});
test("inputs  should display a value when user types ", () => {
  render(<Contact />);

  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const nameInputText = "Faruk";
  const emailInputText = "faruk@email.com";

  //Fire event
  fireEvent.change(nameInput, { target: { value: nameInputText } });
  fireEvent.change(emailInput, { target: { value: emailInputText } });

  expect(nameInput.value).toBe(nameInputText);
  expect(emailInput.value).toBe(emailInputText);
});

test("span  should display user name and email after button click ", async () => {
  render(<Contact />);

  const span = screen.getByTestId("span-text");
  const button = screen.getByRole("button");
  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const nameInputText = "Faruk";
  const emailInputText = "faruk@email.com";

  //Fire event
  fireEvent.change(nameInput, { target: { value: nameInputText } });
  fireEvent.change(emailInput, { target: { value: emailInputText } });
  fireEvent.click(button);

  await waitFor(
    () => {
      expect(span).toBeVisible();
      expect(span).toHaveTextContent(
        `Hi ${nameInputText}, message sent to ${emailInputText}`
      );
    },
    { timeout: 2000 }
  );
});

test("Contact component is the same", () => {
  const { container } = render(<Contact />);
  // console.log("element :>> ", element);
  expect(container).toMatchSnapshot();
});
