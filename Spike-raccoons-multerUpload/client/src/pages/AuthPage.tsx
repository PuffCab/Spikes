import { useContext } from "react";
import AuthForm from "../components/AuthForm";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const AuthPage = () => {
  const { user, login, signup } = useContext(AuthContext);
  if (user) return <Navigate to={"/"} />;
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1);
  }
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1);
  }
  return (
    <div>
      <h1>Real functionality coming soon!</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          textAlign: "center",
          height: "20rem",
        }}
      >
        <div style={{ borderRight: "solid black 2px" }}>
          <h1>Login</h1>
          <AuthForm submitTitle="login" submit={login} />
        </div>
        <div>
          <h1>Sign up</h1>
          <AuthForm
            submitTitle="signup"
            submit={signup}
            isInput={true}
            Tag="input"
            ButtonTag="button"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
