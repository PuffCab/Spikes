import React from "react";
import "./style/kangarooStyle.css";

export function Student({ kangaroo, randomNumber, getFavColor }) {
  //   const { kangaroo } = props;
  //   console.log("props", props);

  const favColor = "Blue";
  const sendColor = () => {
    getFavColor(favColor);
  };
  return (
    <div>
      <h3>{kangaroo}</h3>
    </div>
  );
}

export function SecondComponent() {
  return <div>second component</div>;
}
