import React, { useEffect, useState } from "react";
import SingleMeal from "./SingleMeal";

function FavoriteMeals() {
  console.log("%c Component Rendered", "color:green");
  const a = 4345345;

  const doSomeCalculation = () => {
    a + 98888234;
  };
  const [userInput, setUserInput] = useState("");

  const favMealsInitialValue = [
    "rice",
    "stew",
    "paella",
    "fried calamari",
    "fried chicken",
    "ice cream",
    "paella",
  ];
  const [favMeals, setFavMeals] = useState(favMealsInitialValue);

  const getWeekDay = (day) => {
    console.log("week day: ", day);
  };

  const sayHi = () => {
    alert("Hi there");
  };

  useEffect(() => {
    console.log("%c UseEffect run ", "color:purple");
    sayHi();
  }, [favMeals]);

  const handleInputChange = (e) => {
    console.log("%c function run ", "color:red");

    // console.log("e", e);
    setUserInput(e.target.value);
    // console.log("userInput", userInput);
    // favMeals.push(userInput);
  };

  const handleAddMealClick = () => {
    console.log("userInput", userInput);
    setFavMeals([...favMeals, userInput]);
  };
  return (
    <div>
      {console.log("%c JSX rendered", "color:orange")}
      <h1>Favorite Meals </h1>

      {favMeals.map((favMeal, index) => {
        return (
          <SingleMeal
            favMeal={favMeal}
            index={index + 1}
            getWeekDay={getWeekDay}
            key={index}
          />
        );
      })}
      <input
        type="text"
        placeholder="type your fav meal"
        onChange={handleInputChange}
        value={userInput}
      />
      <button onClick={handleAddMealClick}>send</button>
    </div>
  );
}

export default FavoriteMeals;
