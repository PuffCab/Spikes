import React, { useEffect, useMemo, useState } from "react";

function WeirdUseEffect() {
  // const a = 1;
  // const b = 1;
  // const string1 = "octopuses";
  // const string2 = "octopuses";
  // const array1 = ["green", "mint", "octopuses"];
  // const array2 = ["green", "mint", "octopuses"];
  // const obj1 = {
  //   name: "raul",
  // };
  // const obj2 = {
  //   name: "raul",
  // };
  // console.log(obj1 === obj2);

  const [plantName, setPlantName] = useState("");
  const [state, setState] = useState({ plantName: "", alive: false });

  const handlePlantNameChange = () => {
    setState((prev) => {
      return { ...prev, plantName };
    });
  };
  // const plant = useMemo(
  //   () => ({ plantName: state.plantName, alive: state.alive }),
  //   [state.plantName, state.alive]
  // );

  const handleState = () => {
    setState((prev) => {
      return { ...prev, alive: true };
    });
  };

  useEffect(() => {
    console.log("%cuseEffect run", "color:red");
  }, [state.plantName, state.alive]);

  return (
    <div>
      {/* {console.table("name:, state:", state.plantName, state.alive)} */}
      <h3>Creep, by Radiohead</h3>
      <input type="text" onChange={(e) => setPlantName(e.target.value)} />
      <button onClick={handlePlantNameChange}>Add Name</button>
      <button onClick={handleState}>Alive?</button>
      <div>{`Plant Name :  ${state.plantName}, is Alive? : ${state.alive}`}</div>
    </div>
  );
}

export default WeirdUseEffect;
