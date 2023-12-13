import React, { ChangeEvent, FormEvent, useState } from "react";
type UserImageType = {
  userImage: string;
};

interface User extends UserImageType {
  userName: string;
  email: string;
  password: string;
}

function Register() {
  const [selectedFile, setSelectedFile] = useState<File | string>("");

  const [newUser, setNewUser] = useState<User | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log("e.target :>> ", e);
    const file = e.target.files?.[0] || "";
    setSelectedFile(file);
  };

  const handleRegisterInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("e.target.name :>> ", e.target.name);
    console.log("e.target.value :>> ", e.target.value);

    setNewUser({ ...newUser!, [e.target.name]: e.target.value });
  };

  const uploadImage = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("image", selectedFile);

    const requestOptions = {
      method: "POST",
      body: formdata,
    };

    try {
      const response = await fetch(
        "http://localhost:5001/api/users/imageUpload",
        requestOptions
      );

      const result = await response.json();
      //   const userImage: UserImageType = result?.userImage;
      const userImage: UserImageType = result?.userImage;
      console.log("userImage :>> ", userImage);
      console.log("result :>> ", result);

      setNewUser({ ...newUser!, userImage: userImage.userImage });
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const register = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("newUser :>> ", newUser);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("userName", newUser!.userName);
    urlencoded.append("email", newUser!.email);
    urlencoded.append("password", newUser!.password);
    urlencoded.append(
      "image",
      newUser!.userImage
        ? newUser!.userImage
        : "https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
    );

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };

    fetch("http://localhost:5001/api/users/register", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log("result", result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <h3>Register</h3>
      <div className="input-container">
        <form onSubmit={register} action="" className="input-container">
          <input
            type="text"
            name="userName"
            id="userName"
            onChange={handleRegisterInputChange}
          />
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleRegisterInputChange}
          />
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="password"
            id="password"
            onChange={handleRegisterInputChange}
          />
          <label htmlFor="password">password</label>
          <button>register</button>
        </form>
        <form onSubmit={uploadImage}>
          <input type="file" onChange={handleInputChange} />
          <button onClick={uploadImage}>Upload picture</button>
        </form>
        {newUser && <img src={newUser?.userImage} alt="user image" />}
      </div>
    </div>
  );
}

export default Register;
