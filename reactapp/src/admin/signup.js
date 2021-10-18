import React from "react";
import { Link } from "react-router-dom";
import "./css/signup.css";
export default function signup() {
  return (
    <div className="signup" id="signupbox">
      <form id="signup">
        <div className="signup-title">SIGN UP</div>

        <div className="form-group" >
          <input
            type="email"
            className="signup-input"
            placeholder="Enter Email"
            id="email"
          />
        </div>

        <div className="form-group" >
          <input
            type="password"
            className="signup-input"
            placeholder="Enter Password"
            id="password"
          />
        </div>

        <div className="form-group" >
          <input
            type="text"
            className="signup-input"
            placeholder="Enter Mobile Number"
            id="mobilenumber"
          />
        </div>

        <div className="form-group" >
          <select className="signup-select" id="userrole">
            <option className="option" value="Admin">
              Admin
            </option>
            <option className="option" value="Super Admin">
              Super Admin
            </option>
          </select>
        </div>

        <div className="form-group" >
          <input
            type="text"
            className="signup-input"
            placeholder="Enter Seller Name"
            id="adminname"
          />
        </div>

        <div className="form-group" >
          <input
            type="text"
            className="signup-input"
            placeholder="Enter Company Name"
            id="companyname"
          />
        </div>

        <div className="form-group" >
          <input
            type="text"
            className="signup-input"
            placeholder="Enter Company Image Url"
            id="companyimageURL"
          />
        </div>

        <div className="form-group" >
          <input
            type="text"
            className="signup-input"
            placeholder="Enter Company Adress"
            id="companyaddress"
          />
        </div>

        <button type="submit" className="submit" id="submitButton">
          Submit
        </button>
        <div className="signuplink" id="adminloginLink">
          <p>
            Go to Login{" "}
            <Link to="/login" className="signup-click">
              Click Here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
