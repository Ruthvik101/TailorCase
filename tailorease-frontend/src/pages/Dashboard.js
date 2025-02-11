// import React from "react";
// import { Link } from "react-router-dom";

// const Dashboard = () => {
//   return (
//     <div className="container mt-5">
//       <h2>Welcome to Your Dashboard</h2>
//       <p>Manage your orders and appointments easily.</p>
//       <div className="row">
//         <div className="col-md-6">
//           <div className="card p-3">
//             <h4>Custom Tailoring</h4>
//             <p>Provide measurements and order a custom outfit.</p>
//             <Link to="/order" className="btn btn-primary">Place Order</Link>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="card p-3">
//             <h4>Tailor Booking</h4>
//             <p>Schedule a visit for stitching, alteration, or embroidery.</p>
//             <Link to="/booking" className="btn btn-success">Book Appointment</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React from "react";
// import { Link } from "react-router-dom";
// import "./Dashboard.css"; // Ensure this file exists for styling

// const Dashboard = () => {
//   const userName = "Prathika"; // Replace with dynamic user authentication logic

//   return (
//     <div className="dashboard container mt-5">
//       {/* Welcome Section */}
//       <h2>Welcome, {userName}! 👋</h2>
//       <p>Experience hassle-free tailoring with personalized services.</p>

//       {/* Quick Access Cards */}
//       <div className="row">
//         {/* Orders Section */}
//         <div className="col-md-4">
//           <div className="card p-3">
//             <h4>My Orders</h4>
//             <p>Track and manage your tailoring orders.</p>
//             <Link to="/orders" className="btn btn-primary">View Orders</Link>
//           </div>
//         </div>

//         {/* Bookings Section */}
//         <div className="col-md-4">
//           <div className="card p-3">
//             <h4>Schedule Appointment</h4>
//             <p>Book a visit for stitching, alterations, or embroidery.</p>
//             <Link to="/booking" className="btn btn-success">Book Now</Link>
//           </div>
//         </div>

//         {/* Custom Tailoring */}
//         <div className="col-md-4">
//           <div className="card p-3">
//             <h4>Custom Tailoring</h4>
//             <p>Provide measurements and get a custom outfit.</p>
//             <Link to="/order" className="btn btn-warning">Place Order</Link>
//           </div>
//         </div>
//       </div>

//       {/* Recent Activity & Notifications */}
//       <div className="recent-activity mt-5">
//         <h4>Recent Activity</h4>
//         <ul>
//           <li>📦 Your order #12345 is being processed.</li>
//           <li>🛠️ Your tailor appointment is confirmed for tomorrow.</li>
//           <li>🎉 Special Offer: Get 10% off your next order!</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Dashboard.css"; // Ensure styling is available

const Dashboard = () => {
  const userName = "Prathika"; // Replace with dynamic user authentication logic

  return (
    <div className="dashboard container mt-5">
      {/* Bootstrap Carousel Section */}
      <div id="carouselExampleDark" className="carousel carousel-dark slide mb-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="https://source.unsplash.com/1600x600/?fashion,tailoring" className="d-block w-100" alt="Fashion 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Elegant Tailoring</h5>
              <p>Experience custom fits with expert craftsmanship.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://source.unsplash.com/1600x600/?designer,dress" className="d-block w-100" alt="Fashion 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Modern Designs</h5>
              <p>Stay stylish with the latest fashion trends.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/1600x600/?fabric,clothing" className="d-block w-100" alt="Fashion 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Premium Fabrics</h5>
              <p>Choose from the finest quality materials.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

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
