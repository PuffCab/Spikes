import React, { useContext } from "react";
import { CharactersContext } from "../context/charactersContext";
import { AuthContext} from "../context/authContext"
function Home() {
  const { characters } = useContext(CharactersContext);
  const {user} = useContext(AuthContext)
  return (
    <div>
      <h2>HOME</h2>
      {user && <h4> welcome {user.userName}</h4>}
      
      <h4>we have a list of {characters.length} characters</h4>
    </div>
  );
}

export default Home;
