import React from 'react'
import { NavLink } from "react-router-dom";
import "./userCss/navbar.css";
export default function navbar() {
    return (
        <div className="userNavbar">
            <ul>
            <li ><NavLink to="/Dashboard">NeoParty</NavLink></li>
<li><NavLink to="/Dashboard">Dashboard</NavLink></li>
<li><NavLink to="/Profile">Profile</NavLink></li>
<li><NavLink to="/MyBooking">My Booking</NavLink></li>
  <li className="navbar-logout"><NavLink to="/login">Logout</NavLink></li>
</ul>
        </div>
    )
}
