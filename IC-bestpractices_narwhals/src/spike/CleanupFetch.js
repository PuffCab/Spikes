import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function CleanupFetch() {
  const [user, setUser] = useState({});
  const [id, setId] = useState(1);

  const location = useLocation();
  // console.log("location", location);
  const userId = location.pathname.split("/")[2];
  // console.log("userId :>> ", userId);
  useEffect(() => {
    // let isSubscribed = true;
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        { signal }
      );
      const result = await response.json();
      // if (isSubscribed === true) {
      //   setUser(result);
      // }
      setUser(result);
    };
    fetchData();

    return () => {
      // isSubscribed = false;
      controller.abort();
    };
  }, [userId]);

  return (
    <div>
      <h2>Clean up with Fetch function</h2>
      <div>
        <p>{user.name}</p> <p>{user.username}</p> <p>{user.email}</p>
        <button onClick={() => setId(1)}> fetch user 1</button>
        <button onClick={() => setId(2)}> fetch user 2</button>
        <button onClick={() => setId(3)}> fetch user 3</button>
        <Link to="/users/1">user 1</Link> <Link to="/users/2">user 2</Link>{" "}
        <Link to="/users/3">user 3</Link>{" "}
      </div>
    </div>
  );
}

export default CleanupFetch;
