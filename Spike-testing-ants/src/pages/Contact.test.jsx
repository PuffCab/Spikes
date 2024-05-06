import { expect, test, vi } from "vitest";
import Contact from "./Contact";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

test("renders header on Contact component", () => {
  render(<Contact />);

  const headerElement = screen.getByRole("heading");

  expect(headerElement).toBeInTheDocument();
});

test("renders two inputs with placeholdervalue name and email", () => {
  render(<Contact />);

  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");

  expect(nameInput, emailInput).toBeInTheDocument();
});

test("renders a button element", () => {
  render(<Contact />);

  const button = screen.getByTestId("test-button");

  expect(button).toBeInTheDocument();
});

test("span element is initially not vissible", () => {
  render(<Contact />);

  const span = screen.getByTestId("test-span");
  //   const span2 = screen.queryByTestId("test-span");
  //   console.log("span2 :>> ", span2);
  expect(span).not.toBeVisible();
  //   expect(span2).toBeNull();
});

test("inputs should be intially empty", () => {
  render(<Contact />);

  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");

  expect(nameInput.value).toBe("");
  expect(emailInput.value).toBe("");
});

test("inputs should display what the user types  as a controlled input", () => {
  render(<Contact />);

  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");

  const nameInputValue = "Tom";
  const emailInputValue = "tom@email.com";

  //Reproduce an event

  fireEvent.change(nameInput, { target: { value: nameInputValue } });
  fireEvent.change(emailInput, { target: { value: emailInputValue } });

  expect(nameInput.value).toBe(nameInputValue);
  expect(emailInput.value).toBe(emailInputValue);
});

test("span should display name and email after user clicks in button", async () => {
  render(<Contact />);

  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const button = screen.getByTestId("test-button");
  const span = screen.getByTestId("test-span");

  const nameInputValue = "Tom";
  const emailInputValue = "tom@email.com";

  //Reproduce  events

  fireEvent.change(nameInput, { target: { value: nameInputValue } });
  fireEvent.change(emailInput, { target: { value: emailInputValue } });
  fireEvent.click(button);

  //   expect(span).toBeVisible();
  //   expect(span).toHaveTextContent(
  //     `Thank you ${nameInputValue}, we will send an email to ${emailInputValue}`
  //       );

  //? ASYNC Assert

  await waitFor(
    () => {
      expect(span).toBeVisible();
      expect(span).toHaveTextContent(
        `Thank you ${nameInputValue}, we will send an email to ${emailInputValue}`
      );
    },
    { timeout: 2000 }
  );
});

test("Contact  snapshot", () => {
  const { container } = render(<Contact />);
  console.log("container :>> ", container);
  expect(container).toMatchSnapshot();
});

test("renders userName", async () => {
  render(<Contact />);

  const userName = await screen.findByText(/Bret/i);
  expect(userName).toBeInTheDocument();
});

test("test endpoint returns userName", async () => {
  //before setting the Enviroment (render())
  const mockedResponse = {
    id: 1,
    username: "Bret",
  };

  vi.spyOn(window, "fetch").mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => Promise.resolve(mockedResponse),
    });
  });
  render(<Contact />);

  const userName = await screen.findByText(/Bret/i);
  console.log("userName in test :>> ", userName);
  expect(userName).toBeInTheDocument();
});
