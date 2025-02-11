// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container">
//         <Link className="navbar-brand" to="/">TailorEase</Link>
//         <div className="collapse navbar-collapse">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/login">Login</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/signup">Sign Up</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure this file exists in the styles folder

const Navbar = () => {
  // Simulating authentication state (Replace with real authentication logic)
  const isAuthenticated = false; // Change to true if logged in
  const userType = "customer"; // Change to "tailor" for tailor-specific links

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo Section */}
        <Link to="/" className="logo">
          <img src="/logo.png" alt="TailorEase Logo" className="logo-img" />
          TailorEase
        </Link>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/bookings">Bookings</Link></li>
          <li><Link to="/tracking">Track Order</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          {userType === "tailor" && <li><Link to="/appointments">Appointments</Link></li>}
        </ul>

        {/* Authentication Links */}
        <div className="auth-buttons">
          {isAuthenticated ? (
            <button className="logout-btn">Logout</button>
          ) : (
            <>
              <Link to="/login" className="btn login-btn">Login</Link>
              <Link to="/register" className="btn register-btn">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
