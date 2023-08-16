import React from "react";
import "./button.css";

function Button({ type, handleClick }) {
  return (
    <div>
      <button className="btn" onClick={handleClick}>
        {type}
      </button>
    </div>
  );
}

export default Button;
