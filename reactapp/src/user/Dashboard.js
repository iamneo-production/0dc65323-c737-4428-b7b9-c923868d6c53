import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import "./userCss/dashboard.css";
export default function UserDashboard() {
  return (
    <>
      <Navbar />
      <div className="userDashboard">
        <div className="company-detail">
          <Link to="/user/company-details" className="company-link">
            <div className="img-detail">
              <img src="../images/company-profile.png" alt="company-img" />
              <div className="company-name">Company Name</div>
            </div>
            <div className="comp">Company Address</div>
            <div className="comp">Mobile Number</div>
          </Link>
        </div>
        <div className="company-detail">
          <Link to="/user/company-details" className="company-link">
            <div className="img-detail">
              <img src="../images/company-profile.png" alt="company-img" />
              <div className="company-name">Company Name</div>
            </div>
            <div className="comp">Company Address</div>
            <div className="comp">Mobile Number</div>
          </Link>
        </div>
        <div className="company-detail">
          <Link to="/user/company-details" className="company-link">
            <div className="img-detail">
              <img src="../images/company-profile.png" alt="company-img" />
              <div className="company-name">Company Name</div>
            </div>
            <div className="comp">Company Address</div>
            <div className="comp">Mobile Number</div>
          </Link>
        </div>
      </div>
    </>
  );
}
