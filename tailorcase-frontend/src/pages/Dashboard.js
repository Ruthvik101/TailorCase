import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Dashboard.css"; // Ensure styling is available

const Dashboard = () => {
  const userName = "Prathika"; // Replace with dynamic user authentication logic

  return (
    <div className="dashboard container mt-5">
      {/* Welcome Section */}
      <h2>Welcome, {userName}! 👋</h2>
      <p>Experience hassle-free tailoring with personalized services.</p>

      {/* Quick Access Cards */}
      <div className="row">
        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h4>My Orders</h4>
            <p>Track and manage your tailoring orders.</p>
            <Link to="/orders" className="btn btn-primary">View Orders</Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h4>Schedule Appointment</h4>
            <p>Book a visit for stitching, alterations, or embroidery.</p>
            <Link to="/booking" className="btn btn-success">Book Now</Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h4>Custom Tailoring</h4>
            <p>Provide measurements and get a custom outfit.</p>
            <Link to="/order" className="btn btn-warning">Place Order</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
