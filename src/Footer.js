import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaSnapchatGhost,
  FaAngleRight,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="footer-section"
      style={{ backgroundImage: `url('/images/bg-footer1.jpg')` }}
    >
      {/* Overlay Banner */}
      <div className="footer-overlay">
        <img src="/images/bg-slider-03.jpg" alt="overlay" />
        <div className="footer-overlay-content">
          <h2>Get started to make easy!</h2>
          <div className="footer-overlay-buttons">
            <Link to="/contact-us">
              <button className="btn contact-btn">
                <span>Contact Us</span>
              </button>
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none", display: "inline-block", marginTop: "15px" }}
            >
              <button className="about-link">
                <span>About Us</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer-container">
        {/* Left Side */}
        <div className="footer-left">
          <img
            src="/images/jvt-immigration-logo.png"
            alt="JVT Immigration"
            className="footer-logo"
          />
          <p className="footer-desc">
            JVT Immigration is a leader in international education services. We
            connect the students with the right course in the right college and
            the right country. Creating a huge network of opportunities for the
            students is what we thrive for.
          </p>
          <Link to="/about">
            <button className="btn black-btn">About Us</button>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/" className="footer-link">
                <FaAngleRight className="arrow" /> Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer-link">
                <FaAngleRight className="arrow" /> About Us
              </Link>
            </li>
            <li>
              <Link to="/study-abroad" className="footer-link">
                <FaAngleRight className="arrow" /> Study Abroad
              </Link>
            </li>
            <li>
              <Link to="/our-blogs" className="footer-link">
                <FaAngleRight className="arrow" /> Blogs
              </Link>
            </li>
            <li>
              <Link to="/social-feeds" className="footer-link">
                <FaAngleRight className="arrow" /> Social Feeds
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="footer-link">
                <FaAngleRight className="arrow" /> Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Locations */}
        <div className="footer-locations">
          <h3>Locations</h3>
          <p>
            <FaMapMarkerAlt className="location-icon" />
            <span className="underline">Head Office:</span> <br />
            Office No 24-26, The Mall Road, Near Idea Showroom, Opp. Central Jail, Ferozepur City 152002
          </p>
          <p>
            <FaMapMarkerAlt className="location-icon" />
            <span className="underline">Mohali Office:</span> <br />
            SCF 129, 2nd Floor, Sector 61, Phase 7, SAS Nagar, Mohali
          </p>
          <p>
            <FaMapMarkerAlt className="location-icon" />
            <span className="underline">Ludhiana Office:</span> <br />
            SCO 27, 1st Floor, Feroze Gandhi Market Rd, Jila Kacheri Area, Model Gram, Ludhiana
          </p>
          <p>
            <FaMapMarkerAlt className="location-icon" />
            <span className="underline">Jalalabad Office:</span> <br />
            Opposite Harkrishan Palace, FF Road, Near Ghantaghar Chowk, Jalalabad
          </p>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>
            <FaEnvelope className="footercontact-icon" /> info@jvtimmigration.com
          </p>
          <p>
            <FaPhoneAlt className="footercontact-icon" /> +91-95639-95639
          </p>
          <p>
            <strong>Open Hours:</strong> <br />
            Mon – Sat: 10 am – 5 pm <br />
            Sunday: CLOSED
          </p>
        <div className="social-icons">
  <a 
    href="https://www.instagram.com/jvt.immigration/" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ color: "inherit", textDecoration: "none" }}
  >
    <FaInstagram />
  </a>
  <a 
    href="https://www.facebook.com/jvtimmigrationconsultant/" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ color: "inherit", textDecoration: "none" }}
  >
    <FaFacebookF />
  </a>
  <a 
    href="https://www.youtube.com/@jvtimmigrationconsultantsp7946" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ color: "inherit", textDecoration: "none" }}
  >
    <FaYoutube />
  </a>
  <a 
    href="https://www.snapchat.com/@jvtimmi" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ color: "inherit", textDecoration: "none" }}
  >
    <FaSnapchatGhost />
  </a>
</div>

        </div>
      </div>

      <div className="footer-bottom-bar-wrapper">
        <div className="footer-bottom-bar">
          <p>
            © 2025 JVT Immigration Pvt Ltd. Developed by&nbsp;
            <a href="https://socialsimba.com/" target="_blank" rel="noopener noreferrer">
              Social Simba
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
