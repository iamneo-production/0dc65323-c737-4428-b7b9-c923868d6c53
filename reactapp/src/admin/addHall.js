import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "./css/addHall.css";
import Navbar from "./navbar";

export default function AddHall() {
  const [eventDate, setEventDate] = React.useState("");
  const [hallPrice, setHallPrice] = React.useState(0);
  const [hallType, setHallType] = React.useState("");

  const onSubmit = async () => {
    const body = {
      eventDate: eventDate,
      hallPrice: hallPrice,
      hallType: hallType,
    };

    try {
      const url = "http://localhost:8080/hall/saveHall";
      console.log(url);
      const response = await axios.post(url, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = response.data;
      console.log(data);
    } catch (error) {
      // const message = error.response.error.message;
      // console.log(message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="addHall" id="addHallBox">
        <form id="addHall">
          <Link to="/admin">
            <button type="submit" className="back">
              <img src="../images/back.png" alt="back" /> back
            </button>
          </Link>
          <br />
          <label className="addHall-label">Event Date</label>
          <div className="form-group">
            <input
              type="date"
              className="addHall-input"
              placeholder=""
              id="hallModel"
            />
          </div>

          <label className="addHall-label">Hall Price</label>
          <div className="form-group">
            <input
              type="text"
              className="addHall-input"
              placeholder=""
              id="hallPrice"
            />
          </div>

          <label className="addHall-label">Hall Type</label>
          <div className="form-group">
            <input
              type="text"
              className="addHall-input"
              placeholder=""
              id="hallType"
            />
          </div>
          <Link to="/admin" className="addHallSave">
            <button type="submit" className="adddate" id="addHallButton">
              Add Date
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}
