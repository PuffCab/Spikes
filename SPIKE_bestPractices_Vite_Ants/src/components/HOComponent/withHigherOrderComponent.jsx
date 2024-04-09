import React, { useState } from "react";

const withHigherOrderComponent = (OriginalComponent, customProp) => {
  function NewComponent(props) {
    const [counter, setCounter] = useState(0);
    const increaseCounter = () => {
      setCounter((current) => {
        return current + customProp;
      });
    };
    return (
      <OriginalComponent
        text="i am a apara"
        counter={counter}
        increaseCounter={increaseCounter}
        times="times"
        // hovered={props.hovered}
        // clicked={props.clicked}
        {...props}
      />
    );
  }
  return NewComponent;
};

export default withHigherOrderComponent;
