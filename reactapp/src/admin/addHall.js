import React from "react";
import "./css/addHall.css";
import Navbar from "./navbar";

export default function addHall() {
  return (
    <>
      <Navbar />
      <div className="addHall" id="addHallBox">
        <form id="addHall">
          <button type="submit" className="back">
            <img src="images/back.png" alt="back" /> back
          </button>
          <br />
          <label className="addHall-label">Event Date</label>
          <div className="form-group">
            <input type="date" className="addHall-input" placeholder="" id="hallModel" />
          </div>

          <label className="addHall-label">Hall Price</label>
          <div className="form-group">
            <input type="text" className="addHall-input" placeholder="" id="hallPrice" />
          </div>

          <label className="addHall-label">Hall Type</label>
          <div className="form-group">
            <input type="text" className="addHall-input" placeholder="" id="hallType" />
          </div>

          <button type="submit" className="adddate" id="addHallButton">
            Add Date
          </button>
        </form>
      </div>
    </>
  );
}
