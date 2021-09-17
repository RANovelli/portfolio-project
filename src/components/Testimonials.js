import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1>my happy clients</h1>
      <div className="container">
        <div className="testimonials-content"></div>
        <TestimonialsCarousel />
      </div>
    </div>
  );
};

export default Testimonials;
