import React, { useEffect, useMemo, useState } from "react";

function WeirdUseEffect() {
  ///// Primitive values

  // const a = 1;
  // const b = 1;
  // const stringA = "word";
  // const stringB = "word";
  // console.log(stringA === stringB);

  // Non-primitive valies
  // const array1 = ["word"];
  // const array2 = ["word"];
  // const obj1 = { name: "raul" };
  // const obj2 = { name: "raul" };
  // const obj3 = obj1;
  // console.log(obj1 === obj3);

  const [treeName, setTreeName] = useState("");
  const [state, setState] = useState({ treeName: "", alive: false });

  const handleTreeNameChange = () => {
    setState((prev) => {
      return { ...prev, treeName };
    });
  };

  const tree = useMemo(
    () => ({ treeName: state.treeName, alive: state.alive }),
    [state.treeName, state.alive]
  );

  const handleState = () => {
    setState((prev) => {
      return { ...prev, alive: true };
    });
  };

  useEffect(() => {
    console.log("useEffect run");
  }, [state.treeName, state.alive]);

  return (
    <div>
      {/* {console.table("name:, state:", state.treeName, state.alive)} */}
      <h3>useEffect: Dependency Mistake</h3>
      <input type="text" onChange={(e) => setTreeName(e.target.value)} />
      <button onClick={handleTreeNameChange}>Add Name</button>
      <button onClick={handleState}>Alive?</button>
      <div>{`treename: ${state.treeName}, alive: ${state.alive}`}</div>
    </div>
  );
}

export default WeirdUseEffect;
