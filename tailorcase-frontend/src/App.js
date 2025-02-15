


import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import OrderForm from "./pages/OrderForm";
import Booking from "./pages/Booking";
import OrderTracking from "./pages/OrderTracking";
import ContactSection from "./pages/ContactSection";
//import ContactSection from "./pages/ContactSection";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/order-tracking" element={<OrderTracking />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
