import { useState, useContext } from "react";
import { userInfoContext } from "../App";

const Logout = () => {
  const { setIsLoggedIn, setUser } = useContext(userInfoContext);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
