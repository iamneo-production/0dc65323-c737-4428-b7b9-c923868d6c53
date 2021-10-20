import React from "react";
import { Link } from "react-router-dom";
import "./userCss/navbar.css";

export default function Navbar() {
  return (
    // <nav>
    <div className="nav" id="adminNavbar">
      <div className="nav-left">
        <div>
          <Link to="/user" className="nav-link logo" exact>
            Neo Party
          </Link>
        </div>
        <div>
          <Link to="/user" className="nav-link" exact id="adminDashboardLink">
            Dashboard
          </Link>
        </div>
        <div>
          <Link
            to="/user/profile"
            className="nav-link"
            id="adminProfileLink"
            exact
          >
            Profile
          </Link>
        </div>
        <div>
          <Link
            to="/user/booking"
            className="nav-link"
            id="adminBookingLink"
            exact
          >
            My Booking
          </Link>
        </div>
      </div>
      <div className="nav-right">
        <Link
          to="/user/login"
          className="nav-link nav-link-right"
          id="adminLogoutButton"
          exact
        >
          Logout
        </Link>
      </div>
    </div>
  );
}
