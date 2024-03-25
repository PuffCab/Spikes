import React, { useEffect } from "react";
import { useState } from "react";

function CrayzyCounter() {
  const [count, setCount] = useState(0);

  // const counter = () => {
  //   setInterval(() => {
  //     setCount((prev) => {
  //       return prev + 1;
  //     });
  //   }, 1000);
  // };

  useEffect(() => {
    // console.log("%c useEffect Run", "color:orange");

    let isCanceled = false;
    const counter = setInterval(() => {
      if (!isCanceled) {
        setCount((prev) => {
          return prev + 1;
        });
      }
    }, 1000);

    return () => {
      // clearInterval(counter);
      isCanceled = true;
    };
  }, [count]);

  return (
    <div>
      <h2>Crazy, by sdfsdfsdfasdasd</h2>
      <h1>{count}</h1>
    </div>
  );
}

export default CrayzyCounter;
