import "./App.css";
import CrayzyCounter from "./spike/CrayzyCounter";
import CleanUp from "./spike/CleanUp";
import RaceCondition from "./spike/RaceCondition";
import DerivedState from "./spike/DerivedState.js";
import FunctionalUpdate from "./spike/FunctionalUpdate.js";
import NoNeededState from "./spike/NoNeededState.js";
import WeirdUseEffect from "./spike/WeirdUseEffect.js";

import UseEffectRecap from "./spike/UseEffectRecap";
import Characters from "./spike/useEffect/Characters";
import UsingCHooks from "./spike/usingCustomHooks/UsingCHooks";

function App() {
  return (
    <div className="App">
      <h1>👩🏻‍💻 💙 ⚛️ </h1>
      {/* <FunctionalUpdate /> */}
      {/* <NoNeededState /> */}
      {/* <DerivedState /> */}
      {/* <WeirdUseEffect /> */}
      {/* <CrayzyCounter /> */}
      {/* <CleanUp /> */}
      {/* <RaceCondition /> */}

      {/* <UseEffectRecap /> */}
      {/* <Characters /> */}
      <UsingCHooks />
    </div>
  );
}

export default App;
