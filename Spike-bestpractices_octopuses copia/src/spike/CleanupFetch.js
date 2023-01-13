import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function CleanupFetch() {
  const [user, setUser] = useState({});
  const [id, setId] = useState(1);

  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  console.log("userId :>> ", userId);
  useEffect(() => {
    // let isCancelled = false;
    // let isSubscribed = true
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        { signal }
      );
      const result = await response.json();
      // if (!isCancelled) {
      //   setUser(result);
      // }
      setUser(result);
    };
    fetchData();

    return () => {
      // isCancelled = true;
      controller.abort();
    };
  }, [userId]);

  return (
    <div>
      <h2>Clean Up The Mess (Firekid), by Alice Wonder </h2>
      <div>
        <p>{user.name}</p> <p>{user.username}</p> <p>{user.email}</p>
        {/* <button onClick={() => setId(1)}> fetch user 1</button>
        <button onClick={() => setId(2)}> fetch user 2</button>
        <button onClick={() => setId(3)}> fetch user 3</button> */}
        <Link to="/user/1">Leanne</Link> |<Link to="/user/2">Ervin</Link> |
        <Link to="/user/3">Clementine</Link>
      </div>
    </div>
  );
}

export default CleanupFetch;
