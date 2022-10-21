import React, { useState } from "react";

function FunctionalUpdate() {
  // State variables initialization

  // const [name, setName] = useState(null); // Avoid this
  // const [object, setObject] = useState(null); // Avoid this

  // const [name, setName] = useState(""); // better do this instead
  // const [object, setObject] = useState({});// better do this instead
  // const [array, setArray] = useState([]);

  // const [object, setObject] = useState({ name: "", comments: [] });// better do this instead

  const [count, setCount] = useState(0);

  const increase = () => {
    // setCount(count + 1);
    setCount((prev) => {
      return prev + 1;
    });
  };

  const delayedIncrease = () => {
    // setTimeout(() => {
    //   setCount(count + 2);
    // }, 2000);
    setTimeout(() => {
      setCount((prev) => {
        return prev + 2;
      });
    }, 2000);
  };
  return (
    <div>
      <h3>useState Functional Update</h3>
      <p>{count}</p>
      <button onClick={increase}>increase +1</button>
      <button onClick={delayedIncrease}>increase later, +2</button>
    </div>
  );
}

export default FunctionalUpdate;
