import React from "react";
import {Login} from "./components/login/Login";
import { useMoralis } from "react-moralis";

export const App = (props) => {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();

  
  if (!isAuthenticated) {
    return (
      <Login />
    );
  }

  return (
    <div className="nabbar">
      <h1>Welcome {user.get("username")}</h1>
      <button onClick={() => logout()}>Logout</button>
      {props.children}
    </div>
  );
};