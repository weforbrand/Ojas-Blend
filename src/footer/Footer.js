import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Column 1: Logo and Contact Info */}
        <div className="column">
          <img
            src="https://ojasblend.com/wp-content/uploads/2021/03/OJA-NEW-LOGO-1.png"
            alt="Ojas Blend Logo"
            className="logo"
          />
          <div className="contactInfo">
            <p className="address">
              <FaMapMarkerAlt className="icon" />
              88 W, Pender St #2011, Vancouver, BC – V6B 6N9
            </p>
            <p className="contactEmail">
              <FaEnvelope className="icon" />
              <a href="mailto:contact@ojasblend.com" className="link">
                contact@ojasblend.com
              </a>
            </p>
          </div>
        </div>

        <div className="column">
          <h4 className="heading">Quick Links</h4>
          <ul className="list">
            <li>
              <a href="#about" className="link">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="link">
                Services
              </a>
            </li>
            <li>
              <a href="#menu" className="link">
                Menu
              </a>
            </li>
            <li>
              <a href="#pricing" className="link">
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" className="link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="column">
          <h4 className="heading">Useful Links</h4>
          <ul className="list">
            <li>
              <a href="#privacy" className="link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="link">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#disclaimer" className="link">
                Disclaimer
              </a>
            </li>
            <li>
              <a href="#elements" className="link">
                Elements
              </a>
            </li>
            <li>
              <a href="#support" className="link">
                Support
              </a>
            </li>
          </ul>
        </div>

        <div className="column">
          <h4 className="heading">Follow Us</h4>
          <div className="socialIcons">
            <a href="https://facebook.com" className="socialLink">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" className="socialLink">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" className="socialLink">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
