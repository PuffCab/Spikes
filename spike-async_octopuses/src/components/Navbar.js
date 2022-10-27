import React from "react";

function Navbar({ getSearch }) {
  return (
    <div>
      <h2>Navbar</h2>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => getSearch(e.target.value)}
      />
    </div>
  );
}

export default Navbar;
