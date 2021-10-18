import React from "react";
import Navbar from "./navbar";
import "./css/editHall.css";

export default function editHall() {
  return (
    <>
      <Navbar />
      <div className="editHall" id="editHallBox">
        <form id="editHall">
          <button type="submit" className="back">
            <img src="images/back.png" alt="back" /> back
          </button>
          <br />
          <label className="editHall-label">Event Date</label>
          <div className="form-group">
            <input type="date" className="editHall-input" placeholder="" id="hallModel" />
          </div>

          <label className="editHall-label">Hall Price</label>
          <div className="form-group">
            <input type="text" className="editHall-input" placeholder="" id="hallPrice" />
          </div>

          <label className="editHall-label">Hall Type</label>
          <div className="form-group">
            <input type="text" className="editHall-input" placeholder="" id="hallType" />
          </div>

          <button type="submit" className="savechanges" id="addHallButton">
            Save Change
          </button>
        </form>
      </div>
    </>
  );
}
