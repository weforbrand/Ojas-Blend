import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div
      className="navbar-background"
      style={{
        position: "relative",
        height: "750px",
      }}
    >
      <div className="background-image"></div>

      <div className="text-overlay">
        <h1 className="welcome-text">Welcome to Ojas</h1>
        <p className="info-text">
          Ojas Provides Delicious, Healthy Meals For Your Active Lifestyle.
        </p>
        <p className="description-text">
          Ojas Blend offers the maximum expression of healthy, tasty and
          conscience indulgence. We’re an efficient on-demand health conscious
          restaurant that offers delicious, customizable and nutritional meals
          for those who need the perfect balance between taste, health and
          timeliness.
        </p>
        <button className="cta-button">Order Now</button>
      </div>

      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: "transparent",
          position: "absolute",
          top: 0,
          width: "100%",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            <img
              src="https://ojasblend.com/wp-content/uploads/2021/03/OJA-NEW-LOGO-1.png"
              alt="Ojas Logo"
              width="90"
              height="80"
              className="d-inline-block align-text-top"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="menuDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <ul className="dropdown-menu" aria-labelledby="menuDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      White Rock, BC
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Vancouver Downtown, BC
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Catering
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="locateUsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Locate Us
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="locateUsDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      White Rock, BC
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Vancouver Downtown, BC
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="holidayMenuDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Holiday Menu <i className="bi bi-gift"></i>
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="holidayMenuDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/Classic Menu">
                      Classic Menu for 10-15 PPL
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Classic Menu">
                      Classic Menu for 4-6 PPL
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Menu 3">
                      Menu 3
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/ Vegan">
                      Vegan
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex mt-3 mt-lg-0" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
