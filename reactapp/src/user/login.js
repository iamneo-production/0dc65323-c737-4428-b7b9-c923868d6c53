import React from "react";
import "./userCss/login.css";
import { NavLink } from "react-router-dom";

export default function UserLogin() {
  return (
    <div>
      <form id="signin">
        <p className="title">LOGIN</p>

        <div className="form-group">
          <input type="email" className="emails" placeholder="Enter Username" />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="passwords"
            placeholder="Enter Password"
          />
        </div>

        <NavLink to="/Dashboard">
          {" "}
          <button type="submit" className="submitButtons">
            Submit
          </button>
        </NavLink>
        <div className="userSignupLink">
          <p>
            New to Booking? <NavLink to="/SignUp">Click Here</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}
