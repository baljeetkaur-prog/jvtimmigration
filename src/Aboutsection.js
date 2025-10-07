import React from "react";
import { FaUsers, FaBullseye } from "react-icons/fa";
import "./Aboutsection.css";

const Aboutsection = () => {
  return (
  <section
  className="about-section"
  style={{
    backgroundImage: "url('/images/aboutbg.png')",
    backgroundRepeat: "no-repeat",
backgroundPosition: "top -30px right -80px", 
    backgroundSize: "cover",
  }}
>
  <div className="about-container">
    {/* Left Image */}
    <div className="about-left">
      <img src="/images/aboutsectionimg.png" alt="About JVT Immigration" />
    </div>

    {/* Right Content */}
    <div className="about-right">
      <h5 className="small-heading">About JVT Immigration Pvt Ltd</h5>

      <h2 className="big-heading">
        <span className="highlight-yellow">Helping the Students to</span>{" "}
        <span className="highlight-black">Build a Promising Career</span>
      </h2>

      <p className="about-description">
        JVT Recognizing the enhancing need and desire of the students to
        study abroad, we at JVT Immigration cater to the educational needs
        and requirements of the students. We help students to make a wise
        decision that is based on valuable experience and relevant
        information that could pave the way toward a successful future.
      </p>

      {/* Grey Divider after paragraph */}
      <div className="content-divider"></div>

      {/* Bottom Segment */}
      <div className="about-bottom">
        <div className="bottom-item">
          <FaUsers className="bottom-icon" />
          <span>Empowering Our Community</span>
        </div>
        <div className="about-bottom-border"></div>
        <div className="bottom-item">
          <FaBullseye className="bottom-icon" />
          <span>Achieving Goals Together</span>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Aboutsection;
