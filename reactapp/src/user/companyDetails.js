import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
import "./userCss/companyDetails.css";
export default function UserCompanyDetails() {
  return (
    <>
      <Navbar />
      <div className="companyDetails">
        {" "}
        <div class="container">
          <p>Company Name </p>
          <p>1/7A , Area Locality ,</p>
          <p>District , Pincode,</p>
          <p>9876543210</p>
        </div>
        <div class="box">
          <table>
            <tr>
              <td>Event Date : Date</td>
              <td>Hall Price </td>
              <td>Hall Type </td>
              <NavLink to="/hallBookingPage">
                {" "}
                <td class="booked">
                  <b>Booked </b>
                </td>
              </NavLink>
            </tr>
          </table>
          {/* <table>
            <tr>
                <td>Event Date : Date</td>
                <td>Hall Price </td>
                <td>Hall Type </td>
               <NavLink to="/hallBookingPage"> <td class="Available">Available</td></NavLink>
            </tr>
        </table>
        <table>
            <tr>
                <td>Event Date : Date</td>
                <td>Hall Price </td>
                <td>Hall Type </td>
                <NavLink to="/hallBookingPage">     <td class="Available">Available</td></NavLink>
            </tr>
            </table> */}
        </div>
      </div>{" "}
    </>
  );
}
