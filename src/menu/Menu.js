import React, { useState } from "react";
import "./Menu.css"; // Import your styles

const Menu = () => {
  // State to manage selected column and view state
  const [selectedCategory, setSelectedCategory] = useState("creations");
  const [showAllItems, setShowAllItems] = useState(false);

  // Menu items
  const menuItems = {
    creations: [
      {
        name: "YOGI’S PARADISE",
        description:
          "Paneer, Pepper, Onion, Pickled cabbage, Pomegranate, Cilantro, White sauce, Garlic cracker, Long grain rice, Hemp hearts",
        image:
          "https://ojasblend.com/wp-content/uploads/2021/03/SHRIMP-BOWL-1.png",
      },
      // Repeat for additional items as needed...
      {
        name: "YOGI’S PARADISE",
        description:
          "Paneer, Pepper, Onion, Pickled cabbage, Pomegranate, Cilantro, White sauce, Garlic cracker, Long grain rice, Hemp hearts",
        image:
          "https://ojasblend.com/wp-content/uploads/2021/03/SHRIMP-BOWL-1.png",
      },
      {
        name: "YOGI’S PARADISE",
        description:
          "Paneer, Pepper, Onion, Pickled cabbage, Pomegranate, Cilantro, White sauce, Garlic cracker, Long grain rice, Hemp hearts",
        image:
          "https://ojasblend.com/wp-content/uploads/2021/03/SHRIMP-BOWL-1.png",
      },
      {
        name: "YOGI’S PARADISE",
        description:
          "Paneer, Pepper, Onion, Pickled cabbage, Pomegranate, Cilantro, White sauce, Garlic cracker, Long grain rice, Hemp hearts",
        image:
          "https://ojasblend.com/wp-content/uploads/2021/03/SHRIMP-BOWL-1.png",
      },
      {
        name: "YOGI’S PARADISE",
        description:
          "Paneer, Pepper, Onion, Pickled cabbage, Pomegranate, Cilantro, White sauce, Garlic cracker, Long grain rice, Hemp hearts",
        image:
          "https://ojasblend.com/wp-content/uploads/2021/03/SHRIMP-BOWL-1.png",
      },
      {
        name: "YOGI’S PARADISE",
        description:
          "Paneer, Pepper, Onion, Pickled cabbage, Pomegranate, Cilantro, White sauce, Garlic cracker, Long grain rice, Hemp hearts",
        image:
          "https://ojasblend.com/wp-content/uploads/2021/03/SHRIMP-BOWL-1.png",
      },
    ],
    beverages: [
      {
        name: "DICKIES GINGER BEER",
        description:
          "Dickie's Ginger is your local Vancouver ginger beer company. Made fresh weekly from all whole ingredients, no junk or artificial flavours. We think it's the best ginger beer out there. Period.",
        image:
          "https://ojasblend.com/wp-content/uploads/2021/03/dickies-ginger-beer-300x214.png",
      },
      // Repeat for additional items as needed...
      {
        name: "DICKIES GINGER BEER",
        description:
          "Dickie's Ginger is your local Vancouver ginger beer company. Made fresh weekly from all whole ingredients, no junk or artificial flavours. We think it's the best ginger beer out there. Period.",
        image:
          "https://ojasblend.com/wp-content/uploads/2021/03/dickies-ginger-beer-300x214.png",
      },
      {
        name: "DICKIES GINGER BEER",
        description:
          "Dickie's Ginger is your local Vancouver ginger beer company. Made fresh weekly from all whole ingredients, no junk or artificial flavours. We think it's the best ginger beer out there. Period.",
        image:
          "https://ojasblend.com/wp-content/uploads/2021/03/dickies-ginger-beer-300x214.png",
      },
      {
        name: "DICKIES GINGER BEER",
        description:
          "Dickie's Ginger is your local Vancouver ginger beer company. Made fresh weekly from all whole ingredients, no junk or artificial flavours. We think it's the best ginger beer out there. Period.",
        image:
          "https://ojasblend.com/wp-content/uploads/2021/03/dickies-ginger-beer-300x214.png",
      },
      {
        name: "DICKIES GINGER BEER",
        description:
          "Dickie's Ginger is your local Vancouver ginger beer company. Made fresh weekly from all whole ingredients, no junk or artificial flavours. We think it's the best ginger beer out there. Period.",
        image:
          "https://ojasblend.com/wp-content/uploads/2021/03/dickies-ginger-beer-300x214.png",
      },
      {
        name: "DICKIES GINGER BEER",
        description:
          "Dickie's Ginger is your local Vancouver ginger beer company. Made fresh weekly from all whole ingredients, no junk or artificial flavours. We think it's the best ginger beer out there. Period.",
        image:
          "https://ojasblend.com/wp-content/uploads/2021/03/dickies-ginger-beer-300x214.png",
      },
      {
        name: "DICKIES GINGER BEER",
        description:
          "Dickie's Ginger is your local Vancouver ginger beer company. Made fresh weekly from all whole ingredients, no junk or artificial flavours. We think it's the best ginger beer out there. Period.",
        image:
          "https://ojasblend.com/wp-content/uploads/2021/03/dickies-ginger-beer-300x214.png",
      },
    ],
    creator: [
      {
        category: "Base",
        options: [
          "Long grain rice",
          "Quinoa and Cauli not-so-rice",
          "Spring mix",
          "50/50 (Choose any two of the options above)",
        ],
      },
      {
        category: "Sauce",
        options: [
          "Smoked Truffle Yogurt",
          "Butter Chicken Sauce",
          "Creamy Butter Wine Sauce",
          "Curry-mayo",
          "Mint-mayo",
          "Khadi-sauce",
          "Tamarind and Dates Vinaigrette",
        ],
      },
      {
        category: "Garnish",
        options: [
          "Brown Onion",
          "Crispy Garlic",
          "Crunchy Lentils",
          "Sweet Potato Chips",
        ],
      },
      {
        category: "Protein",
        options: [
          "Charred chicken tikka",
          "Lamb skewer",
          "Dill and beetroot Salmon",
          "Ahi Tuna",
          "Grilled Shrimps",
          "Grilled Tofu Kebab",
          "Cottage cheese steak",
          "Chickpeas",
          "Hard boil eggs",
        ],
      },
      {
        category: "Toppings",
        options: [
          "Pickled cabbage",
          "Pickled Onion",
          "Pomegranate",
          "Fresh Red Radish",
          "Baby Spinach",
          "Raw beetroot",
          "Carrots",
          "Cucumber",
          "Pickled Jalapeño",
          "Edamame beans",
          "Avocado",
        ],
      },
    ],
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <div className="menu-header-text">
          <h1>Our Top Picks</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="menu-categories">
        <div
          className="menu-column"
          onClick={() => {
            setSelectedCategory("creations");
            setShowAllItems(false);
          }}
        >
          OUR CREATIONS
        </div>
        <div
          className="menu-column"
          onClick={() => {
            setSelectedCategory("beverages");
            setShowAllItems(false);
          }}
        >
          Beverages
        </div>
        <div
          className="menu-column"
          onClick={() => {
            setSelectedCategory("creator");
            setShowAllItems(false);
          }}
        >
          Be the Creator
        </div>
      </div>

      <div className="menu-items">
        {selectedCategory === "creator"
          ? menuItems.creator.map((item, index) => (
              <div key={index} className="menu-item">
                <h3>{item.category}</h3>
                <ul>
                  {item.options.map((option, i) => (
                    <li key={i}>{option}</li>
                  ))}
                </ul>
              </div>
            ))
          : menuItems[selectedCategory]
              .slice(0, showAllItems ? menuItems[selectedCategory].length : 4)
              .map((item, index) => (
                <div key={index} className="menu-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="menu-item-image"
                  />
                  <div className="menu-item-details">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
      </div>

      {selectedCategory !== "creator" && !showAllItems && (
        <button
          className="view-menu-button"
          onClick={() => setShowAllItems(true)}
        >
          View Entire Menu
        </button>
      )}
    </div>
  );
};

export default Menu;
