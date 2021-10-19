import React from 'react'
import "./userCss/signup.css"
import { NavLink } from "react-router-dom";
export default function SignUp() {
    return (
        
        <div className="SignUpBox" id="SignUpBox">
            <h4>SIGN UP</h4>
                 <div class="email" id="email">   
                        <input type="text" class="form-control" name="username" placeholder="Enter Email" required="required" />
                </div>
                <div class="password" id="password">   
                        <input type="text" class="form-control" name="password" placeholder="Password" required="required" />
                </div>
                <div class="mobilenumber" id="mobilenumber">   
                        <input type="text" class="form-control" name="mobile" placeholder="Enter Mobile Number" required="required" />
                </div>
                <div class="userrole" id="userrole">   
                        <select  class="form-control"  name="userrole" required="required" >
                               <option value="">User</option>
                                <option value="Super Admin">Super Admin</option>
                                <option value="Admin">Admin</option>
                                <option value="Customer">Customer</option>
                                </select>
                </div>
                <div class="username" id="username">   
                        <input type="text" class="form-control" name="username" placeholder="Enter Username" required="required" />
                </div>
                <div class="age" id="age">   
                        <input type="text" class="form-control" name="age" placeholder="Enter Age" required="required" />
                </div>
                <div class="submitButton" id="submitButton">
                  <NavLink to="/Dashboard">  <button type="submit" class="button-to-submit">Submit</button></NavLink>
                </div>
                <div class="loginLink" id="loginLink">
                    Go to Login  <p> <NavLink to="/login">Click Here</NavLink></p>
                </div>
        </div>
        
    )
}