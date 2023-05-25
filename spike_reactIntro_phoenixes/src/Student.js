import React from "react";

// function Student({ phoenix, projectName }) { // object destructuring
function Student(props) {
  // console.log("props", props);
  const projectName = props.projectName;
  const phoenix = props.studentName;
  const sendColor = props.getColor;
  //whatever we write as parameter of the function, is an object containing the information we reive from the parent
  // console.log("params", params);
  // const studentName = params.phoenix;
  // console.log("studentName", studentName);

  const cohortColor = "purple";
  const handleClick = () => {
    // console.log("button clicked");
    sendColor(cohortColor);
  };

  return (
    <div>
      <h3>I am the Phoenix :{phoenix} </h3>
      <p>I love {projectName}</p>
      <button onClick={handleClick}>send Color</button>
    </div>
  );
}

export default Student;
