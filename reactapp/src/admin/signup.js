import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/signup.css";

export default function Signup() {
  const base_uri = process.env.BASE_URI;
  console.log(base_uri);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [userRole, setUserRole] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyImageUrl, setCompanyImageUrl] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");

  localStorage.setItem("email", email);

  const onSubmit = async () => {
    const body = {
      email: email,
      password: password,
      mobileNumber: mobileNumber,
      userRole: userRole,
      sellerName: sellerName,
      companyName: companyName,
      companyImageUrl: companyImageUrl,
      companyAddress: companyAddress,
    };

    try {
      const url = `http://localhost:8080/auth/saveAdmin`;
      console.log(url);
      const response = await axios.post(url, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = response.data;
      console.log(data);
    } catch (error) {
      // const message = error.response.error.message;
      // console.log(message);
    }
  };

  return (
    <div className="signup" id="signupbox">
      <form id="signup">
        <div className="signup-title">SIGN UP</div>

        <div className="form-group">
          <input
            type="email"
            className="signup-input"
            placeholder="Enter Email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="signup-input"
            placeholder="Enter Password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="signup-input"
            placeholder="Enter Mobile Number"
            id="mobilenumber"
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>

        <div className="form-group">
          <select
            className="signup-select"
            id="userrole"
            onChange={(e) => setUserRole(e.target.value)}
          >
            <option className="option" value="Select" selected disabled>
              Select
            </option>
            <option className="option" value="Admin">
              Admin
            </option>
            <option className="option" value="Super Admin">
              Super Admin
            </option>
          </select>
        </div>

        <div className="form-group">
          <input
            type="text"
            className="signup-input"
            placeholder="Enter Seller Name"
            id="adminname"
            onChange={(e) => setSellerName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="signup-input"
            placeholder="Enter Company Name"
            id="companyname"
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="signup-input"
            placeholder="Enter Company Image Url"
            id="companyimageURL"
            onChange={(e) => setCompanyImageUrl(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="signup-input"
            placeholder="Enter Company Adress"
            id="companyaddress"
            onChange={(e) => setCompanyAddress(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="submit"
          id="submitButton"
          onClick={() => onSubmit()}
        >
          Submit
        </button>
        <div className="signuplink" id="adminloginLink">
          <p>
            Go to Login{" "}
            <Link to="/admin/login" className="signup-click">
              Click Here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
