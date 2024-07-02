import React, { useEffect, useMemo, useState } from "react";

function WeirdUseEffect() {
  // const A = [1];
  // const B = [1];
  // console.log("is A === to B??? :>> ", A === B);

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

  const artist = useMemo(() => {
    return { name: state.artistName, alive: state.alive };
  }, [state.artistName, state.alive]);
  useEffect(() => {
    console.log("%c useEffect run", "color:white");
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
