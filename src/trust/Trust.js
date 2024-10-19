import React from "react";
import "./Trust.css";

const Trust = () => {
  return (
    <div className="catering-container">
      {/* Left Section */}
      <div className="left-section">
        <h1 className="heading">
          The Food You Eat Should Be Perfect, And This Is Our Responsibility
        </h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>

        <div className="progress-bars">
          <div className="progress-item">
            <label>Quality Food</label>
            <div className="progress-bar">
              <div className="progress" style={{ width: "92%" }}></div>
            </div>
            <span className="percentage">92%</span>
          </div>

          <div className="progress-item">
            <label>Various Menus</label>
            <div className="progress-bar">
              <div className="progress" style={{ width: "90%" }}></div>
            </div>
            <span className="percentage">90%</span>
          </div>
        </div>

        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="photo-grid">
          <div className="photo-section">
            <img
              src="https://ojasblend.com/wp-content/uploads/2021/03/PANEER-BOWL.png"
              alt="Food Item 1"
            />
          </div>
          <div className="photo-section">
            <img
              src="https://ojasblend.com/wp-content/uploads/2021/03/PANEER-BOWL.png"
              alt="Food Item 3"
            />
          </div>
          <div className="circle-section">
            <div className="circle">
              <img
                src="https://ojasblend.com/wp-content/uploads/2021/03/OJA-NEW-LOGO-1.png"
                alt="Catering Logo"
              />
            </div>
          </div>
          <div className="photo-section">
            <img
              src="https://ojasblend.com/wp-content/uploads/2021/03/PANEER-BOWL.png"
              alt="Food Item 2"
            />
          </div>
          <div className="photo-section">
            <img
              src="https://ojasblend.com/wp-content/uploads/2021/03/PANEER-BOWL.png"
              alt="Food Item 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
