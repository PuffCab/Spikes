import React, { useState } from "react";
import withHOC from "./withHOC";

function HoverCounter(props) {
  // function myFunction(func) {
  //   return func();
  // }
  // console.log(
  //   myFunction(function () {
  //     return "i am a HOF";
  //   })
  // );
  // const sum = (a)=>{
  //   return function (ab) {
  //     return a+b
  //   }
  // }
  // console.log(sum(2)(40))

  return (
    <div>
      <h1>
        {props.hovered} {props.counter} {props.times}
      </h1>
      <button onMouseOver={props.increaseCounter}>Hover to increase</button>
    </div>
  );
}

export default withHOC(HoverCounter, 5);
