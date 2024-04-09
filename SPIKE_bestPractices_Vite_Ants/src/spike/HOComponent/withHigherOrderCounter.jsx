import { useState } from "react";

const withHigerOrderCounter = (OriginalComponent, customValue) => {
  function NewComponent(props) {
    console.log("props :>> ", props);
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
      setCounter((current) => {
        return current + customValue;
      });
    };

    return (
      <OriginalComponent
        counter={counter}
        increaseCounter={increaseCounter}
        // clickMessage={props.clickMessage}
        {...props}
      />
    );
  }
  return NewComponent;
};

export default withHigerOrderCounter;
