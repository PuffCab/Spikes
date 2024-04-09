import React, { useState, useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
function RaceCondition() {
  const [user, setUser] = useState({});
  const [id, setId] = useState(1);

  //= Using location and <Link to="/users/3">
  // const location = useLocation();
  // const number = location.pathname.split("/")[2];
  // console.log("number", number);
  //=//////

  // useEffect(() => {
  //   let subcribed = true;
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       `https://jsonplaceholder.typicode.com/users/${id}`
  //     );
  //     const result = await response.json();
  //     if (subcribed) {
  //       setUser(result);
  //     }
  //   };
  //   fetchData();
  //   return () => {
  //     console.log("canceled");
  //     subcribed = false;
  //   };
  // }, [id]);

  //= With AbortController()
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        { signal }
      );
      const result = await response.json();
      setUser(result);
    };
    fetchData();
    return () => {
      console.log("canceled");
      controller.abort();
    };
  }, [id]);

  //= //////

  return (
    <div>
      <h2>Clean up with Fetch function</h2>
      <div>
        <p>{user.name}</p> <p>{user.username}</p> <p>{user.email}</p>
        <button onClick={() => setId(1)}> fetch user 1</button>
        <button onClick={() => setId(2)}> fetch user 2</button>
        <button onClick={() => setId(3)}> fetch user 3</button>
        {/* <Link to="/users/1">user 1</Link> */}
        <br />
        {/* <Link to="/users/2">user 2</Link> */}
        <br />
        {/* <Link to="/users/3">user 3</Link> */}
      </div>
    </div>
  );
}

export default RaceCondition;
