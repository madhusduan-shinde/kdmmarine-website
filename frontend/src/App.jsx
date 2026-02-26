import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout"

// Sections
import Hero from "./components/Hero/CarouselHero";
import About from "./components/About/About";
import Service from "./components/Services/Service";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <>
                <div id="hero-section"><Hero /></div>
                <div id="about-company-section"><About /></div>
                <div id="services-section"><Service /></div>
                <div id="contact-section"><Contact /></div>
              </>
            }
          />
          <Route
            path="*"
            element={<h2 style={{ textAlign: "center", padding: "100px 0" }}>Page Not Found</h2>}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
