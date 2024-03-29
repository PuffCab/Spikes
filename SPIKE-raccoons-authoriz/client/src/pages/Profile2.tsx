import React, { useState } from "react";
import { User } from "../@types/users";

type APIResponse<T> = {
  message: string;
  error: boolean;
  //   data: {
  //     user: T;
  //   };
  //!Changed back to the original idea for a resusable type, after adapting the shape of backend's response
  data: T;
};

function Profile2() {
  const [userProfle, setUserProfle] = useState<User>({} as User);

  const getProfile = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("login first");
    }
    if (token) {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
      };

      try {
        const response = await fetch(
          "http://localhost:5002/api/users/profile",
          requestOptions
        );

        if (response.ok) {
          const result = (await response.json()) as APIResponse<User>;
          console.log(result);
          setUserProfle(result.data);
        }
      } catch (error) {
        console.log("error :>> ", error);
      }
    }
  };

  return (
    <>
      <h1>Profile 2</h1>
      <button onClick={() => void getProfile()}>Get Profile</button>
      {userProfle && (
        <div>
          <h3>User Info</h3>
          <p>user name: {userProfle.userName}</p>
          <p>email: {userProfle.email}</p>
          <img
            src={userProfle.userImage}
            alt={userProfle.userName}
            style={{ width: "150px" }}
          />
        </div>
      )}
    </>
  );
}

export default Profile2;
