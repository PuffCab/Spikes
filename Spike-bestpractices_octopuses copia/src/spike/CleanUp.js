import React, { useEffect, useState } from "react";

function CleanUp() {
  const [alive, setAlive] = useState(false);

  useEffect(() => {
    //change Alive
    console.log("Alive is changed");
    return () => {
      console.log("Clean up first before running again");

      console.log("all clean, useEffect can run again");
    };
  }, [alive]);

  return (
    <div>
      <h2>You should've learnt this at home, kiddo.</h2>
      <button onClick={() => setAlive(!alive)}>change Alive</button>
    </div>
  );
}

export default CleanUp;
