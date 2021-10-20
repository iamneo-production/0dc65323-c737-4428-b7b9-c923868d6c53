import React from "react";
import Navbar from "./navbar";
import "./css/editHall.css";
import { Link } from "react-router-dom";

export default function EditHall() {
  return (
    <>
      <Navbar />
      <div className="editHall" id="editHallBox">
        <form id="editHall">
          <Link to="/admin">
            <button type="submit" className="back">
              <img src="../images/back.png" alt="back" /> back
            </button>
          </Link>
          <br />
          <label className="editHall-label">Event Date</label>
          <div className="form-group">
            <input
              type="date"
              className="editHall-input"
              placeholder=""
              id="hallModel"
            />
          </div>

          <label className="editHall-label">Hall Price</label>
          <div className="form-group">
            <input
              type="text"
              className="editHall-input"
              placeholder=""
              id="hallPrice"
            />
          </div>

          <label className="editHall-label">Hall Type</label>
          <div className="form-group">
            <input
              type="text"
              className="editHall-input"
              placeholder=""
              id="hallType"
            />
          </div>
          <Link to="/admin" className="edithallSave">
            <button type="submit" className="savechanges" id="addHallButton">
              Save Change
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}
