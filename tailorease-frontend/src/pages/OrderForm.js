import React, { useState } from "react";
import axios from "axios";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    measurements: "",
    pattern: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, pattern: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("measurements", formData.measurements);
    formDataToSend.append("pattern", formData.pattern);

    try {
      await axios.post("http://localhost:3000/api/orders", formDataToSend);
      alert("Order placed successfully!");
    } catch (error) {
      alert("Failed to place order.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Place a Custom Tailoring Order</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Measurements</label>
          <textarea name="measurements" className="form-control" onChange={handleChange} required></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Upload Dress Pattern</label>
          <input type="file" name="pattern" className="form-control" onChange={handleFileChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
