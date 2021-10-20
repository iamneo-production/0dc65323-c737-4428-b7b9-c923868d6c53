import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "./css/login.css";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  localStorage.setItem("email", email);

  const onSubmit = async () => {
    const body = {
      email: email,
      password: password,
    };

    console.log(body);
    try {
      const url = "http://localhost:8080/auth/isAdminPresent";
      console.log(url);
      const response = await axios.get(url, body, {
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
    <div className="signin" id="loginBox">
      <form id="signin">
        <div className="login-title">LOGIN</div>

        <div className="form-group">
          <input
            type="email"
            className="login-input"
            placeholder="Enter Email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="login-input"
            placeholder="Enter Password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="submit"
          id="adminSignupLink"
          onClick={() => onSubmit()}
        >
          Submit
        </button>
        <div className="loginlink">
          <p>
            New to Booking?{" "}
            <Link to="/admin/signup" className="login-click">
              Click Here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
