import React, { useState } from "react";
import "./Register.css";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

function Register() {
  const baseURL = "http://165.22.115.227:3021";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPasswordConfirm] = useState("");

  const registerUser = async (data) => {
    const response = await fetch(`${baseURL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const data = await response.json();
      alert("registration complete");
      window.location = "/";
    } else {
      const error = await response.json();
      alert(error.response_description);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      password_confirm,
    };

    registerUser(data);
  };
  return (
    <div className="registerContainer">
      <h2>Register</h2>
      <form>
        <div className="register_input">
          <input
            placeholder="Input Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
        </div>
        <div className="register_input">
          <input
            placeholder="Input Password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="register_input">
          <input
            placeholder="Input Confirm Password"
            type="text"
            value={password_confirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <Button className="tweetBox__tweetButton" onClick={handleSubmit}>
          Sign Up
        </Button>
      </form>

      <span className="linkTextB">Already Registered? </span>
      <NavLink to="/">
        <span className="linkText">Sign In</span>
      </NavLink>
      <span className="linkTextB">Instead</span>
    </div>
  );
}

export default Register;
