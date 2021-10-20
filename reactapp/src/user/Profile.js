import React from "react";
// import { useScreenClass } from 'react-grid-system';
import Navbar from "./navbar";
import "./userCss/userprofile.css";
import img from "./profilepic.jfif";
import { Link } from "react-router-dom";

export default function Profile() {
  // const screenClass = useScreenClass();
  return (
    <>
      <Navbar />
      <div className="details" id="adminProfile">
        <div className="profile-content">
          <table className="detail-left">
            <tr>
              <td className="left-label">Name</td>
              <td>: Seller 1</td>
            </tr>
            <tr>
              <td className="left-label">Email</td>
              <td>: seller01@iamneo.ai</td>
            </tr>
            <tr>
              <td className="left-label">Mobile No</td>
              <td>: 9999999999</td>
            </tr>
            <tr>
              <td className="left-label">Password</td>
              <td>: ******</td>
            </tr>
            <tr>
              <td className="left-label">Age</td>
              <td>: 27</td>
            </tr>
            <tr>
              <td className="left-label">Mobile Number</td>
              <td>: 9872662421</td>
            </tr>
          </table>
        </div>
        <div className="profilephoto">
          <div className="imgdiv">
            <img
              className="img"
              src={img}
              width="250"
              height="250"
              alt="profile-pic"
            />
          </div>
          <Link to="/user/edit-profile" className="editProfile-btn">
            <button type="submit" className="submit" id="editAdminProfile">
              <img src="../images/edit.png" alt="edit" width="18" height="16" />{" "}
              <span className="edit-text">Edit Profile</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
