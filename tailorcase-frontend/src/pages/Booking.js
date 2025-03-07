import React from "react";
import AppointmentBooking from "../components/AppointmentBooking";

const Booking = () => {
  return (
    <div>
      <h1 className="text-center my-4" style={{maxWidth: "1400px"}}>Appointment Booking</h1>
      <AppointmentBooking />
    </div>
  );
};

export default Booking;
