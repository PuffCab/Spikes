import React, {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  useContext,
  useState,
} from "react";
import { User } from "../@types/users";
import { AuthContext } from "../context/AuthContext";

type LoginCredentials = {
  email: string;
  password: string;
};

type LoginDataType = {
  user: User;
  token: string;
};

type LoginResponse = {
  message: string;
  error: boolean;
  data: LoginDataType;
};

function Login() {
  const { login } = useContext(AuthContext);

  const [loginCredentials, setLoginCredentials] =
    useState<LoginCredentials | null>(null);
  //   const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({
  //     email: "",
  //     password: "",
  //   });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log("e.target.value :>> ", e.target.name, e.target.value);
    setLoginCredentials({
      ...(loginCredentials as LoginCredentials),
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(loginCredentials?.email, loginCredentials?.password);
  };

  return (
    <>
      <h1>Login</h1>

      <div>
        <form onSubmit={(e) => void handleSubmitLogin(e)}>
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={loginCredentials?.email}
            onChange={handleInputChange}
          />
          <label htmlFor="password">password</label>
          <input
            type="text"
            name="password"
            id="password"
            value={loginCredentials?.password}
            onChange={handleInputChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
