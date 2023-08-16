import { useState } from "react";
import { differrence, product, sum } from "./utils/operations";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

function Calculator() {
  const [value1, setValue1] = useState(3);
  const [value2, setValue2] = useState(4);
  const [type, setType] = useState("diff");
  const [result, setResult] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();

    let result;
    switch (type) {
      case "sum":
        result = sum(value1, value2);
        break;
      case "diff":
        result = differrence(value1, value2);
        break;

      case "prod":
        result = product(value1, value2);
        break;

      default:
        result = sum(value1, value2);
    }
    setResult(result);
  };

  return (
    <div>
      <h2>Calculator</h2>
      <div className="input-container">
        <Input value={value1} setValue={setValue1} name="value1" />
        <Input value={value2} setValue={setValue2} name="value2" />
        <Button handleClick={handleClick} type={type}></Button>
        <p className="result">= {result}</p>
      </div>
    </div>
  );
}

export default Calculator;
