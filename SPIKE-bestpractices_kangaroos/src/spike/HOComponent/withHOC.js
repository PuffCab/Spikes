import React, { useState } from "react";

const withHOC = (OriginalComponent, customProp) => {
  function NewComponent(props) {
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
      setCounter((current) => {
        return current + customProp;
      });
    };

    return (
      <OriginalComponent
        times="times"
        counter={counter}
        increaseCounter={increaseCounter}
        // clicked={props.clicked}
        // hovered={props.hovered}
        {...props}
      />
    );
  }
  return NewComponent;
};

export default withHOC;
