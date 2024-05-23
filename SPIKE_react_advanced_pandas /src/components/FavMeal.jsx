import React from "react";
import Dish from "./Dish";

// function FavMeal(props) {
function FavMeal({ favMeal, showFavColor }) {
  //Dot notation and object destructuring
  //#region
  const car = {
    brand: "Opel",
    year: 2020,
  };
  // console.log(car.brand)
  //   const brand = car.brand;
  //   const year = car.year;
  //   console.log("brand :>> ", brand);
  // console.log(car.brand)
  // ! Object Destructuring
  const { brand, year } = car;
  //   const { year } = car;
  // console.log("brand :>> ", brand);
  // console.log("year :>> ", year);
  //#endregion
  //   console.log("props :>> ", props);
  // return <div className="meal-container">{favMeal}</div>;
  const favColor = "Red";
  const sendColorToParent = () => {
    showFavColor(favColor);
  };
  return (
    <div className="meal-container">
      {/* <h2>child component</h2> */}
      {/* <button onClick={sendColorToParent}>reveal Favorite color</button> */}
      <Dish favMeal={favMeal} />
    </div>
  );
}

export default FavMeal;
