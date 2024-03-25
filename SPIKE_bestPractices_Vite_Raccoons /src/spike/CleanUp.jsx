import React, { useEffect, useState } from "react";

function CleanUp() {
  const [boolean, setBoolean] = useState(false);

  const changeBoolean = () => {
    setBoolean(!boolean);
  };

  useEffect(() => {
    console.log("%c useEffect Run", "color:orange");

    return () => {
      console.log("%c do some cleanup first!!", "color:red");

      console.log("%c all clean, useEffect can run again", "color:green");
    };
  }, [boolean]);

  return (
    <div>
      <h2>Clean, by Depeche Mode</h2>
      <button onClick={changeBoolean}>change Boolean</button>
    </div>
  );
}

export default CleanUp;
