import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HoverImageGallery.css";  // Import custom styles

const imageData = [
  {
    src: "https://www.shutterstock.com/image-photo/man-cuts-fabric-scissors-on-600nw-2038897448.jpg",
    title: "Expert Tailors at Your Home",
    description: "Get personalized styling and measurements at your convenience.",
  },
  {
    src: "https://www.yourtailor.in/wp-content/uploads/2025/02/3-1.png",
    title: "Perfect Fit & Quality",
    description: "Choose from a wide range of fabrics and styles for a perfect fit.",
  },
  {
    src: "https://thefabricoutlet.com/cdn/shop/articles/LoomcraftTextile-155575-Types-Upholstery-Fabrics-Blogbanner1_1000x.jpg?v=1646662252",
    title: "Premium Fabrics",
    description: "Get high-quality materials stitched to perfection.",
  },
  {
    src: "https://i0.wp.com/www.assembleandearn.com/wp-content/uploads/2015/03/mens-tailoring.jpg?fit=600%2C400&ssl=1",
    title: "Custom Designs",
    description: "Get your outfits tailored exactly as per your designs.",
  },
  {
    src: "https://www.yourtailor.in/wp-content/uploads/2025/02/6.png",
    title: "Save Time & Effort",
    description: "Book a tailor from the comfort of your home.",
  },
];

const HoverImageGallery = () => {
  return (
    <div className="container text-center my-5">
      <h2>Why Choose Our Doorstep Tailoring Service?</h2>
      <p>
      Stand out from the crowd by having the support of a team of professional tailors who have several years of expertise and experience in this area. Get your traditional or western attire stitched to perfection as per your designs.
      </p>
      <div className="row">
        {imageData.map((item, index) => (
          <div key={index} className="col-md-2 col-sm-4 col-6">
            <div className="image-container">
              <img src={item.src} alt={item.title} className="img-fluid"/>
              <div className="overlay">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverImageGallery;
