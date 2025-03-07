// // import React from "react";
// // import { Link } from "react-router-dom";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "bootstrap/dist/js/bootstrap.bundle.min";
// // import "./Dashboard.css"; // Ensure styling is available

// // const Dashboard = () => {
// //   const userName = "Prathika"; // Replace with dynamic user authentication logic

// //   return (
// //     <div className="dashboard container mt-5">
// //       {/* Welcome Section */}
// //       <h2>Welcome, {userName}! 👋</h2>
// //       <p>Experience hassle-free tailoring with personalized services.</p>

// //       {/* Quick Access Cards */}
// //       <div className="row">
// //         <div className="col-md-4">
// //           <div className="card p-3 shadow">
// //             <h4>My Orders</h4>
// //             <p>Track and manage your tailoring orders.</p>
// //             <Link to="/orders" className="btn btn-primary">View Orders</Link>
// //           </div>
// //         </div>
// //         <div className="col-md-4">
// //           <div className="card p-3 shadow">
// //             <h4>Schedule Appointment</h4>
// //             <p>Book a visit for stitching, alterations, or embroidery.</p>
// //             <Link to="/booking" className="btn btn-success">Book Now</Link>
// //           </div>
// //         </div>
// //         <div className="col-md-4">
// //           <div className="card p-3 shadow">
// //             <h4>Custom Tailoring</h4>
// //             <p>Provide measurements and get a custom outfit.</p>
// //             <Link to="/order" className="btn btn-warning">Place Order</Link>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;



// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./Dashboard.css";

// const Dashboard = () => {
//   return (
//     <div className="container mt-5">
//       <div className="text-center mb-4">
//         <h1>Welcome, Prathika! 👋</h1>
//         <p>Experience hassle-free tailoring with personalized services.</p>
//       </div>
//       <div className="row">
//         <div className="col-md-4">
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">My Orders</h5>
//               <p className="card-text">Track and manage your tailoring orders.</p>
//               <a href="#" className="btn btn-primary">View Orders</a>
//             </div>
//             <ul className="list-group list-group-flush">
//               <li className="list-group-item">Order #1: Status - In Progress, Estimated Delivery - 23/02/2025</li>
//               <li className="list-group-item">Order #2: Status - Completed, Estimated Delivery - 15/02/2025</li>
//             </ul>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">Schedule Appointment</h5>
//               <p className="card-text">Book a visit for stitching, alterations, or embroidery.</p>
//               <a href="#" className="btn btn-success">Book Now</a>
//             </div>
//             <form className="p-3">
//               <div className="form-group">
//                 <label htmlFor="appointmentDate">Appointment Date</label>
//                 <input type="date" className="form-control" id="appointmentDate" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="appointmentTime">Appointment Time</label>
//                 <input type="time" className="form-control" id="appointmentTime" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="appointmentType">Service Type</label>
//                 <select className="form-control" id="appointmentType">
//                   <option>Stitching</option>
//                   <option>Alterations</option>
//                   <option>Embroidery</option>
//                 </select>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">Custom Tailoring</h5>
//               <p className="card-text">Provide measurements and get a custom outfit.</p>
//               <a href="#" className="btn btn-warning">Place Order</a>
//             </div>
//             <form className="p-3">
//               <div className="form-group">
//                 <label htmlFor="measurements">Measurements</label>
//                 <textarea className="form-control" id="measurements" rows="3"></textarea>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="designRequirements">Design Requirements</label>
//                 <textarea className="form-control" id="designRequirements" rows="3"></textarea>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// Dashboard.js
// import React from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "./Dashboard.css";

// const Dashboard = () => {
//   const userName = "Prathika"; // This should ideally come from authentication logic

//   return (
//     <div className="dashboard container mt-5">
//       {/* Welcome Section */}
//       <div className="text-center mb-4">
//         <h2 className="fw-bold">Welcome, {userName}! 👋</h2>
//         <p className="text-muted">Experience hassle-free tailoring with personalized services.</p>
//       </div>

//       {/* Quick Access Cards */}
//       <div className="row g-4">
//         <div className="col-md-4">
//           <div className="card p-4 shadow text-center">
//             <h4 className="fw-bold">My Orders</h4>
//             <p className="text-muted">Track and manage your tailoring orders.</p>
//             <Link to="/orders" className="btn btn-primary w-100">View Orders</Link>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="card p-4 shadow text-center">
//             <h4 className="fw-bold">Schedule Appointment</h4>
//             <p className="text-muted">Book a visit for stitching, alterations, or embroidery.</p>
//             <Link to="/booking" className="btn btn-success w-100">Book Now</Link>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="card p-4 shadow text-center">
//             <h4 className="fw-bold">Custom Tailoring</h4>
//             <p className="text-muted">Provide measurements and get a custom outfit.</p>
//             <Link to="/order" className="btn btn-warning w-100">Place Order</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Dashboard.css"; // Ensure styling is available

const Dashboard = () => {
  const userName = "Prathika"; // Replace with dynamic user authentication logic

  // State for handling form inputs and notifications
  const [appointment, setAppointment] = useState({
    date: "",
    time: "",
    service: "Stitching",
  });

  const [measurements, setMeasurements] = useState("");
  const [designRequirements, setDesignRequirements] = useState("");
  
  // Handlers for form input changes
  const handleAppointmentChange = (e) => {
    const { id, value } = e.target;
    setAppointment((prev) => ({ ...prev, [id]: value }));
  };

  const handleMeasurementsChange = (e) => {
    setMeasurements(e.target.value);
  };

  const handleDesignChange = (e) => {
    setDesignRequirements(e.target.value);
  };

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
            <ul className="list-group list-group-flush mt-2">
              <li className="list-group-item">Order #1: Status - In Progress, Estimated Delivery - 23/02/2025</li>
              <li className="list-group-item">Order #2: Status - Completed, Estimated Delivery - 15/02/2025</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h4>Schedule Appointment</h4>
            <p>Book a visit for stitching, alterations, or embroidery.</p>
            <Link to="/booking" className="btn btn-success">Book Now</Link>
            <form className="mt-2">
              <div className="form-group">
                <label htmlFor="date">Appointment Date</label>
                <input type="date" className="form-control" id="date" value={appointment.date} onChange={handleAppointmentChange} />
              </div>
              <div className="form-group">
                <label htmlFor="time">Appointment Time</label>
                <input type="time" className="form-control" id="time" value={appointment.time} onChange={handleAppointmentChange} />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Type</label>
                <select className="form-control" id="service" value={appointment.service} onChange={handleAppointmentChange}>
                  <option>Stitching</option>
                  <option>Alterations</option>
                  <option>Embroidery</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h4>Custom Tailoring</h4>
            <p>Provide measurements and get a custom outfit.</p>
            <Link to="/order" className="btn btn-warning">Place Order</Link>
            <form className="mt-2">
              <div className="form-group">
                <label htmlFor="measurements">Measurements</label>
                <textarea className="form-control" id="measurements" rows="3" value={measurements} onChange={handleMeasurementsChange}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="designRequirements">Design Requirements</label>
                <textarea className="form-control" id="designRequirements" rows="3" value={designRequirements} onChange={handleDesignChange}></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
