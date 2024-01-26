import React, { useMemo, useState } from "react";
import { useEffect } from "react";

function WeirdUseEffect() {
  // const a = { name: "Tom" };
  // const b = { name: "Tom" };
  // console.log("is A === B ? :", a === b);

  const [artistName, setArtistName] = useState("");
  const [state, setState] = useState({ artistName: "", alive: false });

  const artist = useMemo(() => {
    return { artistName: state.artistName, alive: state.alive };
  }, [state.alive, state.artistName]);

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

  useEffect(() => {
    console.log("%c useEffect run", "color:orange");
  }, [artist]);

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
