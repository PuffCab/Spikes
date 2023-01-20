import React from "react";

function Student({ elephant, getNumber }) {
  // console.log('props :>> ', props);

  const numberOfStudents = 8;

  // const sendNum = () => {
  //   getNumber(numberOfStudents)
  // }
  return (
    // <div>{props.elephant}</div>
    <div>
      <div>{elephant}</div>
      {/* <button onClick={sendNum}>Send Number</button> */}
      {/* <button onClick={()=> getNumber(7)}>Send Number</button> */}
      {/* <NewChild name ={elephant} text ="asdasd"/> */}
    </div>
  );
}

export default Student;
