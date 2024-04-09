import React, { useEffect } from "react";
import { useState } from "react";

function CrayzyCounter() {
  const [count, setCount] = useState(0);

  console.log("%c useEffect run", "color:red");

  // const timer = () => {
  //   setInterval(() => {
  //     setCount((prev) => {
  //       return prev + 1;
  //     });
  //   }, 1000);
  // };

  useEffect(() => {
    // timer();
    let isSubcribed = true;
    const timer = setInterval(() => {
      if (isSubcribed) {
        setCount((prev) => {
          return prev + 1;
        });
      }
    }, 1000);

    return () => {
      // clearInterval(timer);
      isSubcribed = false;
    };
  }, []);

  return (
    <div>
      <h2>Crazy, by Aerosmithasdasd</h2>
      <h1>{count}</h1>
    </div>
  );
}

export default CrayzyCounter;
