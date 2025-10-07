import React, { useEffect, useState } from "react";
import "./Header.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [sidebarStudyOpen, setSidebarStudyOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.querySelector(".nav-bar");
      if (!navBar) return;

      const triggerHeight = navBar.offsetTop + navBar.offsetHeight;
      setShowSticky(window.scrollY > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-left">
            Welcome to our JVT Immigration <span className="highlight">Consultant!</span>
          </div>
   <div className="top-right desktop-icons">
  <a
    href="https://www.facebook.com/jvtimmigrationconsultant/"
    target="_blank"
    rel="noopener noreferrer"
    className="icon-circle"
  >
    <FaFacebookF />
  </a>
  <a
    href="https://www.instagram.com/jvt.immigration/"
    target="_blank"
    rel="noopener noreferrer"
    className="icon-circle"
  >
    <FaInstagram />
  </a>
  <a
    href="https://www.youtube.com/@jvtimmigrationconsultantsp7946"
    target="_blank"
    rel="noopener noreferrer"
    className="icon-circle"
  >
    <FaYoutube />
  </a>
</div>

        </div>
      </div>

      {/* Middle Bar */}
      <div className="middle-bar">
        <div className="container middle-flex">
         <div className="logo">
  <Link to="/">
    <img src="/images/jvt-immigration-logo.png" alt="JVT Immigration Logo" />
  </Link>
</div>
          <div className="mobile-menu-icon" onClick={toggleSidebar}>
            <FaBars size={27} />
          </div>
          <div className="contact-info desktop-contact">
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <div>
                <span className="contact-label">Call Us:</span>
                <span className="contact-value">+91-95639-95639</span>
                <div className="contact-sub">Mon - Sat</div>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <span className="contact-label">Mail us for help:</span>
                <span className="contact-value">info@jvtimmigration.com</span>
              </div>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <span className="contact-label">24–26, The Mall Road,</span>
                <span className="contact-value">Opp. Central Jail, Ferozepur City</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="nav-bar desktop-nav">
        <div className="nav-container">
          <nav className="nav-links-wrapper">
            <ul className="nav-list">
              <li>
  <NavLink 
    to="/" 
    className={({ isActive }) => isActive ? "active-link" : ""}
  >
    Home
  </NavLink>
</li>

              <li><NavLink to="/about"  className={({ isActive }) => isActive ? "active-link" : ""}>About Us</NavLink></li>
          <li className="dropdown">
<NavLink 
  to="/study-abroad" 
  className={({ isActive }) => `dropdown-toggle ${isActive ? "active-link" : ""}`}
>
  Study Abroad +
</NavLink>
  <ul className="dropdown-menu">
    <li><Link to="/study-abroad/canada-study-visa-consultants">Canada Study Visa Consultants</Link></li>
    <li><Link to="/study-abroad/australia-study-visa-consultants">Australia Study Visa Consultants</Link></li>
    <li><Link to="/study-abroad/newzealand-study-visa-consultants">New Zealand Study Visa Consultants</Link></li>
    <li><Link to="/study-abroad/uk-study-visa-consultants">UK Study Visa Consultants</Link></li>
    <li><Link to="/study-abroad/usa-study-visa-consultants">USA Study Visa Consultants</Link></li>
  </ul>
</li>
              <li><NavLink to="/recent-visa" className={({ isActive }) => isActive ? "active-link" : ""}>Recent Visa’s</NavLink></li>
              <li><NavLink to="/videos" className={({ isActive }) => isActive ? "active-link" : ""}>Videos</NavLink></li>
              <li><NavLink to="/contact-us" className={({ isActive }) => isActive ? "active-link" : ""}>Contact Us</NavLink></li>
            </ul>
          </nav>

          <div className="appointment-wrapper">
            <Link to="/appointment" className="appointment-btn">Appointment →</Link>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${sidebarOpen ? "open" : ""}`}>
      <div className="sidebar-header">
  <Link to="/" onClick={toggleSidebar}>
    <img src="/images/jvt-immigration-logo.png" alt="JVT Logo" className="sidebar-logo" />
  </Link>
  <FaTimes className="close-icon" onClick={toggleSidebar} />
</div>

        <ul className="sidebar-nav">
          <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/about" onClick={toggleSidebar}>About Us</Link></li>
          <li>
         <Link 
  to="/study-abroad" 
  className="sidebar-dropdown-toggle" 
  onClick={() => setSidebarStudyOpen(!sidebarStudyOpen)}
>
  Study Abroad +
</Link>

            {sidebarStudyOpen && (
              <ul className="sidebar-dropdown-menu">
                <li><Link to="/study-abroad/canada-study-visa-consultants" onClick={toggleSidebar}>Canada Study Visa Consultants</Link></li>
                <li><Link to="/study-abroad/australia-study-visa-consultants" onClick={toggleSidebar}>Australia Study Visa Consultants</Link></li>
                <li><Link to="/study-abroad/newzealand-study-visa-consultants" onClick={toggleSidebar}>New Zealand Study Visa Consultants</Link></li>
                <li><Link to="/study-abroad/uk-study-visa-consultants" onClick={toggleSidebar}>UK Study Visa Consultants</Link></li>
                <li><Link to="/study-abroad/usa-study-visa-consultants" onClick={toggleSidebar}>USA Study Visa Consultants</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/recent-visa" onClick={toggleSidebar}>Recent Visa’s</Link></li>
          <li><Link to="/videos" onClick={toggleSidebar}>Videos</Link></li>
          <li><Link to="/contact-us" onClick={toggleSidebar}>Contact Us</Link></li>
        </ul>

        <div className="sidebar-contact">
          <div className="contact-item"><FaPhoneAlt color="#ffc000"/> <span>+91-95639-95639</span></div>
          <div className="contact-item"><FaEnvelope color="#ffc000"/> <span>info@jvtimmigration.com</span></div>
          <div className="contact-item"><FaMapMarkerAlt color="#ffc000"/> <span>24–26, The Mall Road, Ferozepur City</span></div>
        </div>

        <Link to="/appointment" className="appointment-btn sidebar-appointment">Appointment →</Link>
      </div>

      <div className={`overlay ${sidebarOpen ? "show" : ""}`} onClick={toggleSidebar}></div>

      {/* Sticky Bottom Header */}
      <div className={`sticky-bottom-header ${showSticky ? "show" : ""} ${sidebarOpen ? "hide" : ""}`}>
        <div className="container sticky-nav-container">
        <div className="sticky-logo">
  <Link to="/">
    <img src="/images/jvt-immigration-logo.png" alt="JVT Immigration Logo" />
  </Link>
</div>
          <nav className="sticky-nav-links">
         <ul className="nav-list">
  <li>
    <NavLink 
      to="/" 
      className={({ isActive }) => isActive ? "active-link" : ""}
    >
      Home
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="/about" 
      className={({ isActive }) => isActive ? "active-link" : ""}
    >
      About Us
    </NavLink>
  </li>
  <li className="dropdown">
    <NavLink 
      to="/study-abroad" 
      className={({ isActive }) => `dropdown-toggle ${isActive ? "active-link" : ""}`}
    >
      Study Abroad +
    </NavLink>
    <ul className="dropdown-menu">
      <li>
        <NavLink 
          to="/study-abroad/canada-study-visa-consultants" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Canada Study Visa Consultants
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/study-abroad/australia-study-visa-consultants" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Australia Study Visa Consultants
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/study-abroad/newzealand-study-visa-consultants" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          New Zealand Study Visa Consultants
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/study-abroad/uk-study-visa-consultants" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          UK Study Visa Consultants
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/study-abroad/usa-study-visa-consultants" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          USA Study Visa Consultants
        </NavLink>
      </li>
    </ul>
  </li>
  <li>
    <NavLink 
      to="/recent-visa" 
      className={({ isActive }) => isActive ? "active-link" : ""}
    >
      Recent Visa’s
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="/videos" 
      className={({ isActive }) => isActive ? "active-link" : ""}
    >
      Videos
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="/contact-us" 
      className={({ isActive }) => isActive ? "active-link" : ""}
    >
      Contact Us
    </NavLink>
  </li>
</ul>
          </nav>
          <div className="sticky-appointment-wrapper">
            <Link to="/appointment" className="appointment-btn">Appointment →</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
