import React from "react";
import { FaPassport, FaUsers, FaPlane, FaGraduationCap, FaUniversity, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Box.css";

const services = [
  {
    title: "Visa Assistance",
    icon: <FaPassport />,
    number: "01",
    image: "/images/box1.jpg",
    description: "We provide expert visa guidance for multiple countries.",
    link: "/study-abroad",
  },
  {
    title: "Overseas Manpower Solutions",
    icon: <FaPlane />,
    number: "02",
    image: "/images/box2.jpg",
    description: "Connecting skilled manpower with international opportunities.",
    link: "/overseas-manpower-solutions",
  },
  {
    title: "Career Counselling",
    icon: <FaGraduationCap />,
    number: "03",
    image: "/images/box3.jpg",
    description: "Guidance to shape your career abroad effectively.",
    link: "/contact-us",
  },
  {
    title: "Admission Guidance",
    icon: <FaUniversity />,
    number: "04",
    image: "/images/box4.jpg",
    description: "Support for admission into top universities worldwide.",
    link: "/contact-us",
  },
];

const Box = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-bg" />
            <div className="boxoverlay">
              <div className="icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <span className="service-number">{service.number}</span>
            </div>

            {/* Hover content */}
            <div className="hover-content">
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>

            {/* Hover circle with Link */}
            <Link to={service.link} className="hover-circle">
              <FaArrowRight />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Box;
