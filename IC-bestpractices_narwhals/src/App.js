import "./App.css";
import CrayzyCounter from "./spike/CrayzyCounter";
import CleanUp from "./spike/CleanUp";
import CleanupFetch from "./spike/CleanupFetch";
import DerivedState from "./spike/DerivedState.js";
import FunctionalUpdate from "./spike/FunctionalUpdate.js";
import NoNeededState from "./spike/NoNeededState.js";
import WeirdUseEffect from "./spike/WeirdUseEffect.js";

function App() {
  return (
    <div className="App">
      <h2>SPIKE React Best Practices</h2>
      {/* <FunctionalUpdate /> */}
      {/* <NoNeededState /> */}
      {/* <DerivedState /> */}
      {/* <WeirdUseEffect /> */}
      {/* <CrayzyCounter /> */}
      {/* <CleanUp /> */}
      <CleanupFetch />
    </div>
  );
}

export default App;
