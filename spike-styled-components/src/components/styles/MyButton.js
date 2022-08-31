import React from "react";

function MyButton({ text, color, backgroundColor }) {
  const style = {
    color: color,
    backgroundColor: backgroundColor,
  };

  return <button style={style}>{text}</button>;
}

export default MyButton;
