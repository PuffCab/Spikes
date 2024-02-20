import React, { ChangeEvent, FormEvent, useState } from "react";
import { UploadFileResponse } from "../@types";

type UserCredentials = {
  email: string;
  password: string;
  userName: string;
  userImage: string;
};

type RegisterResponse = {
  message: string;
  error: boolean;
  data: {
    user: UserCredentials;
  };
};

function Register() {
  const [selectedFile, setSelectedFile] = useState<File | string>("");
  const [userCredentials, setUserCredentials] =
    useState<UserCredentials | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    console.log("e.target.file :>> ", e.target.files?.[0]);
    setSelectedFile(e.target.files?.[0] || "");
  };

  const handleInputCredentialsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...(userCredentials as UserCredentials),
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitImage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("selectedFile to send :>> ", selectedFile);
    const formdata = new FormData();
    formdata.append("userImage", selectedFile);

    const requestOptions = {
      method: "POST",
      body: formdata,
    };
    try {
      const response = await fetch(
        "http://localhost:5002/api/users/pictureUpload",
        requestOptions
      );
      console.log("response :>> ", response);

      if (response.ok) {
        const result = (await response.json()) as UploadFileResponse;
        // console.log("result :>> ", result);
        console.log("result :>> ", result.data.imageUrl);
        setUserCredentials({
          ...(userCredentials as UserCredentials),
          userImage: result.data.imageUrl,
        });
      }
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const handleSubmitRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    //We use an if statement, to make sure userCredentials exists. This will prevent TS error when appending inputs to requesst like urlencoded.append("email", userCredentials.email);
    //this will also help us to add some error handling in the else{}, and give fedback to the user.
    if (userCredentials) {
      const urlencoded = new URLSearchParams();
      urlencoded.append("email", userCredentials.email);
      urlencoded.append("password", userCredentials.password);
      urlencoded.append("userName", userCredentials.userName);
      urlencoded.append(
        "userImage",
        userCredentials?.userImage
          ? userCredentials.userImage
          : "https://as1.ftcdn.net/v2/jpg/03/39/45/96/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg"
      );

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
      };
      try {
        const response = await fetch(
          "http://localhost:5002/api/users/signup?",
          requestOptions
        );

        //During Spike I left the result below without typing.
        const result = (await response.json()) as RegisterResponse;
        console.log("result :>> ", result);
        //After getting the result of our fetch, with the user information, we should "update" the user variable from AuthContext with this information
      } catch (error) {
        console.log("error :>> ", error);
      }
    } else {
      console.log("enter required fields first");
    }
  };

  return (
    <>
      <h1>Register</h1>
      <div>
        <div>
          <form onSubmit={(e) => void handleSubmitImage(e)}>
            {/* <form onSubmit={handleSubmitImage}> */}
            <input type="file" name="file" onChange={handleFileSelect} />
            <button type="submit">upload picture</button>
          </form>
        </div>
        <br />
        <div>
          <form onSubmit={(e) => void handleSubmitRegister(e)}>
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              name="userName"
              id="userName"
              onChange={handleInputCredentialsChange}
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleInputCredentialsChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleInputCredentialsChange}
            />
            <button>Register</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
