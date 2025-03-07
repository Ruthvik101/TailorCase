

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/material.jpg';

const ContactSection = () => {
  return (
    <div className="container mt-5" style={{maxWidth:"1400px"}}>
      <div className="text-center mb-4">
        
        <div
        style={{
          width: '100%',
          height: '250px', // Adjust height based on your design
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '0',
          margin: '0',
          overflow: 'hidden',
          
        }}
      >
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Contact</h1>
        <p style={{ maxWidth: '900px' }}>
          If you have any questions or need assistance with our services, don’t hesitate to reach out. 
          We’re here to help with all your tailoring needs.
        </p>
      </div>

        <p>
          If you have any questions or need assistance with our services, don’t hesitate to reach out. We’re here to help with all your tailoring needs.
        </p>
      </div>
      <div className="row">
        <div className="col-md-4 text-center">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title"><i className="bi bi-telephone"></i> Call Us</h5>
              <p className="card-text">+91-9000902904</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title"><i className="bi bi-geo-alt"></i> Address</h5>
              <p className="card-text">
                RUNTAILOR,<br />
                Sri Sampada arcade 1, 3rd floor, 302,<br />
                near Dr. Ashish Reddy – pediatrician,<br />
                near Oyo silverkey,<br />
                Khajaguda, Telangana 500019
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title"><i className="bi bi-envelope"></i> Have any questions?</h5>
              <p className="card-text">support@runtailor.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form and Map Section */}
      <div className="container mt-4" >
        <div className="row">
          {/* Contact Form Section */}
          <div className="col-md-6">
            <h4 className="mb-4">Contact Us</h4>
            <form>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label className="form-label">
                    Name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">
                    Subject <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" required />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4"></textarea>
              </div>
              <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" id="consentCheck" required />
                <label className="form-check-label" htmlFor="consentCheck">
                  I consent to my submitted data being collected and stored{" "}
                  <span className="text-danger">*</span>
                </label>
              </div>
              <button type="submit" className="btn btn-warning px-4">
                SEND
              </button>
            </form>
          </div>

          {/* Google Map Section */}
          <div className="col-md-6 mt-4 mt-md-0">
          {/* <iframe
            title="Mom's Tailor Shop"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d75.1053406!3d12.8402304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!5e0!3m2!1sen!2sin!4v1713112247194"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
>          </iframe> */}
            <iframe
                title="Mom's Tailor Shop"
                src="https://www.google.com/maps?q=12.8402304,75.1053406&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
>           </iframe>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
