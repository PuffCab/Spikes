import { ChangeEvent, FormEvent, useEffect, useState } from "react";

type LoginCredentialsType = {
  email: string;
  password: string;
};

function Login() {
  const [loginCredentials, setLoginCredentials] =
    useState<LoginCredentialsType | null>(null);

  const handleLoginInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const propertyName = e.target.name;
    const propertyValue = e.target.value;
    // console.log(
    //   "propertyName, propertyValue :>> ",
    //   propertyName,
    //   propertyValue
    // );

    setLoginCredentials({
      ...loginCredentials!,
      [propertyName]: propertyValue,
    });
  };

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("loginCredentials :>> ", loginCredentials);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("email", loginCredentials!.email);
    urlencoded.append("password", loginCredentials!.password);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };

    try {
      const response = await fetch(
        "http://localhost:5001/api/users/login",
        requestOptions
      );
      console.log("response :>> ", response);

      if (response.ok) {
        const result = await response.json();
        console.log("result :>> ", result);
        if (result.token) {
          //if we have a token in the response, we store it
          localStorage.setItem("token", result.token);
          //set your user object with the user information
        }
      }
      if (!response.ok) {
        const result = await response.json();
        console.log("result not ok response :>> ", result);
        alert(result.message);
      }
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  //the two  functions below, they probably belong better to another file (utilities, context...etc..)
  const getToken = () => {
    const token = localStorage.getItem("token");
    return token;
  };

  const isUserLoggedIn = () => {
    const token = getToken();

    return token ? true : false;
  };

  useEffect(() => {
    const isUserLogged = isUserLoggedIn();
    if (isUserLogged) {
      console.log("%c user is logged in", "color:green");
    } else {
      console.log("%c user is NOT logged in", "color:red");
    }
  }, []);

  return (
    <div>
      <h3>Login</h3>
      <div className="input-container">
        <form onSubmit={login} action="" className="input-container">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleLoginInputChange}
          />
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="password"
            id="password"
            onChange={handleLoginInputChange}
          />
          <label htmlFor="password">password</label>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
