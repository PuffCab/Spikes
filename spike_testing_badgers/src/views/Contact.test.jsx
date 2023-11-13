import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect, test } from "vitest";
import Contact from "./Contact";

test("Should Contact componet render a Header", () => {
  render(<Contact />);

  const header = screen.getByRole("heading");

  expect(header.innerHTML).toContain("Contact");
});

test("should render an input for email", () => {
  render(<Contact />);

  const inputEmail = screen.getByPlaceholderText("email");

  expect(inputEmail).toBeInTheDocument();
});
test("should render an input for name", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("name");

  expect(inputName).toBeInTheDocument();
});

test("should render a button element", () => {
  render(<Contact />);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
test("should span element not be initially visible", () => {
  render(<Contact />);

  const span = screen.getByTestId("span");
  expect(span).not.toBeVisible();
});
test("should inputs contain a value when user types", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("name");
  const inputEmail = screen.getByPlaceholderText("email");

  //Check test passing before adding onChange event in component. Not happening if input event is a different one
  fireEvent.change(inputName, { target: { value: "Tom" } });
  fireEvent.change(inputEmail, { target: { value: "tom@gmail.com" } });
  console.log("inputName.value :>> ", inputName.value);
  expect(inputName.value).toBe("Tom");
  expect(inputEmail.value).toBe("tom@gmail.com");
});

test("should span be visible and contain name and email after clicking send button", async () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("name");
  const inputEmail = screen.getByPlaceholderText("email");

  const button = screen.getByRole("button");
  const span = screen.getByTestId("span");

  const nameInputValue = "Tom";
  const emailInputValue = "tom@gmail.com";
  fireEvent.change(inputName, { target: { value: nameInputValue } });
  fireEvent.change(inputEmail, { target: { value: emailInputValue } });

  fireEvent.click(button);

  await waitFor(
    () => {
      expect(span).toBeVisible();
      expect(span.innerHTML).toBe(
        `${nameInputValue}, a message has been sent to ${emailInputValue}`
      );
    },
    { timeout: 2000 }
  ); //if setTimeOut() method has a time different than 1000, we should specify it in the options of waitFor
});
