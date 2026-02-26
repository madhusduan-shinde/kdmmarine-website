import React, { useState, useEffect } from "react";
import "../Hero/CarouselHero.css";
import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";

const slidesData = [
  {
    img: img1,
    title: "Specialists in Marine Engineering",
    text: "Main engine, auxiliary systems, and complete engine room overhauling.",
    button: "About Us",
    link: "#about-section",
  },
  {
    img: img2,
    title: "Reliable Marine Repair Solutions",
    text: "Expert ship engine overhauling and maintenance services you can trust.",
    button: "Our Services",
    link: "#services-section",
  },
  {
    img: img3,
    title: "Keeping Vessels Operational & Safe",
    text: "Professional troubleshooting and marine machinery servicing.",
    button: "Contact Us",
    link: "#contact-section",
  },
];

const CarouselHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = 5000;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, slideInterval);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const whatsappNumber = "8217750036";
  const whatsappMessage = "Hello KDM Marine Services, I'd like to know more about your services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="carousel-hero-banner">
      {/* === Carousel Slides === */}
      <div className="carousel-images">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={slide.img} alt={slide.title} />
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <a href={slide.link} className="cta-button">
  {slide.button}
</a>

            </div>
          </div>
        ))}
      </div>

      {/* === Dots Indicators === */}
      <div className="carousel-indicators">
        {slidesData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CarouselHero;
