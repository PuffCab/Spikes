//REVIEW[epic=snapshot, seq=2] 50- We Install npm install -dev react-test-renderer from JEST https://jestjs.io/docs/tutorial-react
import renderer from "react-test-renderer";
import Navbar from "./Navbar";

//REVIEW[epic=snapshot, seq=3] 51- Create Test
test("Navbar component snapshot", () => {
  const component = renderer.create(<Navbar />);
  const domTree = component.toJSON();
  expect(domTree).toMatchSnapshot();
});

//REVIEW[epic=snapshot, seq=4] 52- IF we modify the component
// we UPDATE it with npm test -- -u
