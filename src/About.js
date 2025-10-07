import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./About.css";
import Whychooseus from "./Whychooseus";
import { FaCalendarAlt, FaCheckCircle, FaGlobe, FaUserTie } from "react-icons/fa"; 
import { Helmet } from "react-helmet";

const About = () => {
  const location = useLocation();
  const pathArray = location.pathname.split("/").filter(Boolean);

  return (
    <>
      <Helmet>
        <title>Best Visa Consultant in Punjab | JVT Immigration</title>
      </Helmet>
    <div className="abouts-page">
      {/* Full-width Banner Behind Nav */}
<div
  className="abouts-banner behind-nav"
  style={{ backgroundImage: `url('/images/bg-page-title.jpg')` }}
>
  <div className="abouts-banner-content">
    <h1 className="aboutheading">About</h1>
    <p className="abouts-breadcrumb">
      <Link to="/">Home</Link>
      {pathArray.length > 0 &&
        pathArray.map((item, index) => (
          <span key={index}> - {item.charAt(0).toUpperCase() + item.slice(1)}</span>
        ))}
    </p>
  </div>
</div>

      {/* Main Section */}
      <div className="abouts-main-wrapper">
        <div className="abouts-main container">
          <div className="abouts-left">
            <h2>
              <span className="abouts-yellow-bar"></span>
              Helping the Students to Build a Promising Career
            </h2>
            <p>
              The success story of JVT Immigration Pvt Ltd started in the year 2006 when the venture
              was named as Jai Vishnu Telecom. Because of numerous tie-ups and connections, Mr. Vipan
              (Owner OF JVT Immigration) initiated an immigration venture named <strong>JVT Immigration</strong>.
              Established 5 years back, JVT Immigration is a leader in offering educational services
              for international aspirants. We guide the students who wish to study abroad. We work
              towards connecting the students with the right college/university and with the right
              course.
            </p>
            <p>
              We tend to work towards creating a huge network of opportunities for international
              education aspirants. We help the students to discover the best courses, prepare their
              visa documents, and simplify the cumbersome process of getting a visa.
            </p>
         <p className="abouts-call-info">
  Call to ask <span className="highlight-text">any question</span>+91-95639-95639
</p>
          </div>

       <div className="abouts-right">
  <img src="/images/abt-top-side-img1.png" alt="About JVT Immigration" className="main-img"/>
  <img src="/images/certificate.png" alt="Certificate" className="overlay-img" />
</div>
        </div>
        
      </div>
      <div className="about-cta-section">
  <div className="about-cta-content-1200">
    <div className="about-cta-left">
<div className="about-cta-left">
  <h2>
    Ready to take the next step? <span className="cta-subtext">Book an appointment now.</span>
  </h2>
</div>
    </div>
    <div className="about-cta-right">
<Link to="/appointment" className="about-cta-btn-link">
  <button className="about-cta-btn">
    <FaCalendarAlt className="cta-icon" />
    Book an Appointment
  </button>
</Link>
    </div>
  </div>
</div>
<div className="about-why-choose-section">
  <div className="about-why-choose-content-1200">
    <div className="about-why-left">
      <h2 className="about-why-title">Why Choose Us</h2>
    </div>
    <div className="about-why-right">
      <p>
        Recognizing the enhancing need and desire of the students to study abroad, we at JVT Immigration cater to the educational needs and requirements of the students. We help the students make wise decisions based on valuable experience and relevant information that could pave a way towards a successful future.
      </p>
    </div>
  </div>
</div>
<div className="about-features-section">
  <div className="about-features-content-1200">
    {/* Feature 1 */}
    <div className="about-feature-item">
      <div className="feature-icon">
        <FaUserTie /> {/* Experienced Team Icon */}
      </div>
      <h3>Experienced Team</h3>
      <p>Our Professional Team of Immigration Experts will guide you through all Visa processes.</p>
    </div>

    <div className="feature-divider"></div>

    {/* Feature 2 */}
    <div className="about-feature-item">
      <div className="feature-icon">
        <FaCheckCircle /> {/* Success Rate Icon */}
      </div>
      <h3>Success Rate</h3>
      <p>We have the highest Success Rate of Study Visa Approval.</p>
    </div>

    <div className="feature-divider"></div>

    {/* Feature 3 */}
    <div className="about-feature-item">
      <div className="feature-icon">
        <FaGlobe /> {/* Global Partnership Icon */}
      </div>
      <h3>Global Partnership</h3>
      <p>We have partnerships with top universities around the world.</p>
    </div>
  </div>
</div>
<Whychooseus/>





    </div>
    </>
  );
};

export default About;
