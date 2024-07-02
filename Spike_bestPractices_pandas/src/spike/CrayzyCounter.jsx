import React, { useEffect } from "react";
import { useState } from "react";

function CrayzyCounter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  // const timer = () => {
  //   const counter = setInterval(() => {
  //     setCount((prev) => {
  //       return prev + 1;
  //     });
  //   }, 1000);

  // };

  useEffect(() => {
    console.log("useEffect run");

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
  }, []);

  return (
    <div>
      <h2>Crazy, by Aerosmithssssss</h2>
      <h1>{count}</h1>
    </div>
  );
}

export default CrayzyCounter;
