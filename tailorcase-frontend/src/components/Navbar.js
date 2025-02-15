



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
          <li><Link to="/order">Orders</Link></li>
          <li><Link to="/booking">Bookings</Link></li>
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
              <Link to="/signup" className="btn signup-btn">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
