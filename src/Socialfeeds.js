import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import "./Socialfeeds.css";
import { Helmet } from "react-helmet";

const Socialfeeds = () => {
  const [fbWidth, setFbWidth] = useState(500);
  const fbBoxRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (fbBoxRef.current) {
        setFbWidth(fbBoxRef.current.offsetWidth); // ✅ match container width
      }
    };

    updateWidth(); // initial run
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <>
                   <Helmet>
      <title>Follow Our Social Feeds for Latest Updates | JVT Immigration</title>
    </Helmet>
      {/* Banner */}
      <div
        className="abouts-banner behind-nav"
        style={{ backgroundImage: `url('/images/bg-page-title.jpg')` }}
      >
        <div className="abouts-banner-content">
          <h1 className="aboutheading">Social Feeds</h1>
          <p className="abouts-breadcrumb">
            <Link to="/">Home</Link> - Social Feeds
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="socialfeeds-container">
        {/* Header with Social names */}
        <div className="socialfeeds-header">
          <div className="social-left">
            <FaFacebookF className="facebook-icon" /> 
            <span className="facebook-text">Facebook</span>
          </div>
          <h2 className="socialfeeds-title">Social Feeds</h2>
          <div className="social-right">
            <FaInstagram className="instagram-icon" />
            <span className="instagram-text">Instagram</span>
          </div>
        </div>

        {/* Feeds Boxes */}
        <div className="socialfeeds-boxes">
          {/* Facebook Box */}
          <div className="social-box facebook-box" ref={fbBoxRef}>
            <iframe
              title="Facebook Feed"
              src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fjvtimmigrationconsultant%2F&tabs=timeline&width=${fbWidth}&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`}
              width="100%"
              height="600"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>

          {/* Instagram Box */}
          <div className="social-box instagram-box">
            <iframe
              title="Instagram Feed"
              src="https://www.instagram.com/jvt.immigration/embed"
              width="100%"
              height="600"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowTransparency={true}
            ></iframe>
          </div>
        </div>

        {/* Follow Buttons */}
        <div className="socialfeeds-buttons">
          <a
            href="https://www.facebook.com/jvtimmigrationconsultant/"
            target="_blank"
            rel="noopener noreferrer"
            className="follow-btn facebook-btn"
          >
            <FaFacebookF className="btn-icon" /> Follow Us on Facebook
          </a>
          <a
            href="https://www.instagram.com/jvt.immigration/"
            target="_blank"
            rel="noopener noreferrer"
            className="follow-btn instagram-btn"
          >
            <FaInstagram className="btn-icon" /> Follow Us on Instagram
          </a>
        </div>
      </div>
    </>
  );
};

export default Socialfeeds;
