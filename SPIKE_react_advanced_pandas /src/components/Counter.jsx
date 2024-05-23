import { useState } from "react";
import { Button } from "react-bootstrap";

function Counter() {
  console.log("%c component rendered", "color:green");
  //   let count = 0;
  const [count, setCount] = useState(0);

  const [myStateVariable, setMyStateVariable] = useState(["asdasd", "asdasd"]);
  //   const myStateVariable = useState({ name: "Val" });
  console.log("myStateVariable :>> ", myStateVariable);

  //!Array destructuring
  //#region
  const myArray = ["first value", "second value"];
  const [one, two] = myArray;
  //#endregion

  console.log("one :>> ", one);

  function click() {
    console.log("you clicked me");
    // count++;
    setCount(count + 1);
    console.log("count :>> ", count);
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={click}>+</button>
      <Button variant="danger">Bootstrap button</Button>
    </div>
  );
}

export default Counter;
