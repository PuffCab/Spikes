import React from "react";

// function FavMeal(props) {
function FavMeal({ favMeal }) {
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
  console.log("brand :>> ", brand);
  console.log("year :>> ", year);

  //   console.log("props :>> ", props);
  return <div>{favMeal}</div>;
}

export default FavMeal;
