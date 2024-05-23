import React from "react";

function Dish({ favMeal }) {
  return (
    <div className="dish">
      {/* <h3>Child Component</h3> */}
      <p>{favMeal}</p>
    </div>
  );
}

export default Dish;
