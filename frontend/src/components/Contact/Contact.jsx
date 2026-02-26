import React from "react";
import "../Contact/Contact.css";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const whatsappNumber = "8217750036";
  const callNumber = "8660229188";
  const email = "info@kdmmarines.com";
  
  const whatsappMessage = "Hello KDM Marine Services, I'd like to know more about your services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const callUrl = `tel:+91${callNumber}`;

  return (
    <div className="contact-section" id="contact-section">
        {/* Contact Information Section */}
        <div className="contact-info">
          <div className="info-content">
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-subtitle">
              We're here to help you achieve your goals. Whether you have
              questions about our services, want to schedule a consultation,
              or just want to say hello, feel free to reach out through any of
              the contact methods below.
            </p>

            {/* Contact Methods */}
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon phone-icon">
                  <FaPhoneAlt />
                </div>
                <div className="method-content">
                  <h3 className="method-title">Phone Call</h3>
                  <a 
                    href={callUrl} 
                    className="method-link"
                  >
                    +91 8660229188
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon whatsapp-icon">
                  <FaWhatsapp />
                </div>
                <div className="method-content">
                  <h3 className="method-title">WhatsApp</h3>
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="method-link"
                  >
                    +91 8217750036
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon email-icon">
                  <FaEnvelope />
                </div>
                <div className="method-content">
                  <h3 className="method-title">Email</h3>
                  <a 
                    href={`mailto:${email}`} 
                    className="method-link"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contact;
