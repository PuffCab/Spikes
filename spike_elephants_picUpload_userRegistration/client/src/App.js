import logo from "./logo.svg";
import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [newUser, setNewUser] = useState({});

  const fetchData = async () => {
    const response = await fetch("http://localhost:5001/api/cities/all");
    const data = await response.json();
    console.log("data :>> ", data);
  };

  const handleAttachPicture = (e) => {
    // console.log("e.target :>> ", e);
    setSelectedFile(e.target.files[0]);
  };
  const submitPicture = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("image", selectedFile);

    const requestOptions = {
      method: "POST",
      body: formdata,
    };

    fetch("http://localhost:5001/api/users/imageUpload", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("result", result);
        setNewUser({ ...newUser, userPicture: result.userPicture });
      })
      .catch((error) => console.log("error", error));
  };

  const handleInputChange = (e) => {
    // console.log(
    //   "e.target.name, e.target.value :>> ",
    //   e.target.name,
    //   e.target.value
    // );
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const signup = () => {
    // Check email format, password lenght ...avoid making useless requests to the server
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("password", newUser.password);
    urlencoded.append("userName", newUser.userName);
    urlencoded.append("email", newUser.email);
    urlencoded.append(
      "userPicture",
      newUser.userPicture
        ? newUser.userPicture
        : "https://cdn-icons-png.flaticon.com/512/634/634742.png"
    );

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:5001/api/users/signup", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  // Computed property Names
  // var randomValue = "skin";
  // var randomValue = "hair";
  // const person = {
  //   name: "john",
  //   age: 34,
  //   [randomValue]: "dark",
  // };

  // console.log("person[age]", person["age"]);
  // console.log("person :>> ", person);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Travel App</h1>

      <div>
        <div className="container">
          <input
            type="text"
            name="userName"
            id="userName"
            onChange={handleInputChange}
          />
          <label htmlFor="userName">User Name</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleInputChange}
          />
          <label htmlFor="email">email</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleInputChange}
          />
          <label htmlFor="password"> password</label>
        </div>

        <form>
          <input type="file" name="file" onChange={handleAttachPicture} />
          <button onClick={submitPicture}>upload</button>
        </form>
      </div>
      <button onClick={signup}>Signup</button>
      <div>{newUser && <img src={newUser.userPicture} alt="" />}</div>
    </div>
  );
}

export default App;
