import React from "react";
import "./About.css";
import useScrollAnimation from "../../useScrollAnimation";
import img6 from "../../images/6.png";
import img7 from "../../images/7.png";

const About = () => {
  useScrollAnimation();

  return (
    <section className="about-section" id="about-section">
      <div className="container">
        <div className="row">

          {/* Content Column */}
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2 animate-fade-right">
            <div className="inner-column">
              <div className="about-section__header animate-fade-up">
                <h2 className="about-section__title">About Company</h2>
              </div>

              <div
                className="text animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                <strong>KDM Marine Services</strong> is a specialized ship repair and marine engineering service provider based in Moodbidri, Mangalore. We deliver reliable, high-quality mechanical solutions for marine vessels, focusing on engine overhauling, troubleshooting, and complete engine room maintenance.
              </div>

              <div
                className="text animate-fade-up"
                style={{ animationDelay: "0.3s" }}
              >
                With a skilled technical team and strong industry experience, we support vessel owners, operators, and marine companies with efficient repair services that minimize downtime and maximize operational safety. Our commitment is simple - precision workmanship, timely service, and dependable marine solutions.
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12 animate-fade-left">
            <div className="inner-column">
              <figure
                className="image-1 animate-zoom-in"
                style={{ animationDelay: "0.2s" }}
              >
                <img
                  src={img6}
                  alt="Professional training and learning"
                />
              </figure>
              <figure
                className="image-2 animate-zoom-in"
                style={{ animationDelay: "0.4s" }}
              >
                <img
                  src={img7}
                  alt="Career development and consultancy"
                />
              </figure>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
