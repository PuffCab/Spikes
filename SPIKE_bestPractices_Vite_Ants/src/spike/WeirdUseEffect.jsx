import React, { useEffect, useMemo, useState } from "react";

function WeirdUseEffect() {
  console.log("%c component re-rendered ", "color:orange");
  // const A = ["tom"];
  // const B = ["tom"];
  // // alert("is A === B?" + A == B);
  // console.log('"is A === B?" ', A === B);

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

  const deadArtist = useMemo(
    () => ({ name: state.artistName, alive: state.alive }),
    [artistName, state.alive]
  );

  useEffect(() => {
    console.log("%c useEffect run", "color:red");
  }, [deadArtist]);

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
