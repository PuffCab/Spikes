import React, { useEffect, useState } from "react";

function CleanUp() {
  const [alive, setAlive] = useState(false);

  useEffect(() => {
    console.log("%cuseEffect run", "color:orange");

    return () => {
      //Clean up first
      console.log("%cplease clean up before!", "color:red");

      //Clean up done
      console.log("%call clean, useEffect can run again", "color:green");
    };
  }, [alive]);

  return (
    <div>
      <h2>Clean your useEffects</h2>
      <button onClick={() => setAlive(!alive)}>change alive</button>
    </div>
  );
}

export default CleanUp;
