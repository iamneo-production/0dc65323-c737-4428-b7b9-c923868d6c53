import "./App.css";
import React from "react";
import "./index.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./admin/navbar";
import Login from "./admin/login";
import Signup from "./admin/signup";
import AddHall from "./admin/addHall";
import Dashboard from "./admin/dashboard";
import EditHall from "./admin/editHall";
import EditProfile from "./admin/editProfile";
import Profile from "./admin/profile";
import Booking from "./admin/booking";
import AdminLogin from "./superadmin/adminLogin";
import AdminList from "./superadmin/adminList";
import UserSignUp from "./user/SignUp";
import UserLogin from "./user/login";
import UserHallBooking from "./user/hallBookingPage";
import UserBooking from "./user/MyBooking";
import UserCompanyDetails from "./user/companyDetails";
import UserDashboard from "./user/Dashboard";
import UserProfile from "./user/Profile";
import UserProfileEdit from "./user/profileEdit";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/admin/login" exact component={Login} />
        <Route path="/admin/signup" exact component={Signup} />
        <Route path="/admin/add-hall" exact component={AddHall} />
        <Route path="/admin/profile" exact component={Profile} />
        <Route path="/admin/edit-profile" exact component={EditProfile} />
        <Route path="/admin/edit-hall" exact component={EditHall} />
        <Route path="/admin/booking" exact component={Booking} />
        <Route path="/super-admin/login" exact component={AdminLogin} />
        <Route path="/super-admin/adminList" exact component={AdminList} />
        <Route path="/admin" exact component={Dashboard} />
        <Route path="/super-admin" exact component={Dashboard} />
        <Route path="/user/signup" exact component={UserSignUp} />
        <Route path="/user/login" exact component={UserLogin} />
        <Route path="/user/profile" exact component={UserProfile} />
        <Route path="/user/edit-profile" exact component={UserProfileEdit} />
        <Route path="/user/hall-booking" exact component={UserHallBooking} />
        <Route path="/user/booking" exact component={UserBooking} />
        <Route
          path="/user/company-details"
          exact
          component={UserCompanyDetails}
        />
        <Route path="/user" exact component={UserDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
