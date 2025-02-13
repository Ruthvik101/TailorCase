// import React from "react";

// const Home = () => {
//   return (
//     <div className="container text-center mt-5">
//       <h1>Welcome to TailorEase</h1>
//       <p>Your one-stop solution for custom tailoring and local tailor bookings.</p>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import { Link } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to TailorEase</h1>
      <p>Your one-stop destination for custom tailoring & local booking.</p>

      {/* Buttons to navigate */}
      <div className="mt-4">
        <Link to="/dashboard" className="btn btn-primary me-3">Go to Dashboard</Link>
        <Link to="/orders" className="btn btn-success">View Orders</Link>
      </div>
    </div>
  );
};

export default Home;
