import React from "react";

function FirstComponent() {
  ///  JS LOGIC HERE
  console.log("this is javascript");
  const greet = "hey Kangaroos";

  const favColor = "orange";

  const student = "Ari";
  //////
  /// JSX = Javascript Extended
  return (
    <div>
      <h2>My first component</h2>
      <h2>{greet}</h2>
      {/* IF clause */}
      {student === "Carl" && <h2>Fav color is: {favColor}</h2>}
      {/* If-Else -> JS Style */}
      {(() => {
        if (student === "Carl") {
          return <h2>Fav color is: {favColor}</h2>;
        } else {
          return <h2>don't know his/her fav color</h2>;
        }
      })()}
      {/* IF-ELSE , REACT way */}
      {student === "Carl" ? (
        <h2>Fav color is: {favColor}</h2>
      ) : (
        <h2>don't know his/her fav color</h2>
      )}
    </div>
  );
}

export default FirstComponent;
