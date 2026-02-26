import React from "react";
import "./Footer.css";
import bgImage from "../../images/BgImage.png";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const whatsappNumber = "8217750036";
  const callNumber = "8660229188"; // New call number
  const whatsappMessage = "Hello KDM Marine Services, I'd like to know more about your services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const callUrl = `tel:+91${callNumber}`;

  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="footer-content">
        {/* Company Name */}
        <h2 className="company-name">
          KDM Marine Services
        </h2>

        {/* Address */}
        <h3 className="footer-title">
          Moodbidri, Mangaluru, Karnataka - 574227
        </h3>

        {/* Contact Info */}
        <div className="contact-row">
          <div className="contact-item">
            <FaPhoneAlt aria-hidden="true" />
            <a
              className="contact-link"
              href={callUrl}
              aria-label="Call"
            >
              +91 8660229188
            </a>
          </div>

          <div className="contact-item">
            <FaWhatsapp aria-hidden="true" />
            <a
              className="contact-link"
              href={whatsappUrl} 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              +91 8217750036
            </a>
          </div>

          <div className="contact-item">
            <FaEnvelope aria-hidden="true" />
            <a className="contact-link" href="mailto:info@kdmmarines.com" aria-label="Email">
              info@kdmmarines.com
            </a>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom Text */}
        <div className="footer-bottom">
          <p>
            Copyright © 2025 <span>kdmmarines.com</span>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
