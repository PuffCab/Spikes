import "./App.css";
import CrayzyCounter from "./spike/CrayzyCounter";
import CleanUp from "./spike/CleanUp";
import RaceCondition from "./spike/RaceCondition";
import DerivedState from "./spike/DerivedState.js";
import FunctionalUpdate from "./spike/FunctionalUpdate.js";
import NoNeededState from "./spike/NoNeededState.js";
import WeirdUseEffect from "./spike/WeirdUseEffect.js";
import HoverCounter from "./spike/HOComponent/HoverCounter";
import ClickCounter from "./spike/HOComponent/ClickCounter";
import UseEffectRecap from "./spike/UseEffectRecap";
import Characters from "./spike/useEffect/Characters";
import UsingCHooks from "./spike/usingCustomHooks/UsingCHooks";

function App() {
  return (
    <div className="App">
      <h1>🎶 👩🏻‍💻 💙 ⚛️ </h1>
      {/* <FunctionalUpdate /> */}
      {/* <NoNeededState /> */}
      {/* <DerivedState /> */}
      {/* <WeirdUseEffect /> */}
      {/* <CrayzyCounter /> */}
      {/* <CleanUp /> */}
      {/* <RaceCondition /> */}

      {/* <h2>Higher & Higher, by Jackie Wilson</h2>
      <HoverCounter hovered="hovered" />
      <ClickCounter clicked="clicked" /> */}

      {/* <UseEffectRecap /> */}
      {/* <Characters /> */}
      {/* <UsingCHooks /> */}
    </div>
  );
}

export default App;
