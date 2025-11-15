import React from "react";

import "./Reservation.scss";

import ReservationImage from "../../../assets/images/reservation/reservation.png";

const Reservation = () => {
  return (
    <div className="reservation">
      <div className="container">
        <div className="info">
          <h1>Reserve Your Table</h1>
          <p>
            Make online reservations, read restaurant reviews from diners, and
            earn points towards free meals. 
          </p>
          <button>Make Reservation</button>
        </div>
        <div className="image">
          <img src={ReservationImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
