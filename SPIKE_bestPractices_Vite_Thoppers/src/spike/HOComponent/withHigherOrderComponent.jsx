import { useState } from "react";

const withHigerOrderComponent = (OriginalComponent, customParameter) => {
  function NewComponent(props) {
    const [counter, setCounter] = useState(0);
    const increaseCounter = () => {
      setCounter((current) => {
        return current + customParameter;
      });
    };
    return (
      <OriginalComponent
        counter={counter}
        increaseCounter={increaseCounter}
        {...props}
      />
    );
  }
  return NewComponent;
};

export default withHigerOrderComponent;
