import { useEffect, useState } from "react";
import Student from "./Student";

function MyComponent(params) {
  // HERe we write pure JS

  console.log("this is React");

  const greet = "Happy New year";
  const secondGreet = "Good Morning";

  const timeOfDay = "Morning";

  const studentsList = [
    "Can",
    "Ercan",
    "Juli",
    "olja",
    "Santiago",
    "Monique",
    "Roxanne",
    "Santiago",
  ];
  const [elephants, setElephants] = useState(studentsList);
  const [input, setInput] = useState("");
  const [data, setData] = useState(5);

  const updateData = () => {
    setData(data + 1);
  };

  useEffect(() => {
    updateData();
  }, [elephants]);

  // let input = "";
  const getNumber = (number) => {
    console.log("number", number);
  };
  const onChangeInput = (event) => {
    console.log("event", event.target.value);
    setInput(event.target.value);
    // input = event.target.value;
  };
  const addStudent = () => {
    console.log("input :>> ", input);
    // elephants.push(input);
    setElephants([...elephants, input]);
  };
  return (
    <div>
      {elephants.map((elephant, index) => {
        return (
          <div key={index}>
            <Student elephant={elephant} getNumber={getNumber} />
          </div>
        );
      })}
      <div>{data}</div>
      <input type="text" name="" id="" value={input} onChange={onChangeInput} />
      <button onClick={addStudent}>Add Student</button>
    </div>
  );
}

export default MyComponent;
