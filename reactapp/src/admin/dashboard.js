import React from "react";
import Navbar from "./navbar";
import "./css/dashboard.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  // const screenClass = useScreenClass();
  return (
    <>
      <Navbar />

      <div className="row" id="adminDashboard">
        <div className=" row-left">
          <h1 className="head">Company Name</h1>
          <div className="booked">Booked</div>
          <div className="dashboard-content">
            <span>
              <p>Event Date: Date</p>
              <p>Hall Price: $1000 | per Day</p>
            </span>
            <span>
              <p className="halltype">Hall Type: Day</p>
            </span>
            <span>
              <p className="buttons">
                <button type="submit" className="edit">
                  <Link to="/admin/edit-hall">
                    <img
                      className="edit-icon"
                      src="../images/edit.png"
                      alt="edit"
                    />
                  </Link>{" "}
                </button>
                <button type="submit" className="delete">
                  <img
                    className="delete-icon"
                    src="../images/delete.png"
                    alt="delete"
                  />
                </button>
              </p>
            </span>
          </div>

          <div className="available">Available</div>
          <div className="dashboard-content">
            <span>
              <p>Event Date: Date</p>
              <p>Hall Price: $1000 | per Day</p>
            </span>
            <span>
              <p className="halltype">Hall Type: Day</p>
            </span>
            <span>
              <p className="buttons">
                <button type="submit" className="edit">
                  <Link to="/admin/edit-hall">
                    <img
                      className="edit-icon"
                      src="../images/edit.png"
                      alt="edit"
                    />
                  </Link>{" "}
                </button>
                <button type="submit" className="delete">
                  <img
                    className="delete-icon"
                    src="../images/delete.png"
                    alt="delete"
                  />
                </button>
              </p>
            </span>
          </div>

          <div className="booked">Booked</div>
          <div className="dashboard-content">
            <span>
              <p>Event Date: Date</p>
              <p>Hall Price: $1000 | per Day</p>
            </span>
            <span>
              <p className="halltype">Hall Type: Day</p>
            </span>
            <span>
              <p className="buttons">
                <button type="submit" className="edit">
                  <Link to="/admin/edit-hall">
                    <img
                      className="edit-icon"
                      src="../images/edit.png"
                      alt="edit"
                    />
                  </Link>{" "}
                </button>
                <button type="submit" className="delete">
                  <img
                    className="delete-icon"
                    src="../images/delete.png"
                    alt="delete"
                  />
                </button>
              </p>
            </span>
          </div>
        </div>
        <div className="row-right">
          <div className="earning">
            <span className="earn-head">Earnings</span>
            <div className="detail">
              <span>Total Today</span>
              <span>$600</span>
            </div>
            <hr
              style={{
                color: "#000000",
                backgroundColor: "#000000",
                width: "50%",
              }}
            />
            <div className="detail">
              <span>Monthly</span>
              <span>$700</span>
            </div>
          </div>
          <div className="addnew">
            <div className="addnew-content">Want to add a New Day</div>

            <button type="submit" className="submit-btn">
              <Link
                to="/admin/add-hall"
                className="addNew-Hall"
                id="addHallButton"
              >
                Add New
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
