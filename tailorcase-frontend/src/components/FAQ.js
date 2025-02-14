import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FAQ = () => {
  const faqs = [
    {
      question: "What is a doorstep tailoring service?",
      answer: "Doorstep tailoring brings professional tailors to your location for measurements, fittings, and custom stitching.",
    },
    {
      question: "Do you offer doorstep tailoring for wedding outfits?",
      answer: "Yes, we specialize in wedding outfits, offering expert tailoring for bridal and groom attire at your doorstep.",
    },
    {
      question: "How do I book an online tailoring service at my home?",
      answer: "You can book an appointment through our website by selecting a convenient time and location for your service.",
    },
    {
      question: "What areas do you provide tailor service at home?",
      answer: "We offer doorstep tailoring services in multiple locations. Check availability on our website.",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center">Frequently Asked Questions (FAQ)</h2>
      <hr />
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
                style={{ backgroundColor: "white", color: "black", border: "none" }}    
              >
                <strong>{faq.question}</strong>
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
