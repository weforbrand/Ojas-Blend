import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCookieBite,
  faCalendar,
  faUtensils,
  faLeaf,
  faStar,
  faDollarSign,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import "./Whyus.css";

const WhyOjas = () => {
  const items = [
    {
      id: 1,
      title: "Best Chef Cook",
      icon: faCookieBite,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Seasonal Menus",
      icon: faCalendar,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Delicious Food",
      icon: faUtensils,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      title: "Best Ingredients",
      icon: faLeaf,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      title: "High Quality Services",
      icon: faStar,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      title: "Fits Your Budget",
      icon: faDollarSign,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  // Set initial state to the first item's id
  const [activeItem, setActiveItem] = useState(items[0].id);

  return (
    <div className="why-ojas-container">
      <h2 className="section-title">
        <FontAwesomeIcon icon={faMapPin} className="pin-icon" /> Satisfaction
        Guaranteed
      </h2>
      <div className="tree-container">
        <div className="items-container">
          {items.map((item) => (
            <div
              className={`item ${activeItem === item.id ? "active" : ""}`}
              key={item.id}
            >
              <div
                className="icon-wrapper"
                onClick={() => setActiveItem(item.id)}
              >
                <FontAwesomeIcon icon={item.icon} className="icon" />
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="content-display">
        <h3>{items.find((item) => item.id === activeItem).title}</h3>
        <p>{items.find((item) => item.id === activeItem).content}</p>
      </div>
    </div>
  );
};

export default WhyOjas;
