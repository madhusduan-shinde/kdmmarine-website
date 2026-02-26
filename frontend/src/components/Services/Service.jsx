import React from "react";
import "./Service.css";
import {
  FaCogs,
  FaTools,
  FaShip,
  FaIndustry,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FaCogs />,
      title: "Main Engine Overhauling & Troubleshooting",
      desc: "Complete inspection, repair, and performance restoration of marine main engines including brands such as MAN, Sulzer, Daihatsu, and Yanmar.",
    },
    {
      icon: <FaTools />,
      title: "Auxiliary Engine Overhauling",
      desc: "Professional auxiliary engine servicing including crankshaft charging, component replacement, and operational testing using experienced sailing teams.",
    },
    {
      icon: <FaShip />,
      title: "Maneuvering Jobs with Spares",
      desc: "On-site maneuvering operations supported with genuine spares and technical assistance for smooth engine handling and vessel movement.",
    },
    {
      icon: <FaIndustry />,
      title: "Engine Room Machinery Overhauling",
      desc: "Full overhauling of engine room equipment including pumps, compressors, valves, and mechanical systems to ensure optimal vessel performance.",
    },
  ];

  return (
    <section className="service-section__container" id ="services-section">
      <div className="service-section__header">
        <h2 className="service-section__title">Services</h2>
        
      </div>

      <div className="service-section__grid">
        {services.map((service, index) => (
          <div className="service-section__card" key={index}>
            <div className="service-section__circle"></div>
            <div className="service-section__content">
              <span className="service-section__icon">{service.icon}</span>
              <h3 className="service-section__card-title">{service.title}</h3>
              <p className="service-section__card-desc">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
