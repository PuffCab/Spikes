import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [characters, setCharacters] = useState([]);
  console.log("navbar mount");
  const fetchData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const result = await response.json();
      console.log("result :>> ", result.results);

      setCharacters(result.results);

      console.log(result.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    console.log("useEff run");
    fetchData();
  }, []);
  return (
    <nav>
      {/* {console.log("characters :>> ", characters)} */}
      <NavLink
        to="/"
        style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
      >
        Home
      </NavLink>{" "}
      |{" "}
      <Link to="contact" state={{ characters: characters }}>
        Contact
      </Link>{" "}
      | <Link to="characters">Characters</Link> | <Link to="login">Login</Link>{" "}
      | <Link to="evolution">Evolution</Link>
    </nav>
  );
}

export default Navbar;
