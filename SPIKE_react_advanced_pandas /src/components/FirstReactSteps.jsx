import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FavMeal from "./components/FavMeal";

function FirstReactSteps() {
  //! JS part
  function hi(a) {
    alert("hi React");
    console.log(a);
  }
  // hi("aaasdasd");

  const cohortName = "Pandas";
  const projectName = "React";

  let dinnerPlan;
  let dinnerPreference = "mozzarella salad";
  // if (dinnerPreference === "bulgogi") {
  //   dinnerPlan = " let's go to an Italian Rest.";
  // } else {
  //   dinnerPlan = "Let's go to a Korean";
  // }

  const favMeals = ["salat", "pizza", "tacos", "ramen", "coq au vin", "tacos"];
  //! Inside the Return we have the JSX
  return (
    <>
      <h1>Hello React World</h1>
      {/* <h2>
        we are the {cohortName} , and we are starting {projectName}
      </h2> */}
      {/* if/else logic  */}
      {/* {(() => {
        if (dinnerPreference === "mozzarella salad") {
          dinnerPlan = " let's go to an Italian Rest.";
        } else {
          dinnerPlan = "Let's go to a Korean";
        }
      })()} */}
      {/* //! Ternary operator */}
      {/* {dinnerPreference === "mozzarella salad"
        ? (dinnerPlan = " let's go to an Italian Rest.")
        : (dinnerPlan = "Let's go to a Korean")}

      <h2> {dinnerPlan}</h2> */}
      {dinnerPreference === "mozzarella salad" ? (
        <h2>Lets go to Rossini</h2>
      ) : (
        <h2>Lets go to YamYam</h2>
      )}

      {/* //!Conditional Rendering */}
      {dinnerPreference === "mozzarella salad" && (
        <h2>We are conditionally rendering that we need to go to Rossini</h2>
      )}

      {/* //! Render a list of things */}
      {favMeals.map((favMeal, index) => {
        {
          /* return <FavMeal foodName={favMeal} />; */
        }
        return <FavMeal favMeal={favMeal} />;
      })}
    </>
  );
}

export default FirstReactSteps;
