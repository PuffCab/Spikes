//REVIEW[epic=login, seq=1] 14-create a Login component with a simple react form. EMPTY (or commented out)
//we are gonna think like an user and try to find mistakes.
//we build the test, we fail it, and then we build the working version
import React, { useState } from "react";
// import axios from "axios";

function Login() {
  //REVIEW[epic=login, seq=17] 31- To correct error, create states and use them in inouts
  const [error, setError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //REVIEW[epic=login, seq=26] 40- Create logic for a loader in button
  const [loading, setLoading] = useState(false);

  //REVIEW[epic=login, seq=24] 38- Build HANDLECLIK() and user variable  to fetch to fake a login
  const [user, setUser] = useState({});
  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/10"
      );
      const result = await response.json();
      console.log("result :>> ", result);
      setUser(result);
      //+with AXIOS
      //#region
      // const { data } = await axios.get(
      //   "https://jsonplaceholder.typicode.com/users/10"
      // );
      // setUser(data);
      //#endregion
    } catch (error) {
      setError(true);
    } finally {
      //REVIEW[epic=login, seq=31] 44- To fix the last test, we turn setLoading to false when done

      setLoading(false);
    }
  };

  return (
    <div>
      {/* //REVIEW[epic=login, seq=25] 39- Display user Name */}
      {/* <span id="user">{user.name}</span> */}
      <form>
        {/* //REVIEW[epic=login, seq=9] 23- After failing the tests, we add the inputs and button*/}
        {/* Run the test after, should pass */}

        {/* //REVIEW[epic=login, seq=10] 24- Add a value to both imputs*/}
        {/* <input type="text" placeholder="userName" value="name" />
        <input type="password" placeholder="password" value="password" /> */}

        {/*  //REVIEW[epic=login, seq=12] 26- Remove value , and run tests again.They pass  */}
        {/* <input type="text" placeholder="userName" value={userName} />
        <input type="password" placeholder="password" value={password} /> */}

        {/* //REVIEW[epic=login, seq=14] 28- Add disabled property */}
        {/* <button disabled="true">login</button> */}

        {/* //REVIEW[epic=login, seq=15] 29- Create an error message */}
        {/* <span data-testid="error" style={{ color: "red" }}>
          Cannot log in
        </span> */}

        {/* //REVIEW[epic=login, seq=18] 32- Ad style hidden with ternary. Pass test*/}
        <span
          data-testid="error"
          style={{ color: "red", visibility: error ? "visible" : "hidden" }}
        >
          Cannot log in
        </span>

        {/* //REVIEW[epic=login, seq=21] 35- add onChange event to inputs
        event. and say the target.value. Run test, will pass */}
        {/* //* but button is still disabled */}
        <input
          type="text"
          placeholder="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/*  //REVIEW[epic=login, seq=23] 37- to pass test add disabled prop with ternary */}
        {/* <button disabled={!userName || !password}>login</button> */}

        {/*  //REVIEW[epic=login, seq=24] 38- Build HANDLECLIK()  to fetch to fake a login */}
        <button disabled={!userName || !password} onClick={handleClick}>
          {loading ? "...loading..." : "login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
