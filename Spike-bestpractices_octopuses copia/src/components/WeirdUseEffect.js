import React, { useEffect, useMemo, useState } from "react";

function WeirdUseEffect() {
  const [name, setName] = useState("");
  const [state, setState] = useState({ name: "", alive: false });

  const person = useMemo(
    () => ({ name: state.name, alive: state.alive }),
    [state.name, state.alive]
  );

  const handleAddName = () => {
    setState((prev) => {
      return { ...prev, name };
    });
  };

  const handleSelect = () => {
    setState((prev) => {
      return { ...prev, alive: true };
    });
  };
  //   useEffect(() => {
  //     console.log("useEffect run!");
  //   }, [state]); //BAD this runs every time we click the button, due to Non-primitive reference comparisson

  //   useEffect(() => {
  //     console.log("useEffect run!");
  //   }, [person]); // WORKS thanks to the useMemo(), that only updates person if the properties in the dependency array changes

  useEffect(() => {
    console.log("useEffect run!");
  }, [state.name, state.alive]); // WORKS
  return (
    <div>
      {/* {console.table("name:, selected:", state.name, state.selected)} */}
      <h3>useEffect: Dependency Mistake</h3>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAddName}>add name</button>
      <button onClick={handleSelect}>alive</button>
      {`{name :${state.name}, alive:${state.alive}}`}
    </div>
  );
}

export default WeirdUseEffect;
