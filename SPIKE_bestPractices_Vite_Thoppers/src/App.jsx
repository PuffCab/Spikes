import "./App.css";
import CrayzyCounter from "./spike/CrayzyCounter";
import CleanUp from "./spike/CleanUp";
import RaceCondition from "./spike/RaceCondition";
import DerivedState from "./spike/DerivedState.jsx";
import FunctionalUpdate from "./spike/FunctionalUpdate.jsx";
import NoNeededState from "./spike/NoNeededState.jsx";
import WeirdUseEffect from "./spike/WeirdUseEffect.jsx";
import HoverCounter from "./spike/HOComponent/HoverCounter";
import ClickCounter from "./spike/HOComponent/ClickCounter";
import UseEffectRecap from "./spike/UseEffectRecap";
import Characters from "./spike/useEffect/Characters";
import UsingCHooks from "./spike/usingCustomHooks/UsingCHooks";

function App() {
  function sum(a) {
    return function (b) {
      return a + b;
    };
  }
  console.log(sum(10)(456));

  return (
    <div className="App">
      <h1>🍣🌳🪲's 💙 ⚛️ </h1>
      {/* <FunctionalUpdate /> */}
      {/* <NoNeededState /> */}
      {/* <DerivedState /> */}
      {/* <WeirdUseEffect /> */}
      {/* <CrayzyCounter /> */}
      {/* <CleanUp /> */}
      {/* <RaceCondition /> */}

      {/* <h2>Higher & Higher, by Jackie Wilson</h2>
      <HoverCounter hoverText="hover here" />
      <ClickCounter clickText="click here" /> */}

      {/* <UseEffectRecap /> */}
      {/* <Characters /> */}
      <UsingCHooks />
    </div>
  );
}

export default App;
