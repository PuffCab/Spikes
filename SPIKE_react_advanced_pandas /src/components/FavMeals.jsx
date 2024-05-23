import React, { useState } from "react";
import FavMeal from "./FavMeal";

function FavMeals() {
  console.log("%c component re-rendered", "color:green");
  //! JS part
  const [userInput, setUserInput] = useState("");

  const favMeals = ["salat", "pizza", "tacos", "ramen", "coq au vin", "tacos"];
  const [favoriteMeals, setFavoriteMeals] = useState(favMeals);
  //! Inside the Return we have the JSX

  const showFavColor = (color) => {
    alert(`my favorite color is ${color}`);
  };

  const handleInputChange = (e) => {
    // console.log("i am typing");
    setUserInput(e.target.value);
    console.log("e :>> ", e.target.value);
  };

  const addFavMeal = () => {
    // favMeals.push(userInput);
    setFavoriteMeals([...favoriteMeals, userInput]);
    console.log("favMeals :>> ", favMeals);
  };
  return (
    <div className="container">
      <h1>Hello React World</h1>
      <input type="text" onChange={handleInputChange} value={userInput} />
      <button onClick={addFavMeal}>add favorite meal</button>

      {favoriteMeals.map((favMeal, index) => {
        return (
          <FavMeal key={index} favMeal={favMeal} showFavColor={showFavColor} />
        );
      })}
    </div>
  );
}

export default FavMeals;
