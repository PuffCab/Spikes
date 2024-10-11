import React from "react";
import SingleMeal from "./SingleMeal";

function FavoriteMeals() {
  const favMeals = [
    "rice",
    "stew",
    "paella",
    "fried calamari",
    "fried chicken",
    "ice cream",
    "paella",
  ];

  const getWeekDay = (day) => {
    console.log("week day: ", day);
  };
  return (
    <div>
      <h1>Favorite Meals </h1>

      {favMeals.map((favMeal, index) => {
        return (
          <SingleMeal
            favMeal={favMeal}
            index={index + 1}
            getWeekDay={getWeekDay}
          />
        );
      })}
    </div>
  );
}

export default FavoriteMeals;
