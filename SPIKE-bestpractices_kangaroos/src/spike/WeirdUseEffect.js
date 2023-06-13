import React, { useEffect, useMemo, useState } from "react";

function WeirdUseEffect() {
  // const a = { name: "raul" };
  // const b = { name: "raul" };
  // console.log("a===b", a === b);

  console.log("component run");
  const [artistName, setArtistName] = useState("");
  const [state, setState] = useState({ artistName: "", alive: false });

  const handleArtistNameChange = () => {
    setState((prev) => {
      return { ...prev, artistName };
    });
  };

  const handleState = () => {
    setState((prev) => {
      return { ...prev, alive: true };
    });
  };

  // const person = useMemo(
  //   () => ({ artistName: state.artistName, alive: state.alive }),
  //   [state.artistName, state.alive]
  // );

  useEffect(() => {
    console.log("%cuseEffect Run", "color:red");
  }, [state]);

  return (
    <>
      <div>
        {/* {console.table("name:, state:", state.artistName, state.alive)} */}
        <h3>Creep, by Radiohead</h3>
        <input type="text" onChange={(e) => setArtistName(e.target.value)} />
        <button onClick={handleArtistNameChange}>Add Name</button>
        <button onClick={handleState}>Alive?</button>
      </div>
      <span>{`name: ${state.artistName} -- alive:${state.alive}`}</span>
    </>
  );
}

export default WeirdUseEffect;
