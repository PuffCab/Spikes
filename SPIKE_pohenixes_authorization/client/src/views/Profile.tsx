import React, { useState } from "react";
import checkUserStatus from "../utils/checkUserStatus";

type Props = {};

const Profile = (props: Props) => {
  const [user, setUser] = useState<User>({
    userName: "",
    email: "",
    avatar: "",
  });

  const [error, setError] = useState<ResponseError>(null);
  const getProfile = async () => {
    const token = checkUserStatus();

    if (token) {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
      };

      try {
        const response = await fetch(
          "http://localhost:5001/api/users/profile",
          requestOptions
        );
        console.log("response", response);

        if (response.ok) {
          const result: FetchProfileResult = await response.json();
          setUser(result.user);
          setError(null);
        } else if (!response.ok && response.status === 401) {
          setError(response.statusText);
        } else {
          const result: FetchError = await response.json();
          setError(result.error);
        }
      } catch (error) {
        console.log("error", error);
      }
    } else {
      setError("please login first");
      setUser({
        userName: "",
        email: "",
        avatar: "",
      });
    }
  };
  return (
    <div>
      <h1>User Profile</h1>
      {error && <h3>{error}</h3>}
      <button style={{ backgroundColor: "blue" }} onClick={getProfile}>
        See Profile
      </button>

      {user && (
        <div>
          <p>{user.userName}</p>
          <p>{user.email}</p>
          <img src={user.avatar} alt="" style={{ width: "200px" }} />
        </div>
      )}
    </div>
  );
};

export default Profile;
