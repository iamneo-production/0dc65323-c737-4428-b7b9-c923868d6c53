import React from "react";
import { Link } from "react-router-dom";
import "./css/navbar.css";

export default function navbar() {
  return (
    // <nav>
    <div className="nav" id="adminNavbar">
      <div className="nav-left">
        <div>
          <Link to="/" className="nav-link logo" exact>
            Neo Party
          </Link>
        </div>
        <div>
          <Link to="/" className="nav-link" exact id="adminDashboardLink">
            <img
              className="dashboard-icon"
              src="images/dashboard.png"
              alt="dashboard"
            />{" "}
            Dashboard
          </Link>
        </div>
        <div>
          <Link to="/profile" className="nav-link" id="adminProfileLink" exact>
            <img
              className="profile-icon"
              src="images/profile.png"
              alt="profile"
            />{" "}
            Profile
          </Link>
        </div>
        <div>
          <Link to="/booking" className="nav-link" id="adminBookingLink" exact>
            <img
              className="booking-icon"
              src="images/booking.png"
              alt="booking"
            />{" "}
            Booking
          </Link>
        </div>
      </div>
      <div className="nav-right">
        <Link
          to="/login"
          className="nav-link nav-link-right"
          id="adminLogoutButton"
          exact
        >
          Logout
        </Link>
      </div>
      {/* <li>
                    <Link to="/signin/Signin" className="nav-link nav-link-right" exact>
                        Signin
                    </Link>
                </li>
                <li>
                    <Link to="/signup/Signup" className="nav-link nav-link-right" exact>
                        Signup
                    </Link>
                </li> */}
    </div>
    // </nav>
  );
}
