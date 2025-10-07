import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaSnapchatGhost, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Contactus.css";
import { Helmet } from "react-helmet";

const Contactus = () => {
  const location = useLocation();
  const pathArray = location.pathname.split("/").filter(Boolean);

  return (
    <>
            <Helmet>
      <title>Contact Us - JVT Immigration Consultant</title>
    </Helmet>
      {/* Banner Section */}
      <div
        className="abouts-banner behind-nav"
        style={{ backgroundImage: `url('/images/theme-10.jpg')` }}
      >
        <div className="abouts-banner-content">
          <h1 className="aboutheading">Contact</h1>
          <p className="abouts-breadcrumb">
            <Link to="/">Home</Link>
            {pathArray.length > 0 &&
              pathArray.map((item, index) => (
                <span key={index}>
                  {" "} - {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
              ))}
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-page">
      <div className="contact-section">
        <div className="contact-container">
          {/* Left Column - Social Icons */}
{/* Left Column - Social Icons */}
<div className="social-icons">
  <a
    href="https://www.facebook.com/jvtimmigrationconsultant/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebookF className="icon" />
  </a>
  <a
    href="https://www.instagram.com/jvt.immigration/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram className="icon" />
  </a>
  <a
    href="https://www.youtube.com/@jvtimmigrationconsultantsp7946"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaYoutube className="icon" />
  </a>
  <a
    href="https://www.snapchat.com/@jvtimmi"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaSnapchatGhost className="icon" />
  </a>
</div>



          {/* Right Column - Map */}
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d437977.98598929937!2d74.612999!3d30.950857999999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919e9a642453e73%3A0x7a6d829421f5c5ed!2sJVT%20Immigration%20Consultant%20Private%20Limited!5e0!3m2!1sen!2sus!4v1758888278600!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Branch Section */}
<div className="branches-section">
  <h2 className="branches-heading">Our Branch's</h2>
  
  <div className="branches-container">
    {/* Card 1 - Mohali */}
    <div className="branch-card">
      <img src="/images/jvt-immigration-logo.png" alt="logo" className="branch-logo" />
      <div className="branch-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d439105.3205386298!2d76.72925!3d30.704051!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee8339e7fe73%3A0x59d8660b2c1f6e76!2sPhase%207%2C%20Sector%2061%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20160062%2C%20India!5e0!3m2!1sen!2sus!4v1758888599345!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  <div className="branch-info">
  <h3 className="branch-title">Mohali Office</h3>
  <p><FaMapMarkerAlt className="branch-icon" /> SCF 129, 2nd Floor, Sector 61, Phase 7, SAS Nagar, Mohali.</p>
  <p><FaPhoneAlt className="branch-icon" /> +91-95639-95639</p>
  <p><FaEnvelope className="branch-icon" /> info@jvtimmigration.com</p>
</div>
    </div>

    {/* Card 2 - Ludhiana */}
    <div className="branch-card">
      <img src="/images/jvt-immigration-logo.png" alt="logo" className="branch-logo" />
      <div className="branch-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d438206.12927779614!2d75.22242458906251!3d30.901054100000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83655210d295%3A0x116d43f9b6b32e95!2sJVT%20Immigration%20Consultant%20Ludhiana!5e0!3m2!1sen!2sus!4v1758888667034!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="branch-info">
        <h3 className="branch-title">Ludhiana Office</h3>
        <p><FaMapMarkerAlt className="branch-icon" /> SCO 27, 1st Floor, Feroze Gandhi Market Rd, Jila Kacheri Area, Model Gram, Ludhiana</p>
        <p><FaPhoneAlt className="branch-icon" /> +91-98140-26493</p>
        <p><FaEnvelope className="branch-icon" /> info@jvtimmigration.com</p>
      </div>
    </div>

    {/* Card 3 - Jalalabad */}
    <div className="branch-card">
      <img src="/images/jvt-immigration-logo.png" alt="logo" className="branch-logo" />
      <div className="branch-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d439541.36351971223!2d73.64489088906248!3d30.608107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39177f30ac2b7293%3A0x85def219a481a307!2sClock%20Tower!5e0!3m2!1sen!2sus!4v1758888779641!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="branch-info">
        <h3 className="branch-title">Jalalabad Office</h3>
        <p><FaMapMarkerAlt className="branch-icon" /> Opposite Harkrishan Palace, FF Road, near Ghantaghar Chowk, Jalalabad</p>
        <p><FaEnvelope className="branch-icon" /> info@jvtimmigration.com</p>
      </div>
    </div>

    {/* Card 4 - Coming Soon */}
<div className="branch-card">
  <img src="/images/jvt-immigration-logo.png" alt="logo" className="branch-logo" />
  <div className="branch-info">
    <h3 className="branch-title">Coming Soon</h3>
  </div>
</div>
  </div>
</div>

      </div>
      </div>
    </>
  );
};

export default Contactus;
