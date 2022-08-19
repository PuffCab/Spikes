import React from "react";
import Students from "./Students";

function Component() {
  // JS code goes here

  const greet = "good evening";
  console.log(greet);
  const timeOfDay = "morning";
  const otherGreet = "good day";
  const narwhals = [
    "jan",
    "philipp",
    "emiliy",
    "alberto",
    "karolina",
    "alberto",
  ];

  const getInfo = (info) => {
    console.log('info :>> ', info);
    
  }

  return (
    //JSX
    // react fragment : <> ... </> ....if you don't want to wrap everything inside a <div></div> or any other html tag
    <>
      {/* IF/ELSE  ...we need IIFE*/}
      {/* {(() => {
        if (timeOfDay === "evening") {
          return <p>{greet}</p>;
        } else {
          return <p>{otherGreet}</p>;
        }
      })()} */}
      {/* Ternary operator */}
      {timeOfDay === "morning" ? <p>{greet}</p> : <p>{otherGreet}</p>}

      {/* Looping in JSX */}
      {narwhals.map((narwhal, i) => {
        return <Students narwhal = {narwhal} info ={"such a great day"} getInfo ={getInfo}/>
      })}
      <div > what we are doing now is : </div>
    </>
  );
}

export default Component;
