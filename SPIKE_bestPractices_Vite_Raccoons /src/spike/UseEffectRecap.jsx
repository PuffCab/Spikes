import React from "react";

function UseEffectRecap() {
  return (
    <div>
      <dialog open>
        <h2>useEffect Rules</h2>
        <ol>
          <li>
            Always use the dependency array : either empty📭 or watching👀 some
            value
          </li>

          <li>
            Avoid Race🏎️ Conditions : especiallly while fetching, use the
            cleanup🧹 function from useEffect.
          </li>

          <li>
            ⚠️Be careful⚠️ when using objects and arrays in the dependency
            array.
          </li>
          <li>
            The most importan rule of all :{" "}
            <a href="https://i.imgflip.com/7l4ry3.jpg" target="blank">
              Albert Einstein's quote 👨🏼‍🏫
            </a>
          </li>
        </ol>
      </dialog>
    </div>
  );
}

export default UseEffectRecap;
