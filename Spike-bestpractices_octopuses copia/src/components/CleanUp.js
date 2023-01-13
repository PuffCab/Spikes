import React, { useEffect, useState } from "react";

function CleanUp() {
  const [alive, setAlive] = useState(false);
  useEffect(() => {
    console.log("useEffect runs");
    // change Alive

    //reuturn clean up function
    return () => {
      // clean whatever from previous effect
      console.log("clean first");
      //clean is finished
      console.log("all clean, run useEffect");
    };
  }, [alive]);

  return (
    <div>
      <h2>useEffect Clean up function</h2>
      <button
        onClick={() => {
          setAlive(!alive);
        }}
      >
        Change Alive
      </button>
    </div>
  );
}

export default CleanUp;
