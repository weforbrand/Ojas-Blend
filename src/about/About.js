import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-us-container">
      <div className="founder-photo">
        <img
          src="https://ojasblend.com/wp-content/uploads/2022/07/New-Project.png"
          alt="Ojas"
        />
      </div>
      <div className="about-us-content">
        <h2>About Us</h2>
        <h3>Welcome To The Best Catering Company</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
        <h3>20 Years Experience In This Business</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
        <p>
          <span className="checkmark">!|!</span> 100% Guarantee For Our Product
          Quality
        </p>
        <p>
          <span className="checkmark">!|!</span> Custom Food Menu Catering &
          Free Delivery.
        </p>
        <p>
          <span className="checkmark">!|!</span> We Have A Passion For Food &
          Never Compromise Quality
        </p>
        <h4>George</h4>
        <p>Founder, Ojas</p>
      </div>
    </div>
  );
};

export default About;
