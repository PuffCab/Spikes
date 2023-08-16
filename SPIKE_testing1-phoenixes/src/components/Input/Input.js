import React from "react";
import "./input.css";

function Input({ value, setValue, name }) {
  if (!name) {
    throw new Error("INput must have a name");
  }
  return (
    <div>
      <input
        className="input"
        placeholder="Enter a value"
        aria-label={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Input;
