import React from "react";
import "./Scroller.css"; // Import the CSS file for styling

const ScrollingList = () => {
  const items = [
    "invitationStar",
    "elementorStar",
    "weddingStar",
    "birthday partyStar",
    "cateringStar",
    "wedding plannerStar",
    "events calendarStar",
    "partyStar",
    "venueStar",
    "celebrationStar",
    "eventStar",
    "invitationStar",
    "elementor",
  ];

  // Duplicate items to create a seamless effect
  const duplicatedItems = [...items, ...items];

  return (
    <div className="scrolling-container">
      <ul className="scrolling-list">
        {duplicatedItems.map((item, index) => (
          <li key={index} className="scrolling-item">
            &#8226; {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollingList;
