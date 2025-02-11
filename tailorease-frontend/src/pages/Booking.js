import React, { useState } from "react";
import axios from "axios";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    date: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/bookings", formData);
      alert("Appointment booked successfully!");
    } catch (error) {
      alert("Failed to book appointment.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Service</label>
          <select name="service" className="form-control" onChange={handleChange} required>
            <option value="">Select Service</option>
            <option value="stitching">Stitching</option>
            <option value="alteration">Alteration</option>
            <option value="embroidery">Embroidery</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input type="date" name="date" className="form-control" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;
