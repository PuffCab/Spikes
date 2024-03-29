/* eslint-disable @typescript-eslint/no-misused-promises */
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [email, setEmail] = useState(user ? user.email : "");
  const [userName, setuserName] = useState(
    user ? (user.userName !== undefined ? user.userName : "") : ""
  );

  console.log("userName", userName);

  const handleSubmit = async () => {
    await updateUser({ email, userName });
  };

  if (user)
    return (
      <div>
        <h1>{user.userName ? user.userName : "Anonymous"}'s Profile</h1>
        <input
          type="email"
          value={email}
          placeholder={user.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={userName}
          placeholder={user.userName ? user.userName : "Choose a userName"}
          onChange={(e) => setuserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Update!</button>
      </div>
    );
};

export default Profile;
