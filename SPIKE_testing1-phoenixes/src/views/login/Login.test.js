//REVIEW[epic=login, seq=2] 15- create test file for login and write test

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./Login";

//+with AXIOS
//#region
// jest.mock("axios", () => ({
//     __esModule:true,
//   default: {
//     get: () => ({
//       data: { id: 1, name: "rul" },
//     }),
//   },
// }));
//#endregion

test("placeholder value userName from input should render", () => {
  //REVIEW[epic=login, seq=3] 16- Render the component that contains the element
  render(<Login />);
  //REVIEW[epic=login, seq=4] 17- Reach the DOM element, and find the placeHolder prop value
  const userInput = screen.getByPlaceholderText(/userName/i);
  //REVIEW[epic=login, seq=5] 18- Define what we EXPECT : that the element above is in the document
  expect(userInput).toBeInTheDocument();
});

//REVIEW[epic=login, seq=6] 19- Copy paste and readapt test for input password and Button

test("placeholder value password from input should render", () => {
  render(<Login />);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  expect(passwordInput).toBeInTheDocument();
});

test("button should render", () => {
  render(<Login />);
  //REVIEW[epic=login, seq=7] 20- For the button we use getByRole("button")
  const buttonInput = screen.getByRole("button");
  expect(buttonInput).toBeInTheDocument();
});

//REVIEW[epic=login, seq=8] 21- Run tests and all shoudl fail

//REVIEW[epic=login, seq=11] 25- Now we write test to tests inputs are empty. Run and fail them
test("username input should be empty", () => {
  render(<Login />);
  const userInput = screen.getByPlaceholderText(/userName/i);
  expect(userInput.value).toBe("");
});

test("password input should be empty", () => {
  render(<Login />);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  expect(passwordInput.value).toBe("");
});

//REVIEW[epic=login, seq=13] 27- Now inputs are empty, but button is clickable. It should not(imagine request)
//Create test to check if button is disabled when inputs are empty
test("button should be disabled", () => {
  render(<Login />);
  const buttonInput = screen.getByRole("button");
  expect(buttonInput).toBeDisabled();
});

//REVIEW[epic=login, seq=27] 41- Create Test to check we don't see the loader
test("button text should not be ...loading...", () => {
  render(<Login />);
  const buttonInput = screen.getByRole("button");
  expect(buttonInput).not.toHaveTextContent(/...loading.../i);
});

//REVIEW[epic=login, seq=16] 30- Create test to see that the error is invisible.Run it...
test("error message  should not be visible ", () => {
  render(<Login />);
  const errorElement = screen.getByTestId("error");
  expect(errorElement).not.toBeVisible();
});

//REVIEW[epic=login, seq=19] 33- Create test to check onChange: we type, we get a value
test("username input should change", () => {
  render(<Login />);
  const userInput = screen.getByPlaceholderText(/userName/i);
  const userInputValueTest = "anything";

  //REVIEW[epic=login, seq=20] 34- use FIREVENT like a caller for the event. and say the target.value
  fireEvent.change(userInput, { target: { value: userInputValueTest } });
  expect(userInput.value).toBe(userInputValueTest);
});

test("password input should change", () => {
  render(<Login />);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  const passwordInputValueTest = "anything";
  fireEvent.change(passwordInput, {
    target: { value: passwordInputValueTest },
  });
  expect(passwordInput.value).toBe(passwordInputValueTest);
});

//REVIEW[epic=login, seq=22] 36- Create Test button is not disabled if inputs have value.
test("button should be enabled when inputs have values", () => {
  render(<Login />);
  const buttonInput = screen.getByRole("button");
  const userInput = screen.getByPlaceholderText(/userName/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);

  const testValue = "abc";

  fireEvent.change(userInput, {
    target: { value: testValue },
  });
  fireEvent.change(passwordInput, {
    target: { value: testValue },
  });

  expect(buttonInput).not.toBeDisabled();
});

//REVIEW[epic=login, seq=28] 42- Create Test to check we DO SEE ...LOADING:..
//test will FAIL initially --> before fixing that, use
test("button text should be ...loading... when clicked", () => {
  render(<Login />);
  const buttonInput = screen.getByRole("button");
  const userInput = screen.getByPlaceholderText(/userName/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);

  const testValue = "abc";

  fireEvent.change(userInput, {
    target: { value: testValue },
  });
  fireEvent.change(passwordInput, {
    target: { value: testValue },
  });
  fireEvent.click(buttonInput);

  expect(buttonInput).toHaveTextContent(/...loading.../i);
});

//REVIEW[epic=login, seq=30] 43- Create test to check NO ...LOADING... after Fetching.
//WATCH OUT ASYNC
//Will FAIL...
test("button text should not be ...loading... when finished fetching", async () => {
  render(<Login />);
  const buttonInput = screen.getByRole("button");
  const userInput = screen.getByPlaceholderText(/userName/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);

  const testValue = "abc";

  fireEvent.change(userInput, {
    target: { value: testValue },
  });
  fireEvent.change(passwordInput, {
    target: { value: testValue },
  });

  fireEvent.click(buttonInput);
  //without AWAIT and WAITFOR the test will fail. Takes time to finish loading
  await waitFor(() =>
    expect(buttonInput).not.toHaveTextContent(/...loading.../i)
  );
});

//REVIEW[epic=login, seq=32] 46- Test User Fetched
test("user  should be rendered after fetching", async () => {
  render(<Login />);

  //REVIEW[epic=login, seq=33] 47- How to create a Mock Fetch function so we don't do a fetch everytime we fetch
  const mockedUser = { id: 1, name: "rul" };

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockedUser),
    })
  );

  // global.fetch = jest.fn().mockResolvedValue({
  //   json: () => Promise.resolve(mockedUser),
  // });
  const buttonInput = screen.getByRole("button");
  const userInput = screen.getByPlaceholderText(/userName/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);

  const testValue = "abc";

  fireEvent.change(userInput, {
    target: { value: testValue },
  });
  fireEvent.change(passwordInput, {
    target: { value: testValue },
  });
  fireEvent.click(buttonInput);

  //REVIEW[epic=login, seq=34] 48- we FIND the user we mocked. NOT use getByText, cause is synchronous method

  const fetchedUser = await screen.findByText("rul");

  expect(fetchedUser).toBeInTheDocument();
  // await waitFor(() => {
  //   expect(screen.getByText(`${userName}`)).toBeInTheDocument();
  // });
});
