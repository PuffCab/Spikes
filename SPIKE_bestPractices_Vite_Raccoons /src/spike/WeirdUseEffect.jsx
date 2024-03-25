import React, { useEffect, useMemo, useState } from "react";

function WeirdUseEffect() {
  // const A = [3, 4];
  // const B = [3, 4];

  // console.log(console.log("%c is A === B??", "color:orange", A === B));

  const [artistName, setArtistName] = useState("");
  const [state, setState] = useState({ artistName: "", alive: false });

  const handleArtistNameChange = () => {
    setState((prev) => {
      return { ...prev, artistName };
    });
  };

  const artist = useMemo(() => {
    console.log("%c useMemo updated", "color:red");
    return { name: state.artistName, alive: state.alive };
  }, [state.artistName, state.alive]);

  const handleState = () => {
    setState((prev) => {
      return { ...prev, alive: true };
    });
  };

  useEffect(() => {
    console.log("%c useEffect Run", "color:orange");
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
