import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function RaceCondition() {
  const [user, setUser] = useState({});

  const location = useLocation();
  const number = location.pathname.split("/")[2];

  useEffect(() => {
    // let controller = new AbortController();
    let isSubscribed = true;
    // const signal = controller.signal;
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${number}`
      );
      const result = await response.json();
      if (isSubscribed) {
        setUser(result);
      }
    };
    fetchData();

    return () => {
      // controller.abort();
      isSubscribed = false;
    };
  }, [number]);

  return (
    <div>
      <h2>Bicycle Race, by Queen</h2>
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
