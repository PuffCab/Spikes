import React from "react";

function SingleMeal({ favMeal, index, getWeekDay }) {
  //! watch out! , in the recording we changed the name of the props
  //   console.log("props", props);
  //   const meal = props.meal;
  //   const mealNumber = props.mealNumber;
  //   const { meal, mealNumber } = props;
  console.log("favMeal", favMeal);
  const weekDay = "Friday";

  const revealDay = () => {
    getWeekDay(weekDay);
  };

  return (
    <div>
      fav meal Nr{index} : {favMeal}
      {/* <button onClick={revealDay}>Log selected</button> */}
    </div>
  );
}

export default SingleMeal;
