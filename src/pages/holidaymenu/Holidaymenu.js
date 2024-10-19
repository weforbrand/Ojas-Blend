import React from "react";
import "./Holidaymenu.css";

const HolidayMenu = () => {
  return (
    <div className="holiday-menu">
      <div className="top-section">
        <div className="description">
          <p>
            Since opening in 2021, Ojas has celebrated the holidays with
            elaborate multi-course dinners. From the succulent roast turkey to
            the sweet and tangy cranberry sauce, each recipe is crafted to
            create a memorable and delicious feast.
          </p>
          <p>
            Feel free to customize the menu to suit your preferences and dietary
            needs.
          </p>
        </div>
        <div className="image-container">
          <img
            src="	https://ojasblend.com/wp-content/uploads/2024/10/gallery-4-1.png"
            alt="Holiday feast"
            className="holiday-image"
          />
        </div>
      </div>

      <h2>Holiday Menu</h2>

      <div className="menu-section">
        <h3>Classic Menu - for 10 - 15 People - $480</h3>
        <ul>
          <li>
            <strong>Roast Turkey:</strong> A perfectly roasted turkey with a
            simple dry brine of kosher salt, crispy skin, and juicy meat.
          </li>
          <li>
            <strong>Classic Sage and Sausage Stuffing:</strong> Fluffy bread
            cubes with savory sausage, aromatic sage, and garlic.
          </li>
          <li>
            <strong>Mashed Potatoes or Sweet Potato Mashed:</strong> Creamy
            Yukon Gold potatoes mashed with butter, cream, and garlic.
          </li>
          <li>
            <strong>Green Bean Casserole:</strong> Tender green beans with a
            creamy mushroom sauce and crispy fried onions.
          </li>
          <li>
            <strong>Cranberry Sauce:</strong> A tart and sweet contrast to the
            savory dishes.
          </li>
          <li>
            <strong>Dinner Rolls:</strong> Soft, buttery rolls perfect for
            sopping up gravy.
          </li>
          <li>
            <strong>Pumpkin Pie:</strong> The classic dessert to complete the
            meal.
          </li>
        </ul>

        <h3>Classic Menu (4-6 People) - $170</h3>
        <ul>
          <li>
            <strong>Starter:</strong> Roasted Caprese Salad (GF, VEG)
          </li>
          <li>
            <strong>Entrée:</strong> Slow Cooked Turkey Breasts with Herbs &
            Butter (GF)
          </li>
          <li>
            <strong>Classic Stuffing (VEG):</strong> House-baked bread with
            celery, onion, spices, and vegetable stock.
          </li>
          <li>
            <strong>Mashed Potatoes (GF, VEG):</strong> Hand-whipped BC Yukon
            potatoes with butter and cream.
          </li>
          <li>
            <strong>
              Honey Glazed Roasted Root Winter Vegetables (GF, VEG, N):
            </strong>{" "}
            Caramelized vegetables with walnut crumble and parsley.
          </li>
          <li>
            <strong>Optional Vegetarian Entrée:</strong> Baked Spaghetti Squash
            with a Ratatouille Gratin (VEG)
          </li>
        </ul>

        <h3>Optional Add-Ons</h3>
        <ul>
          <li>Charcuterie Boards & Platters</li>
        </ul>

        <h3>Classic Menu (4-6 People) - $160</h3>
        <ul>
          <li>
            <strong>Roasted Carved Turkey:</strong> With thyme-scented gravy,
            cranberry sauce.
          </li>
          <li>
            <strong>Apple & Onion Stuffing:</strong> Sage, celery, fresh herbs,
            focaccia.
          </li>
          <li>
            <strong>Roasted Garlic Mashed Potato</strong>
          </li>
          <li>
            <strong>Brussels Sprouts & Roasted Carrots:</strong> With maple
            butter and rosemary.
          </li>
          <li>
            <strong>Spinach & Almond Salad:</strong> Dried apricots, red onion,
            cranberry & balsamic vinaigrette.
          </li>
          <li>
            <strong>Baked Spiced Pumpkin Pie:</strong> Served with whipped
            cream.
          </li>
        </ul>

        <h3>Vegan (4-6 People) - $160</h3>
        <ul>
          <li>
            <strong>Roast Vegetable Loaf & Cranberry Glaze:</strong> Chickpea,
            carrot, apple, mushroom, zucchini.
          </li>
          <li>
            <strong>Butternut Squash & Cauliflower Stuffing:</strong> Walnuts,
            celery, rosemary.
          </li>
          <li>
            <strong>Roasted Garlic & Olive Oil Mashed Potato</strong>
          </li>
          <li>
            <strong>Roasted Baby Beets:</strong> Citrus vinaigrette.
          </li>
          <li>
            <strong>Brussels Sprout & Broccoli Salad:</strong> Dried
            cranberries, pumpkin seed, apple cider vinaigrette.
          </li>
          <li>
            <strong>Pumpkin Spice Cake:</strong> Maple pecan streusel (DF | GF |
            Vegan).
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HolidayMenu;
