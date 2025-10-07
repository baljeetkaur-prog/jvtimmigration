import React, { useEffect, useRef, useState } from "react";
import { FaBullseye, FaEye } from "react-icons/fa";
import "./Whychooseus.css";

const bulletPoints = [
  "Visa Assistance",
  "Travel Assistance",
  "Career Counselling",
  "Profile Assessment",
  "University Selection",
  "Admission Guidance",
];

const Whychooseus = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [progressValues, setProgressValues] = useState([0, 0, 0]);
  const [bgStyle, setBgStyle] = useState({});
  const bottomRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Responsive inline background
  const updateBgStyle = () => {
  if (window.innerWidth <= 768) {
 setBgStyle({
    position: "absolute",
    top: 0,               // align to top
    left: 0,              // start from left
    width: "100%",        // full width
    height: "100%",       // full height
    backgroundImage: `url('/images/video-block-bg-2-new.png')`,
    backgroundSize: "cover",       // fill the container
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transform: "none",    // remove translate
    zIndex: 0,
  });
  } else {
    setBgStyle({
      position: "absolute",
      top: 0,
      left: "3%",
      width: "95%",
      height: "90%",
      backgroundImage: `url('/images/video-block-bg-2-new.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      transform: "none",
      zIndex: 0,
    });
  }
};
  useEffect(() => {
    updateBgStyle();
    window.addEventListener("resize", updateBgStyle);
    return () => window.removeEventListener("resize", updateBgStyle);
  }, []);

  // Progress bars animation
  useEffect(() => {
    if (!bottomRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const targetValues = [99.9, 99, 99];
          const duration = 1500;
          const intervalTime = 20;
          const steps = targetValues.map(val => Math.ceil((val / duration) * intervalTime));

          const interval = setInterval(() => {
            setProgressValues(prev => {
              let finished = true;
              const next = prev.map((p, i) => {
                if (p < targetValues[i]) {
                  finished = false;
                  return Math.min(p + steps[i], targetValues[i]);
                }
                return p;
              });
              if (finished) clearInterval(interval);
              return next;
            });
          }, intervalTime);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(bottomRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="whychooseus-section">
      {/* Responsive background */}
      <div style={bgStyle}></div>

      <div className="whychooseus-container" style={{ position: "relative", zIndex: 1, flexDirection: "column" }}>
        {/* Top row */}
        <div className="whychooseus-row">
          <div className="whychooseus-left">
            <div className={`wv-rectangle ${activeTab === "mission" ? "active" : ""}`} onClick={() => setActiveTab("mission")}>
              <FaBullseye className="wv-icon" />
              <h3>Our Mission</h3>
            </div>
            <div className={`wv-rectangle ${activeTab === "vision" ? "active" : ""}`} onClick={() => setActiveTab("vision")}>
              <FaEye className="wv-icon" />
              <h3>Our Vision</h3>
            </div>
          </div>

          <div className="whychooseus-center">
            {activeTab === "mission" ? (
              <ul className="wc-bullets" key="mission">
                {bulletPoints.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="wc-vision-text" key="vision">
                JVT Immigration evolved with vision to help our student to get admission in top universities around world and get their Study Abroad Dream True. We help students to choose right course according to their qualification.
              </p>
            )}
          </div>

          <div className="whychooseus-right">
            <div className="youtube-play-button" onClick={() => setIsVideoOpen(true)}>
              <div className="outer-circle"></div>
              <div className="middle-circle"></div>
              <div className="inner-circle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffc000" width="50px" height="50px">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="whychooseus-bottom" ref={bottomRef}>
          <div className="wc-bottom-container">
            <h3 className="wc-bottom-title">
              Why Choose <br /> <span>Us?</span>
            </h3>
            <div className="wc-progress-wrapper">
              {["Abroad Education Consulting", "Application Formalities", "Visa Services"].map((label, i) => (
                <div className="wc-progress-item" key={i}>
                  <span>{label}</span>
                  <div className="wc-progress-bar-wrapper">
                    <span className="wc-progress-percent">{progressValues[i]}%</span>
                    <div className="wc-progress-bar">
                      <div className="wc-progress-fill" style={{ width: `${progressValues[i]}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <div className="video-overlay" onClick={() => setIsVideoOpen(false)}>
          <div className="video-container" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/mG-mbgTsMSk?autoplay=1"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="close-btn" onClick={() => setIsVideoOpen(false)}>×</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Whychooseus;
