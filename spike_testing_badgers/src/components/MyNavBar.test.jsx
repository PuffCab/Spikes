import { expect, test } from "vitest";
import MyNavBar from "./MyNavBar";
import { render } from "@testing-library/react";

test("navbar snapshot", () => {
  const component = render(<MyNavBar />);
  expect(component).toMatchSnapshot();
});
