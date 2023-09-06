import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./Login";

test("placeholder value username should render", () => {
  render(<Login />);
  const userInput = screen.getByPlaceholderText(/userName/i);
  expect(userInput).toBeInTheDocument();
});

test("placeholder value password  should render", () => {
  render(<Login />);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  expect(passwordInput).toBeInTheDocument();
});

test("button should render", () => {
  render(<Login />);
  const buttonInput = screen.getByRole("button");
  expect(buttonInput).toBeInTheDocument();
});

test("userName input should be empty", () => {
  render(<Login />);
  const userInput = screen.getByPlaceholderText(/userName/i);
  expect(userInput.value).toBe("");
});

test("password input should be empty", () => {
  render(<Login />);
  const userInput = screen.getByPlaceholderText(/password/i);
  expect(userInput.value).toBe("");
});

test("button should be disabled when there are no values in inputs", () => {
  render(<Login />);
  const buttonInput = screen.getByRole("button");
  expect(buttonInput).toBeDisabled();
});

test("error message should not be visible initially", () => {
  render(<Login />);
  const errorElement = screen.getByTestId("error");
  expect(errorElement).not.toBeVisible();
});

test("button should be enabled when BOTH inputs have values", () => {
  render(<Login />);
  const buttonInput = screen.getByRole("button");
  const userInput = screen.getByPlaceholderText(/userName/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);

  const testValue = "something random";

  fireEvent.change(userInput, {
    target: { value: testValue },
  });
  fireEvent.change(passwordInput, {
    target: { value: testValue },
  });

  expect(buttonInput).not.toBeDisabled();
});

test("button text should not be initially ...loading...", () => {
  render(<Login />);
  const buttonInput = screen.getByRole("button");

  expect(buttonInput).not.toHaveTextContent("...loading...");
});

test("button text should be ...loading... after clicking", () => {
  render(<Login />);
  const buttonInput = screen.getByRole("button");
  const userInput = screen.getByPlaceholderText(/userName/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);

  const testValue = "something random";

  fireEvent.change(userInput, {
    target: { value: testValue },
  });
  fireEvent.change(passwordInput, {
    target: { value: testValue },
  });

  fireEvent.click(buttonInput);

  expect(buttonInput).toHaveTextContent("...loading...");
});

test("button text should be login  after fetching", async () => {
  render(<Login />);
  const buttonInput = screen.getByRole("button");
  const userInput = screen.getByPlaceholderText(/userName/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);

  const testValue = "something random";

  fireEvent.change(userInput, {
    target: { value: testValue },
  });
  fireEvent.change(passwordInput, {
    target: { value: testValue },
  });

  fireEvent.click(buttonInput);

  await waitFor(() => expect(buttonInput).toHaveTextContent("login"));
});

test("user name shoulb be displayed  after fetching completed", async () => {
  render(<Login />);

  const mockedUser = {
    id: 1,
    name: "Phuoc",
  };

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockedUser),
    })
  );

  const buttonInput = screen.getByRole("button");
  const userInput = screen.getByPlaceholderText(/userName/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);

  const testValue = "something random";

  fireEvent.change(userInput, {
    target: { value: testValue },
  });
  fireEvent.change(passwordInput, {
    target: { value: testValue },
  });

  fireEvent.click(buttonInput);

  const fetchedUserName = await screen.findByText("Phuoc");
  // console.log("fetchedUserName :>> ", fetchedUserName);
  // const name = "Phuoc";

  expect(fetchedUserName).toBeInTheDocument();
});
