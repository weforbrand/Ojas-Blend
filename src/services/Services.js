import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faHeart,
  faUsers,
  faBirthdayCake,
  faUtensils,
  faClipboardList,
  faTable,
  faGlassCheers,
  faConciergeBell,
  faFileAlt,
  faHamburger,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";

const ServicesPage = () => {
  return (
    <div className="services-page">
      <div className="services-container">
        <h1 className="services-title">Our Services</h1>
        <p className="services-subtitle">
          Premium Catering Services For Your Taste Only
        </p>
        <p className="services-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>

        <div className="all-services">
          <div className="services-grid">
            <div className="service">
              <FontAwesomeIcon icon={faBusinessTime} className="service-icon" />
              <h3>Corporate Events</h3>
              <p>
                Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>

            <div className="service">
              <FontAwesomeIcon icon={faHeart} className="service-icon" />
              <h3>Wedding Events</h3>
              <p>
                Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>

            <div className="service">
              <FontAwesomeIcon icon={faUsers} className="service-icon" />
              <h3>Social Events</h3>
              <p>
                Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>

            {/* Additional services */}
            <div className="service">
              <FontAwesomeIcon icon={faBirthdayCake} className="service-icon" />
              <h3>Private Parties</h3>
              <p>
                Celebrate in style with our personalized catering for private
                parties that suits your taste and preferences.
              </p>
            </div>

            <div className="service">
              <FontAwesomeIcon icon={faUtensils} className="service-icon" />
              <h3>Catering for Events</h3>
              <p>
                Comprehensive catering services tailored for events of all
                sizes, ensuring a memorable culinary experience.
              </p>
            </div>

            <div className="service">
              <FontAwesomeIcon
                icon={faClipboardList}
                className="service-icon"
              />
              <h3>Meal Prep Services</h3>
              <p>
                Healthy and delicious meal prep services for busy lifestyles,
                helping you stay on track with your dietary goals.
              </p>
            </div>

            <div className="service">
              <FontAwesomeIcon icon={faTable} className="service-icon" />
              <h3>Buffet Services</h3>
              <p>
                Enjoy a variety of dishes with our buffet services, perfect for
                large gatherings and events.
              </p>
            </div>

            <div className="service">
              <FontAwesomeIcon icon={faGlassCheers} className="service-icon" />
              <h3>Themed Events</h3>
              <p>
                Make your event special with themed catering that reflects your
                unique style and vision.
              </p>
            </div>

            <div className="service">
              <FontAwesomeIcon
                icon={faConciergeBell}
                className="service-icon"
              />
              <h3>Corporate Meal Plans</h3>
              <p>
                Fuel your team's productivity with healthy and delicious meal
                plans designed for corporate needs.
              </p>
            </div>

            <div className="service">
              <FontAwesomeIcon icon={faFileAlt} className="service-icon" />
              <h3>Gourmet Picnic Services</h3>
              <p>
                Enjoy the outdoors with our gourmet picnic services, complete
                with delicious food and beautiful presentation.
              </p>
            </div>

            <div className="service">
              <FontAwesomeIcon icon={faHamburger} className="service-icon" />
              <h3>Customized Catering Packages</h3>
              <p>
                Tailor your catering experience with our customized packages to
                fit your specific needs and budget.
              </p>
            </div>

            {/* New Service: Event Coordination Services */}
            <div className="service">
              <FontAwesomeIcon icon={faSitemap} className="service-icon" />
              <h3>Event Coordination Services</h3>
              <p>
                Comprehensive event planning and coordination services to make
                your event seamless and stress-free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
