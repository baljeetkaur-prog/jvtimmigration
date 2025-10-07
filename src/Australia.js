import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import "./Studyabroad.css";
import "./Australia.css";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { Helmet } from "react-helmet";

const Australia = () => {
      const [isOpen, setIsOpen] = React.useState(null);
       const faqs = [
    {
      question: "What are the benefits of studying in Australia?",
      answer:
        "Australia offers high-quality education, diverse study options, vibrant multicultural cities, and excellent career opportunities for international students.",
    },
    {
      question: "What is the processing time for an Australian study visa?",
      answer:
        "The processing time for an Australian study visa can vary depending on various factors. On average, it ranges from one to four months. We suggest applicants lodge their Study Visa applications before the commencement of classes as it may take weeks or months for approval.",
    },
    {
      question: "Can JVT Immigration Consultant assist with scholarship opportunities in Australia?",
      answer:
        "Yes, JVT Immigration Consultant can provide guidance and information on available scholarships and financial aid opportunities for international students in Australia.",
    },
    {
      question: "Can I work while studying in Australia?",
      answer:
        "Yes, international students on a valid student visa are typically allowed to work part-time during their studies. JVT Immigration Consultant can provide information on work restrictions and guidelines.",
    },
    {
      question: "Can JVT Immigration Consultant assist with post-study work opportunities in Australia?",
      answer:
        "Yes, JVT Immigration Consultant can provide guidance on post-study work options and visa pathways available for international students upon completion of their studies in Australia.",
    },
  ];

  return (
    <>
                <Helmet>
      <title>Australia Study Visa Consultants in Ferozepur | JVT Immigration</title>
    </Helmet>
      {/* Banner Section */}
      <div
        className="abouts-banner behind-nav"
        style={{ backgroundImage: `url('/images/australia-banner.jpg')` }}
      >
        <div className="abouts-banner-content">
          <h1 className="aboutheading">Australia Study Visa Consultants</h1>
          <p className="abouts-breadcrumb">
            <Link to="/">Home</Link> -{" "}
            <Link to="/study-abroad">Study Abroad</Link> - Australia Study Visa Consultants
          </p>
        </div>
      </div>

      {/* Two-column with text wrapping below image */}
      <div className="australia-page">
      <div className="australia-grid-section">
        <div className="australia-left">
          <h2>Australia Immigration Consultants</h2>
          <p>
            When it comes to studying in Australia, having the right guidance is crucial.
            That’s where Australia Study Visa Consultants in Ferozepur play a pivotal role.
            At JVT Immigration Consultant, we specialize in providing expert assistance to
            students from Ferozepur, Ludhiana, Mohali, and Jalalabad who aspire to pursue
            their education in Australia.
          </p>
          <p>
            Our team of experienced Australia Study Visa Consultants has an in-depth understanding
            of the visa requirements. We guide students through the complex process, ensuring all
            necessary documents are meticulously prepared and submitted on time.
          </p>
        </div>

        <div className="australia-right">
          <img src="/images/australia-mainimg.jpg" alt="Australia" />
        </div>

        {/* Full-width content after image ends */}
        <div className="australia-fullwidth">
          <h3>Australia Study Visa Consultants</h3>
          <p>Personalized Guidance and Expert Advice</p>
          <p>
            At JVT Immigration Consultant, we offer personalized guidance to each student. Our
            Australia Study Visa Consultants provide expert advice on selecting the most suitable
            courses and institutions that align with your academic aspirations and career goals.
          </p>

          <h3>Streamlining the Visa Application Process</h3>
          <p>
            Navigating the visa application process can be overwhelming, but with the assistance
            of our Australia Study Visa Consultants, you can experience a streamlined process.
            We assist with form submissions, carefully review documents, and facilitate effective
            communication with immigration authorities.
          </p>
        </div>
      </div>

      {/* Subsection: FULL WIDTH OUTSIDE THE GRID */}
      <div className="australia-subsection">
        <div className="australia-sub-left">
          <h3>Preferred Courses to Opt for in Australia</h3>
          <img src="/images/australiasub1.jpg" alt="Courses" />
          <ul>
            <li>Accounting & Finance</li>
            <li>Arts</li>
            <li>Business & Management</li>
            <li>Engineering & Information Technology</li>
            <li>Hospitality & Tourism</li>
            <li>Law & Criminal Justice</li>
            <li>Nursing & Medicine</li>
          </ul>
        </div>

        <div className="australia-sub-right">
          <h3>Top Education Hubs to Study in Australia</h3>
          <img src="/images/australiasub2.jpg" alt="Hubs" />
          <ul>
            <li><FaMapMarkerAlt /> Brisbane</li>
            <li><FaMapMarkerAlt /> Sydney</li>
            <li><FaMapMarkerAlt /> Adelaide</li>
            <li><FaMapMarkerAlt /> Perth</li>
            <li><FaMapMarkerAlt /> Melbourne</li>
          </ul>
        </div>
      </div>
      {/* Experience Section */}
<div className="australia-experience-section">
  <div className="australia-experience-left">
    <h2>The Experience and Expertise You Can Trust</h2>

    <div className="experience-item">
      <h3>Comprehensive Understanding of the Australian Education System</h3>
      <p>
        Our Australia Study Visa Consultants possess extensive knowledge of the Australian
        education system. We stay updated with the latest developments and visa regulations
        to ensure accurate guidance throughout the application process.
      </p>
    </div>

    <div className="experience-item">
      <h3>Personalized Approach for Success</h3>
      <p>
        We prioritize a tailored approach, ensuring that our services are customized to meet
        your specific needs and circumstances. Our Australia Study Visa Consultants address
        your concerns, provide customized solutions, and offer ongoing support to maximize the
        chances of a successful visa application.
      </p>
    </div>

    <div className="experience-item">
      <h3>Trusted Reputation in the Industry</h3>
      <p>
        JVT Immigration Consultant has earned a trusted reputation through years of professional
        experience. As Australia Study Visa Consultants, we have successfully assisted numerous
        students in fulfilling their dreams of studying in Australia.
      </p>
    </div>
  </div>
</div>
<div className="australia-why-section">
  <h2>Why to Study in Australia?</h2>
  <div className="why-points">
    <p><FaArrowRight className="arrow-icon" /> The Australian colleges and universities offer career-oriented and practical training along with paid internships.</p>
    <p><FaArrowRight className="arrow-icon" /> Education imparted by Australian colleges and universities is recognized by employers across the globe.</p>
    <p><FaArrowRight className="arrow-icon" /> The country is safe, friendly, multi-cultural and harmonious.</p>
    <p><FaArrowRight className="arrow-icon" /> Most of the courses and programs undertaken by international students in Australia are covered by Australian Qualification Framework (AQF) and authorized by the Australian government.</p>
  </div>
<p className="why-description">
  Choosing the right Australia Study Visa Consultants is crucial for a smooth visa application process. At{" "}
  <Link
    to="/australia-study-visa-consultants-in-ludhiana"
    style={{ color: "#ffc000", textDecoration: "none" }}
  >
    JVT Australia Study Consultants in Ludhiana
  </Link>{" "}
  & Ferozepur, our experienced team is dedicated to providing personalized guidance, expert advice, and streamlined services. Trust us to be your partner in making your dreams of studying in Australia a reality.
</p>
 <div className="custom-faqs">
        <h2 className="faqhead">FAQs</h2>
        <ul>
          {faqs.map((faq, index) => (
            <li key={index} className="custom-faq-item">
              <div
                className={`custom-faq-question ${isOpen === index ? "open" : ""}`}
                onClick={() => setIsOpen(prev => (prev === index ? null : index))}
              style={{fontWeight:'700'}}>
                <FiChevronDown
                  className={`custom-faq-icon ${isOpen === index ? "open" : ""}`}
                />
                <span>{faq.question}</span>
              </div>
              {isOpen === index && <div className="custom-faq-answer">{faq.answer}</div>}
              <div className="custom-faq-divider"></div>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Border */}
      <div className="custom-bottom-border"></div>

      {/* Service Locations */}
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

export default Australia;
