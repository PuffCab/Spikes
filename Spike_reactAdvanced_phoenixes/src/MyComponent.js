import React from "react";

function MyComponent() {
  ////////// JS Section
  const favDog = "German sheperd ";
  const favDog2 = "new foundland";
  const drooling = "high";

  ////////// end JS Section
  //////// JSX Section

  return (
    <div>
      {/* If/else JS style */}
      {/* {(() => {
        if (drooling !== "high") {
          return <h1>{favDog2}</h1>;
        } else {
          return <h1>{favDog}</h1>;
        }
      })()} */}
      {/* if/else "React" way */}
      {drooling === "high" ? <h1>{favDog2}</h1> : <h1>{favDog}</h1>}
    </div>
  );
}

export default MyComponent;
