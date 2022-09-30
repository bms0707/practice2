import React from "react";
import "./Login.css";

function Main() {
  return (
    <div className="container">
      <h2 className="login">Login</h2>
      <div className="ip">
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="password"/> 
      </div>
      <button className="btn">Login</button>
      <div className="cf">
        <p>create new email</p>
        <p>Forgot password?</p>
      </div>
    </div>
  );
}

export default Main;