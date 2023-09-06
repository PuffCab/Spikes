import renderer from "react-test-renderer";
import Navbar from "./Navbar";

test("navbar matches the snapshot", () => {
  const component = renderer.create(<Navbar />);
  const domTree = component.toJSON();

  expect(domTree).toMatchSnapshot();
});
