import React from 'react'
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
import img from "./userCss/profilepic (1).jfif";
import "./userCss/userprofile.css";
export default function Profile() {
    return (
      <>
          <Navbar/>
          <div className="details" id="userProfile">
                   <div className="profile-content">
                        <table   className="detail-left">
                            <tr>
                                 <td className="left-label">Name</td>
                                 <td>: Seller 1</td>
                            </tr>
                            <tr>
                                 <td className="left-label">Email </td>
                                 <td>: seller01@iamneo.ai</td>
                            </tr>
                            <tr>
                                   <td className="left-label">Mobile No</td>
                                        <td>: 9999999999</td>
                            </tr>
                            <tr>
                                      <td className="left-label">Password</td>
                                      <td>:  **********</td>
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
          <NavLink to="/profileEdit" className="editProfile-btn">
            <button type="submit" className="submit" id="editAdminProfile">
              <span className="edit-text">Edit Profile</span>
            </button>
          </NavLink>
        </div>
        </div>
       </>
    )
}
