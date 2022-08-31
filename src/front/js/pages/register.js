import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Register = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState ( null);

  const sendUserInfo = async () => {
    if (user.email != null && user.email.trim() != "" ){
      setError(null)
    const response = await fetch(
      "https://3001-efornies-jwtauthenticat-1nyk8c8ihtj.ws-eu63.gitpod.io/api/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
    const data = await response.json();
    
  } else {
      setError("Bad Info");
  }
    if (data.created) {
      history.push("/login");
    }
  };

  return (
    <div className="text-center mt-5">
      <div className="row">
        <label htmlFor="email" className="col-1">
          Email
        </label>
        <input
          id="email"
          className="col-3"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
        <label htmlFor="password" className="col-1">
          Password
        </label>
        <input
          id="password"
          className="col-3"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></input>
        <button className="col-2 offset-1" onClick={() => sendUserInfo()}>
          Register new user
        </button>
      </div>
      {error != null ? <h3 className="text-danger"> {error}</h3> : null}
    </div>
   
  );
};