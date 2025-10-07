import React from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import "./About.css"; 
import "./Ludhianalocation.css"; // Reuse the same CSS as layout is similar
import { Helmet } from "react-helmet";

const Mohalilocation = () => {
  return (
    <>
        <Helmet>
  <title>Best Immigration Consultants in Mohali - JVT Immigration</title>
</Helmet>
    <div className="ludhiana-page"> {/* reuse same class for page layout */}

      {/* Banner */}
      <div
        className="abouts-banner behind-nav"
        style={{ backgroundImage: `url('/images/bg-page-title.jpg')` }}
      >
        <div className="abouts-banner-content">
          <h1 className="aboutheading">Study Visa Consultants in Mohali</h1>
          <p className="abouts-breadcrumb">
            <Link to="/">Home</Link> - Study Visa Consultants in Mohali
          </p>
        </div>
      </div>

      <div className="ludhianapagecontainer">

        {/* Intro Section */}
        <div className="ludhiana-intro-section">
          <div className="ludhiana-text">
            <h2>Best Study Abroad Consultants in Mohali</h2>
            <p>
              Planning to study abroad? Whether it's Canada, Australia, UK, USA, or New Zealand, JVT Immigration in Mohali provides expert guidance as one of the <strong>best study visa consultants</strong> in Mohali.
            </p>
            <p>
              Our experienced consultants help students and families fulfill their study abroad dreams. We are experts in international education regulations and visa policies.
            </p>
            <p>
              JVT Immigration specializes in study visa applications for Canada, Australia, UK, USA, and New Zealand, ensuring a high success rate and smooth application process.
            </p>
            <p>
              We take a personalized approach, understanding each student's profile and goals. Our advisors provide tailored solutions to maximize your chances of admission and visa approval.
            </p>
          </div>
          <div className="ludhiana-image">
            <img src="/images/visa-expert-banner.jpg" alt="Mohali" />
          </div>
        </div>

        {/* Services Section */}
        <div className="ludhiana-services">
          <h2>Study Visa Services in Mohali</h2>
          <p>
            JVT Immigration provides end-to-end study abroad services including course selection, university applications, visa filing, and post-arrival support. From airport pickup to accommodation guidance, we ensure a smooth transition for students.
          </p>
          <p>
            Our team simplifies the entire study visa process, handling document preparation, application submission, and follow-ups with immigration authorities.
          </p>
          <p>
            Our global network and partnerships with universities and employers in Canada, Australia, UK, USA, and New Zealand give our clients an edge in admissions and career opportunities.
          </p>
        </div>

        {/* Why Choose Section */}
        <div className="ludhiana-whychoose">
          <h2>Why Choose JVT Immigration in Mohali?</h2>
          <p>
            JVT Immigration addresses all your study abroad concerns, including refusals, study gaps, insufficient funds, and more. Here’s why we are considered among the <strong>top study abroad consultants in Mohali</strong>:
          </p>
          <ul className="jvt-ticks">
            <li><FaCheck className="tick-icon" /> Personalized One-on-One Counselling</li>
            <li><FaCheck className="tick-icon" /> Comprehensive Profile Assessment</li>
            <li><FaCheck className="tick-icon" /> Expert in Refused Cases</li>
            <li><FaCheck className="tick-icon" /> Licensed Immigration Advisors</li>
            <li><FaCheck className="tick-icon" /> Award-Winning Immigration Consultancy</li>
            <li><FaCheck className="tick-icon" /> High Visa Success Rate</li>
          </ul>
          <p>
            Our team guides students through eligibility checks, documentation, and application submission for permanent residency, citizenship, or student visas.
          </p>
          <p>
            As one of the <strong>best study visa consultants in Mohali</strong>, JVT Immigration provides transparent, reliable, and result-oriented services.
          </p>
          <p>
            For students seeking <strong>Canada, Australia, UK, USA, or New Zealand study visas</strong>, we provide expert guidance and support every step of the way, turning challenges into approvals.
          </p>
        </div>

      </div>
    </div>
    </>
  );
};

export default Mohalilocation;
