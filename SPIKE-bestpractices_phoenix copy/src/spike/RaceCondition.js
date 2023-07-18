import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function RaceCondition() {
  const [user, setUser] = useState({});

  const location = useLocation();
  const number = location.pathname.split("/")[2];

  useEffect(() => {
    // let isSubcribed = true;
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${number}`,
        { signal }
      );
      const result = await response.json();
      // if (isSubcribed === true) {
      //   setUser(result);
      // }
      setUser(result);
    };
    fetchData();

    return () => {
      // isSubcribed = false;
      controller.abort();
    };
  }, [number]);

  return (
    <div>
      <h2>Race Condition</h2>
      <div>
        <p>{user.name}</p> <p>{user.username}</p> <p>{user.email}</p>
        <Link to="/users/1"> fetch user 1</Link> {""} |
        <Link to="/users/2"> fetch user 2</Link> {""} |
        <Link to="/users/3"> fetch user 3</Link>
      </div>
    </div>
  );
}

export default RaceCondition;
