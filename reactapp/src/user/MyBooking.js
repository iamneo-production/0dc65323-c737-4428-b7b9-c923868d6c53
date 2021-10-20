import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
import "./userCss/mybooking.css";
export default function UserBooking() {
  return (
    <>
      <Navbar />
      <div className="userBookingBody">
        <table id="userBookingBody">
          <tr class="headerbar">
            <td>Company Name</td>
            <td>Event Name</td>
            <td>Hall Price</td>
            <td>Days</td>
            <td>Total Price</td>
          </tr>
          <tr>
            <td>Company Name</td>
            <td>Event Name</td>
            <td>Hall Price</td>
            <td>Days</td>
            <td>Total Price</td>
          </tr>
          <tr>
            <td>Company Name</td>
            <td>Event Name</td>
            <td>Hall Price</td>
            <td>Days</td>
            <td>Total Price</td>
          </tr>
          <tr>
            <td>Company Name</td>
            <td>Event Name</td>
            <td>Hall Price</td>
            <td>Days</td>
            <td>Total Price</td>
          </tr>
          <tr>
            <td>Company Name</td>
            <td>Event Name</td>
            <td>Hall Price</td>
            <td>Days</td>
            <td>Total Price</td>
          </tr>
        </table>
      </div>
    </>
  );
}
