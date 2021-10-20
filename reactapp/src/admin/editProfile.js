import React from "react";
import "./css/editProfile.css";
import Navbar from "../admin/navbar";
import { Link } from "react-router-dom";

export default function EditProfile() {
  return (
    <>
      <Navbar />
      <div className="edit-profile" id="adminEditBox">
        <form id="edit-profile">
          <Link to="/admin/profile">
            <button type="submit" className="back">
              <img src="../images/back.png" alt="back" /> back
            </button>
          </Link>
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

          <label className="editProfile-label">Company Name</label>
          <div className="form-group">
            <input
              type="text"
              className="editProfile-input"
              placeholder="Enter Company Name"
              id="companyName"
            />
          </div>

          <label className="editProfile-label">Company Address</label>
          <div className="form-group">
            <input
              type="text"
              className="editProfile-input"
              placeholder="Enter Company Address"
              id="companyAddress"
            />
          </div>

          <Link to="/admin/profile" className="editProfileSave">
            <button
              type="submit"
              className="savechanges"
              id="profileEditButton"
            >
              Save Changes
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}
