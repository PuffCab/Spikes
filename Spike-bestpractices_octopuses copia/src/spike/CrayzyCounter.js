import React, { useEffect, useState } from "react";

function CrayzyCounter() {
  const [count, setCount] = useState(0);

  // const timer = () => {
  //   setInterval(() => {
  //     setCount((prev) => {
  //       return prev + 1;
  //     });
  //   }, 1000);
  // };

  useEffect(() => {
    // timer();
    console.log("adding a new interval");
    const timer = setInterval(() => {
      setCount((prev) => {
        return prev + 1;
      });
    }, 1000);

    return () => {
      console.log("cleaning interval first");
      clearInterval(timer);
    };
  }, [count]);

  return (
    <div>
      <h2>Crazy, by Aerosmith</h2>
      <div>{count}</div>
    </div>
  );
}

export default CrayzyCounter;
