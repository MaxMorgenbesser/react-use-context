import { useState, useContext } from "react";
import { userInfoContext } from "../App";

const Login = () => {
  const { setIsLoggedIn, setUser } = useContext(userInfoContext);
  const handleLogin = () => {
    setIsLoggedIn(true);
    setUser({ name: "Jonathon", position: "drums", band: "Lane Brandon" });
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default Login;
