


import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import HoverImageGallery from "../components/HoverImageGallery";
import FAQ from "../components/FAQ"; 
import Testimonials from "../components/Testimonials";

import tailoringProcess from "../assets/tailoring-processs_1098-17986.avif";
import slide2 from "../assets/slide2.avif";
import slide3 from "../assets/slide3.jpg";
import tailoringItems from "../assets/aboutus.jpg"; 

// Import icons/images for service steps
import bookIcon from "../assets/booking_icon.png"; 
import tailorIcon from "../assets/doorstep.png";
import customizeIcon from "../assets/customization.jpg";
import deliveryIcon from "../assets/delivery.png";

import CustomTailoring from "../assets/men_and_women.webp";
import Couples from "../assets/couples1.webp";
import Alteration from "../assets/alteration.png";

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to TailorEase</h1>
      <p>Your one-stop destination for custom tailoring & local booking.</p>

      {/* Bootstrap Carousel */}
      <div id="carouselExampleDark" className="carousel carousel-dark slide mt-4">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <img src={tailoringProcess} className="d-block w-100" alt="First slide" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={slide2} className="d-block w-100" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" alt="Third slide" />
          </div>
        </div>
      </div>

      {/* Buttons to navigate */}
      <div className="mt-4">
        <Link to="/dashboard" className="btn btn-primary me-3">Go to Dashboard</Link>
        <Link to="/orders" className="btn btn-success">View Orders</Link>
      </div>

      {/* Company Profile Section */}
      <div className="container-fluid text-center my-5">
        <h2 className="fw-bold">PREMIUM DOORSTEP TAILORING SERVICE</h2>
        <p className="text-muted fs-5">
          Looking for a hassle-free tailoring experience? Your Tailor offers professional doorstep tailoring services where expert tailors come to your home for measurements, fittings, and custom stitching. Enjoy high-quality, designer tailoring without stepping out!
        </p>
      </div>

      {/* Service Steps Section */}
      <div className="container-fluid text-center my-5">
        <h2 className="fw-bold">How Our Doorstep Tailor Service Works?</h2>
        <div className="row mt-5">
          <div className="col-md-3">
            <img src={bookIcon} alt="Book an Appointment" className="service-icon" />
            <h5 className="fw-bold mt-3">Book an Appointment</h5>
            <p className="text-muted">Book online for a hassle-free tailoring experience with expert consultation.</p>
            <a href="#" className="text-danger fw-bold">More &gt;&gt;</a>
          </div>
          <div className="col-md-3">
            <img src={tailorIcon} alt="Tailor at Your Doorstep" className="service-icon" />
            <h5 className="fw-bold mt-3">Tailor at Your Doorstep</h5>
            <p className="text-muted">Our expert tailor visits your home for measurements.</p>
            <a href="#" className="text-danger fw-bold">More &gt;&gt;</a>
          </div>
          <div className="col-md-3">
            <img src={customizeIcon} alt="Customization & Stitching" className="service-icon" style={{ 
    width: "180px", 
    height: "200px", 
    objectFit: "contain", 
    marginRight: "10px", 
     
  }}/>
            <h5 className="fw-bold mt-3">Customization & Stitching</h5>
            <p className="text-muted">We design and stitch as per your preference.</p>
            <a href="#" className="text-danger fw-bold">More &gt;&gt;</a>
          </div>
          <div className="col-md-3">
            <img src={deliveryIcon} alt="Delivery at Your Home" className="service-icon" />
            <h5 className="fw-bold mt-3">Delivery at Your Home</h5>
            <p className="text-muted">Get your perfectly tailored outfit delivered to your doorstep.</p>
            <a href="#" className="text-danger fw-bold">More &gt;&gt;</a>
          </div>
        </div>
      </div>

      {/* Tailoring Services Section (Added at the end) */}
      <div className="container mt-5">
        <h1 className="text-center">Our Tailoring Services</h1>
        <p className="text-center">
          The world of business is undergoing through revolutionary changes with the advancement of technology, establishing an online presence is essential. So, we at YourTailor.in provide tailoring services which you can avail from the comforts of your home.
        </p>
        <div className="row mt-4">
          <div className="col-md-4">
            <img src={Couples} alt="Wedding & Designer Tailoring" className="img-fluid" style={{ width: "100%", height: "370px", objectFit: "cover" }} />
            <h3 className="mt-3">Wedding & Designer Tailoring</h3>
            <ul>
              <li>Custom bridal wear, designer outfits, and festive attire.</li>
              <li>Handcrafted embroidery and premium fabric selection.</li>
            </ul>
          </div>
          <div className="col-md-4">
            <img src={CustomTailoring} alt="Custom Tailoring for Men & Women" className="img-fluid" style={{ width: "100%", height: "370px", objectFit: "cover" }} />
            <h3 className="mt-3">Custom Tailoring for Men & Women</h3>
            <ul>
              <li>Men's Tailoring: Shirts, Suits, Blazers, Sherwanis, Trousers, and Kurtas.</li>
              <li>Women's Tailoring: Saree Blouses, Kurtis, Lehengas, Gowns, Formal Wear, and Dresses.</li>
              <li>Kids Tailoring.</li>
            </ul>
          </div>
          <div className="col-md-4">
            <img src={Alteration} alt="Alteration & Fitting Services" className="img-fluid" style={{ width: "100%", height: "370px", objectFit: "cover" }} />
            <h3 className="mt-3">Alteration & Fitting Services</h3>
            <ul>
              <li>Perfect fit guaranteed with our doorstep alteration services.</li>
              <li>Adjustments for all types of clothing, ensuring maximum comfort and style.</li>
            </ul>
          </div>
        </div>
      </div>
       {/* Tailoring Services Section */}
       <HoverImageGallery />
       {/* ✅ Testimonials Section (Added After FAQ) */}
       <Testimonials />
       {/* FAQ Section */}
       <FAQ />
    </div>
  );
};

export default Home;