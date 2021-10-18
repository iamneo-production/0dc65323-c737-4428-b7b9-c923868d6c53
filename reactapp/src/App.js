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

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/add-hall" exact component={AddHall} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/" exact component={Dashboard} />
      <Route path="/edit-profile" exact component={EditProfile} />
      <Route path="/edit-hall" exact component={EditHall} />
      <Route path="/booking" exact component={Booking} />
      {/* <AddHall /> */}
      {/* <Dashboard /> */}
      {/* <EditHall /> */}
      {/* <EditProfile /> */}
      {/* <Login /> */}
      {/* <Profile /> */}
      {/* <Signup /> */}
    </Router>
  );
}

export default App;


// import "./App.css";
// import React from "react";
// import "./index.css";
// // import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import { Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import Login from "./superadmin/login";

// function App() {
//   return (
//     <Router>
//       {/* <Navbar /> */}
//       <Route path="/login" exact component={Login} />
//       {/* <Route path="/signup" exact component={Signup} />
//       <Route path="/add-hall" exact component={AddHall} />
//       <Route path="/profile" exact component={Profile} />
//       <Route path="/" exact component={Dashboard} />
//       <Route path="/edit-profile" exact component={EditProfile} />
//       <Route path="/edit-hall" exact component={EditHall} />
//       <Route path="/booking" exact component={Booking} /> */}
//     </Router>
//   );
// }

// export default App;
