import React from "react";
import "./css/booking.css";
import Navbar from "./navbar";

export default function Booking() {
  return (
    <>
      <Navbar />
      <div className="booking">
        <table id="booking" className="booking-content">
          <thead className="booking-head">
            <tr>
              <th>Booking ID</th>
              <th>User ID</th>
              <th>Event Date</th>
              <th>Hall Price</th>
              <th>Days</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody className="booking-body">
            <tr>
              <td>Booking ID</td>
              <td>User ID</td>
              <td>Event Date</td>
              <td>Hall Price</td>
              <td>Days</td>
              <td>Total Price</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
