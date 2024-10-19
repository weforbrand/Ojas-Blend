import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Scroller from "./scroller/Scroller";
import About from "./about/About";
import Trust from "./trust/Trust";
import ServicesPage from "./services/Services";
import Menu from "./menu/Menu";
import Cta from "./cta/CTA";
import Whyus from "./whyus/Whyus";
import Testimonial from "./testimonial/Testimonial";
import Footer from "./footer/Footer";
import Holidaymenu from "./pages/holidaymenu/Holidaymenu";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Scroller />
              <About />
              <Trust />
              <Cta />
              <ServicesPage />
              <Menu />
              <Cta />
              <Whyus />
              <Testimonial />
            </>
          }
        />

        <Route path="/Classic Menu" element={<Holidaymenu />} />
        <Route path="/Classic Menu" element={<Holidaymenu />} />

        <Route path="/Menu 3" element={<Holidaymenu />} />

        <Route path="/ Vegan" element={<Holidaymenu />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
