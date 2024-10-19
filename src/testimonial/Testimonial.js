import React, { useState, useEffect } from "react";
import "./Testimonial.css";

const testimonials = [
  {
    text: "Working with Ojas has been a game-changer. Their attention to detail and dedication to customer satisfaction made all the difference.",
    name: "John Doe, CEO of Company",
  },
  {
    text: "The best catering experience I've ever had. Ojas ensured that every guest was thrilled with the food and service.",
    name: "Jane Smith, Event Manager",
  },
  {
    text: "Our team was extremely impressed by the quality and variety of food. Ojas delivers top-notch service every time.",
    name: "Emily Johnson, HR Head",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleTestimonialChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">What Our Clients Say</h2>

      <div className="testimonial-container">
        <div className="testimonial-image left-image">
          <img
            src="https://ojasblend.com/wp-content/uploads/2021/03/shrimp.png"
            alt="Left"
          />
        </div>

        <div className="testimonial-content">
          <p className="testimonial-text">{testimonials[currentIndex].text}</p>
          <div className="testimonial-rating">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="star">
                &#9733;
              </span>
            ))}
          </div>
          <p className="client-name">{testimonials[currentIndex].name}</p>
        </div>

        <div className="testimonial-image right-image">
          <img
            src="https://ojasblend.com/wp-content/uploads/2021/03/what-we-offer-new.jpg"
            alt="Right"
          />
        </div>
      </div>

      <div className="testimonial-pagination">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`testimonial-button ${
              currentIndex === index ? "active" : ""
            }`}
            onClick={() => handleTestimonialChange(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
