import React from 'react'
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
import "./userCss/dashboard.css";
export default function Dashboard() {
    return (
        <>
       <Navbar/>
      <div className="userDashboard">
      <NavLink to="/companyDetails"> <div className="Company_one">
                 <img src="Capture.png"></img>
                  <p1>Company Name</p1>
                  <p2>Company Address</p2>
                  <p3>Mobile Number </p3>
             </div></NavLink> 
             <NavLink to="/companyDetails">     <div className="Company_two">
                 <img src="Capture.png"></img>
                  <p1>Company Name</p1>
                  <p2>Company Address</p2>
                  <p3>Mobile Number </p3>
             </div> </NavLink>
             <NavLink to="/companyDetails">        <div className="Company_three">
                 <img src="Capture.png"></img>
                  <p1>Company Name</p1>
                  <p2>Company Address</p2>
                  <p3>Mobile Number </p3>
             </div> </NavLink>
        </div></>
    )
}
