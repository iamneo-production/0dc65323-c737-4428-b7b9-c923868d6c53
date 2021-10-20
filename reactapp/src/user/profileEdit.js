import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
import "./userCss/userprofileedit.css";
export default function UserProfileEdit() {
  return (
    <>
      <Navbar />
      <div className="edit-profile" id="adminEditBox">
        <form id="edit-profile">
          <NavLink to="/Profile">
            {" "}
            <button type="submit" className="back">
              back
            </button>
          </NavLink>
          <br />
          <label className="editProfile-label">Name</label>
          <div className="form-group">
            <input
              type="text"
              className="editProfile-input"
              placeholder="Enter Name"
              id="adminName"
            />
          </div>

          <label className="editProfile-label">Email</label>
          <div className="form-group">
            <input
              type="email"
              className="editProfile-input"
              placeholder="Enter Email"
              id="adminEmail"
            />
          </div>

          <label className="editProfile-label">Mobile Number</label>
          <div className="form-group">
            <input
              type="tel"
              className="editProfile-input"
              placeholder="Enter Mobile Number"
              id="adminMobilenumber"
            />
          </div>

          <label className="editProfile-label">Password</label>
          <div className="form-group">
            <input
              type="password"
              className="editProfile-input"
              placeholder="Enter Password"
              id="adminPassword"
            />
          </div>

          <label className="editProfile-label"> Age</label>
          <div className="form-group">
            <input
              type="number"
              className="editProfile-input"
              placeholder="Enter Age"
              id="companyName"
            />
          </div>

          <NavLink to="/Profile">
            <button
              type="submit"
              className="savechanges"
              id="profileEditButton"
            >
              Save Changes
            </button>
          </NavLink>
        </form>
      </div>
    </>
  );
}
