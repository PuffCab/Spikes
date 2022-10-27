

import React from 'react'

function MyComponent() {

  const greet = "Good morning";

  const momentOfDay = "morning";
  const secondGreet = "Mahlzeit";

  console.log(greet);
  return (
    <div>
      <h2>My Component</h2>
      {/* IF */}
      {/* {momentOfDay === "morning" && <p>{greet}</p>} */}
      {/* If Else */}

      {/* {(
        ()=> {
          if(momentOfDay === "asdasd" ) {
            return <p>{greet}</p>
          } else {
            return <p>{secondGreet}</p>
          }
        }
      )()} */}

      {/* Ternary operator */}
      {momentOfDay === "sdfsdf" ? <p>{greet}</p> :<p>{secondGreet}</p> }
    </div>
  )
}

export default MyComponent






