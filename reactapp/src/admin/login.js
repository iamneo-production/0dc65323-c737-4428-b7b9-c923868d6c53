import React from "react";
import { Link } from "react-router-dom";
import "./css/login.css";

export default function login() {
  return (
    <div className="signin" id="loginBox">
      <form id="signin">
        <div className="login-title">LOGIN</div>

        <div className="form-group" >
          <input
            type="email"
            className="login-input"
            placeholder="Enter Email"
            id="email"
          />
        </div>

        <div className="form-group" >
          <input
            type="password"
            className="login-input"
            placeholder="Enter Password"
            id="password"
          />
        </div>

        <button type="submit" className="submit" id="adminSignupLink">
          Submit
        </button>
        <div className="loginlink">
          <p>
            New to Booking?{" "}
            <Link to="/signup" className="login-click">
              Click Here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
