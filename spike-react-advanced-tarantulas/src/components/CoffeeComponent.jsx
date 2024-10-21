function CoffeComponent() {
  const hasCoffee = false;
  let message;

  if (hasCoffee) {
    message = <p>Yes, I'm fueled up and ready to go! ☕️</p>;
  } else {
    message = <h2>No coffee, no work! ☕️😴</h2>;
  }

  return (
    <div>
      <span>
        <div>
          {" "}
          <h1>Coffee Component</h1>
          {/* {message} */}
          {/* If/else block */}
          {/* {(() => {
            if (hasCoffee) {
              return <p>Yes, I'm fueled up and ready to go! ☕️</p>;
            } else {
              return <h2>No coffee, no work! ☕️😴</h2>;
            }
          })()} */}
          {/* ternary operator */}
          {/* {hasCoffee ? (
            <p>Yes, I'm fueled up and ready to go! ☕️</p>
          ) : (
            <h2>No coffee, no work! ☕️😴</h2>
          )} */}
          {/* double & operator */}
          {hasCoffee && <p>Yes, I'm fueled up and ready to go! ☕️</p>}
          {!hasCoffee && <h2>No coffee, no work! ☕️😴</h2>}
        </div>
      </span>
    </div>
  );
}

export default CoffeComponent;
