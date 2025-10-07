import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import "./Studyabroad.css";
import "./Newzealandpage.css";
import { FiChevronDown } from "react-icons/fi";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Newzealandpage = () => {
  const [isOpen, setIsOpen] = React.useState(null);

  const faqs = [
    {
      question: "Is it possible for students to work while studying on a New Zealand study visa?",
      answer:
        "Yes, in general, students with New Zealand student visas are permitted to work part-time. To ensure compliance, it is crucial to review the visa requirements.",
    },
    {
      question: "For how long New Zealand Study Visa is valid?",
      answer:
        "The length of the course of study determines how long a student visa from New Zealand is valid for. The visa is typically issued for the length of the course, plus any additional time required for post-study work permits.",
    },
    {
      question: "Are students eligible to get a Work Vsa after Graduation from New Zealand Institute?",
      answer:
        "Yes, foreign students may be able to apply for a post-study work visa after finishing their course of study in New Zealand. The degree of qualification attained will determine the length of the work visa.",
    },
    {
      question: "What are the benefits of studying in New Zealand?",
      answer:
        "The highly acclaimed educational system in New Zealand offers degrees that are accepted elsewhere in the world. Students receive significant knowledge and skills from the top-notch education and teaching staff.",
    },
{
  question: "What are the advantages of attending school in New Zealand?",
  answer: (
    <div>
      <ul className="nz-bullet-points">
        <li>Exceptional educational system</li>
        <li>Culturally diverse society</li>
        <li>3 year post-study work permit</li>
        <li>Exorbitant tuition costs</li>
        <li>Scholarships available</li>
        <li>Make money while studying</li>
      </ul>
    </div>
  ),
}
  ];

  return (
    <>
               <Helmet>
      <title>New Zealand Study Visa Consultants in Ferozepur | JVT Immigration</title>
    </Helmet>
      {/* Banner Section */}
      <div
        className="abouts-banner behind-nav"
        style={{ backgroundImage: `url('/images/newzealand-page-banner-03.jpg')` }}
      >
        <div className="abouts-banner-content">
          <h1 className="aboutheading">New Zealand Study Visa Consultants</h1>
          <p className="abouts-breadcrumb">
            <Link to="/">Home</Link> -{" "}
            <Link to="/study-abroad">Study Abroad</Link> - New Zealand Study Visa Consultants
          </p>
        </div>
      </div>

      <div className="newzealand-page">
        {/* Intro Section */}
        <div className="nz-container nz-grid">
          <div className="nz-left">
            <h2>Study in New Zealand</h2>
      <p>
  The educational system followed in New Zealand is UK based which makes it one of the most preferred study abroad destinations in the world among the international education aspirants. The courses, programs and degrees offered by New Zealand colleges and universities are recognized all over the globe. The first step towards filing New Zealand Study Visa begins with choosing the right New Zealand Study Visa Consultants &&nbsp;
    <Link to="/study-abroad/canada-study-visa-consultants" style={{ color: "#ffc000", textDecoration: "none" }}>
      <strong>Canada Study Consultants in Ferozepur</strong>
    </Link>.
</p>
            <p>
              Consultants can identify the right course and college for the aspirants after the deep screening of their profile. Following are the various reasons to choose New Zealand Study Visa Consultants:
            </p>
            <ul className="nz-points">
              <li>Career Counseling</li>
              <li>Comprehensive Profile Evaluation</li>
              <li>Finding the right Course and College as per the eligibility</li>
              <li>Provide checklist of required documents</li>
            </ul>
          </div>
          <div className="nz-right">
            <img src="/images/nz-mainimg.jpg" alt="Study in New Zealand" />
          </div>
        </div>

        {/* Why Study in New Zealand Section */}
        <div className="nz-container">
          <h2 className="nz-section-heading why-heading">Why to Study in New Zealand?</h2>
          <div className="nz-subgrid">
            <div className="nz-sub-left">
              <img src="/images/nz-mainimg2.jpg" alt="Why Study in New Zealand" />
            </div>
            <div className="nz-sub-right">
              <p>
                The education system of New Zealand is industry-based that prepares the students for a global career. It gives a new perspective to learners to think broadly and create possibilities for themselves. Take assistance from New Zealand Study Visa Consultants is a half way through success.
              </p>
              <ul className="nz-arrow-points">
                <li><FaArrowRight /> Most of the educational institutions of New Zealand work with advanced technology that is connected to fast as well as uncapped broadband connections.</li>
                <li><FaArrowRight /> The curriculum framework of the New Zealand colleges and universities help in encouraging the students to experiment and deliver creative and innovative solutions to all the problems.</li>
                <li><FaArrowRight /> The colleges and universities of New Zealand are known for offering work-ready internships and programs that prepares the students for international firms and multi-national companies.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Required Documents Section */}
        <div className="nz-container">
          <h2 className="nz-section-heading">New Zealand Student Visa Consultants: Required Documents</h2>
          <p style={{color:'#333'}}>
            To obtain New Zealand Study Visa, one must consult New Zealand Study Visa Consultants as they can explain all the requirements in detail. The first and foremost step before filing a visa application is the complete knowledge of the required documents which is as follows:
          </p>
          <ul className="nz-bullet-points">
            <li>Academic Transcripts</li>
            <li>Health and Character Certificate</li>
            <li>Proof to show financial support</li>
            <li>Valid Passport</li>
            <li>Others</li>
          </ul>
        </div>

        {/* Pros Section */}
        <div className="nz-container">
          <h2 className="nz-section-heading">Pros of Hiring a New Zealand Study Visa Consultants</h2>
          <p style={{color:'#333'}}>
            New Zealand Study Visa Consultants can undoubtedly lay off your stress of complex filing and draws a roadmap that pave smooth and successful path towards visa attainment. Assistance from an expert can save your time and money so that you can jumpstart your career in dream nation. Professional assistance leaves no room for error in the application. Learners will get clear knowledge of the visa process, requirements, and potential challenges and it make the journey of education in New Zealand smoother and more manageable.
          </p>
          <ul className="nz-tick-points">
            <li><FaCheck /> Time-Saving</li>
            <li><FaCheck /> Interview Preparation</li>
            <li><FaCheck /> Personalized Counseling</li>
            <li><FaCheck /> Post-Visa Services</li>
            <li><FaCheck /> Stress Reduction</li>
            <li><FaCheck /> Informed Decision Making</li>
            <li><FaCheck /> Increased Success Rate</li>
          </ul>
        </div>

        {/* FAQs Section */}
        {/* FAQs Section */}
<div className="nz-container">
  <div className="custom-faqs">
    <h2 className="faqhead">FAQs</h2>
    <ul>
      {faqs.map((faq, index) => (
        <li key={index} className="custom-faq-item">
          <div
            className={`custom-faq-question ${isOpen === index ? "open" : ""}`}
            onClick={() => setIsOpen(prev => (prev === index ? null : index))
            }
           style={{fontWeight:'700'}}>
            <FiChevronDown
              className={`custom-faq-icon ${isOpen === index ? "open" : ""}`}
            />
            <span>{faq.question}</span>
          </div>
          {isOpen === index && (
            <div className="custom-faq-answer">{faq.answer}</div>
          )}
          <div className="custom-faq-divider"></div>
        </li>
      ))}
    </ul>
  </div>
</div>


        {/* Bottom Border */}
        <div className="custom-bottom-border"></div>

        {/* Service Locations */}
<div className="nz-container">
 <div className="custom-service-locations-container">
  <h2>From Here to There: Our Service Locations</h2>
  <h1 className="servicehead">Locations We Serve</h1>
  <div className="custom-service-locations">
    <div>
      <Link to="/uk-study-visa-consultants-in-ludhiana"  style={{ textDecoration: "none", color: "inherit" }}>
        <h3>Ludhiana</h3>
      </Link>
    </div>
    <div>
      <Link to="/canada-study-visa-consultants-in-mohali" style={{ textDecoration: "none", color: "inherit" }}>
        <h3>Mohali</h3>
      </Link>
    </div>
  </div>
</div>
</div>

      </div>
      
    </>
  );
};

export default Newzealandpage;
