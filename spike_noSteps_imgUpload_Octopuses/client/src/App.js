import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [selectedFile, setSelectedFile] = useState([{}]);

  const [newUser, setNewUser] = useState({});

  const getCities = async () => {
    const response = await fetch("http://localhost:5001/api/cities/all");
    const results = await response.json();
    console.log("results", results);
  };

  useEffect(() => {
    getCities();
  }, []);

  const handleUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadPicture = async (e) => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("image", selectedFile);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "http://localhost:5001/api/users/imageupload",
        requestOptions
      );
      const result = await response.json();
      console.log("result", result);
      setNewUser({ ...newUser, avatarPicture: result.image });
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const handleChangeHandler = (e) => {
    console.log(
      "[e.target.name]: e.target.value",
      e.target.name,
      e.target.value
    );
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const signup = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("email", newUser.email);
    urlencoded.append("password", newUser.password);
    urlencoded.append("userName", newUser.userName);
    urlencoded.append(
      "avatarPicture",
      newUser.avatarPicture
        ? newUser.avatarPicture
        : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
    );

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    const response = await fetch(
      "http://localhost:5001/api/users/signup",
      requestOptions
    );
    const result = await response.json();
    console.log("result :>> ", result);
  };
  return (
    <div className="App">
      <h2>Image Upload</h2>
      <div className="container">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={newUser.userName ? newUser.userName : ""}
          name="userName"
          onChange={handleChangeHandler}
        />
        <label htmlFor="email">email</label>
        <input
          id="email"
          type="text"
          value={newUser.email ? newUser.email : ""}
          name="email"
          onChange={handleChangeHandler}
        />
        <label htmlFor="password">password</label>
        <input
          id="password"
          type="text"
          value={newUser.password ? newUser.password : ""}
          name="password"
          onChange={handleChangeHandler}
        />
      </div>
      <form>
        <input type="file" name="file" id="file" onChange={handleUpload} />
        <button onClick={uploadPicture}>upload picture</button>
      </form>
      {newUser && (
        <img
          src={newUser.avatarPicture}
          alt="user profile pic"
          style={{ width: "200px" }}
        />
      )}
      <button onClick={signup}>Sign up</button>
    </div>
  );
}

export default App;
