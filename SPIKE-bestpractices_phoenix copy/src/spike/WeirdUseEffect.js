import React, { useEffect, useMemo, useState } from "react";

function WeirdUseEffect() {
  // const a = [{ number: "1" }];

  // console.log("a", a);
  // const b = a;
  // console.log("b", b);

  // a.forEach((object) => {
  //   return (object.name = "tom");
  // });

  // console.log("a", a);
  // console.log("b", b);
  // const b = { number: "1" };

  // console.log("is a === b???", a === b);

  const [artistName, setArtistName] = useState("");
  const [state, setState] = useState({ artistName: "", alive: false });

  const artist = useMemo(
    () => ({ artistName: state.artistName, alive: state.alive }),
    [state.artistName, state.alive]
  );

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
    console.log("%c useeffect run", "color:red");
  }, [artist]);

  return (
    <>
      <div>
        {/* {console.table("name:, state:", state.artistName, state.alive)} */}
        <h3>Weird useEffect</h3>
        <input type="text" onChange={(e) => setArtistName(e.target.value)} />
        <button onClick={handleArtistNameChange}>Add Name</button>
        <button onClick={handleState}>Alive?</button>
      </div>
      <span>{`name: ${state.artistName} -- alive:${state.alive}`}</span>
    </>
  );
}

export default WeirdUseEffect;
