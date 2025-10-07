import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import "./Studyabroad.css";
import "./USApage.css";
import { FaCheck } from "react-icons/fa";
import { Helmet } from "react-helmet";

const USApage = () => {
  return (
    <>
               <Helmet>
      <title>Expert USA Study Visa Consultants in Ferozepur | JVT Immigration</title>
    </Helmet>
      {/* Banner Section */}
      <div
        className="abouts-banner behind-nav"
        style={{ backgroundImage: `url('/images/usa-page-banner-01.jpg')` }}
      >
        <div className="abouts-banner-content">
          <h1 className="aboutheading">USA Study Visa Consultants</h1>
          <p className="abouts-breadcrumb">
            <Link to="/">Home</Link> -{" "}
            <Link to="/study-abroad">Study Abroad</Link> - USA Study Visa Consultants
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="usa-page">
        <div className="usa-container">
          {/* First Grid Section */}
          <div className="usa-grid">
            {/* Left Content */}
            <div className="usa-left">
              <h2>USA Study Visa Consultants</h2>
              <p>
                The USA is a country that is known for its world-class colleges and universities, numerous courses and programs, and a superlative education system. Students by studying in USA are able to widen their educational horizons and build a promising career.
              </p>
              <p>
                All these features make the USA one of the leading study abroad destinations in the world. Due to the large number of courses and programs offered by colleges and universities in USA, the time and efforts of the students don’t get wasted as they are able to get the required skills and expertise which prepares them for a promising future ahead.
              </p>
              <p>
                When it comes to ethical recruitment practices, American universities and colleges are very particular. They follow intricate and comprehensive application acceptance procedures. Only USA Study Visa Consultants can enlighten your path and remove all the obstacles during filing.
              </p>
            </div>

            {/* Right Image */}
            <div className="usa-right">
              <img src="/images/usa-mainimg.jpg" alt="USA Study Visa" />
            </div>
          </div>

          {/* Paragraph below */}
          <div className="usa-left">
            <p>
              Study in USA is the dream of most of the students as the educational system of the country offers courses and programs that are premier and excellent which further help the students to prepare themselves for a brighter future.
            </p>
          </div>

          {/* Visa Categories */}
          <div className="usa-left">
            <h2 className="usa-section-heading">USA Study Visa: Visa Categories</h2>
            <p>
              The USA is home to thousands of international students, and only reliable USA Study Visa Consultants can show you the right path to obtain it. Those who’re interested in initiating their education journey from the USA, can file their full-time study visa under F-1 or M-1 visa categories.
            </p>
            <p><strong>Match the following criteria to become eligible for the USA Study Visa:</strong></p>
            <ul className="usa-bullet-points">
              <li>Take admission under the “Academic” educational program</li>
              <li>Approval of the particular school from Exchange Visitors Program, Immigration & Customs Enforcement is a must</li>
              <li>Join a full-time study program at an institute</li>
              <li>Good grip over the English language</li>
              <li>Sufficient funds for supporting the entire course of study</li>
            </ul>
          </div>

          {/* F-1 and M-1 Visa */}
          <div className="usa-left">
            <h3>F-1 Student Visa</h3>
            <p>
              Under this visa category, an applicant enters the USA as a full-time student to study at an accredited College, University, High School, or Other Academic Institute. USA Study Visa Consultants ensures that the particular school or institute must be authorized by the U.S. government.
            </p>

            <h3>M-1 Student Visa</h3>
            <p>
              The M-1 visa or Vocational student visa category lets students pursue vocational or other non-academic programs, other than language training courses. Those who apply for this visa cannot overstay their visit. Students have to come back to their native country within the stipulated period. Only Experienced, Skilled, and Licensed USA Study Visa Consultants can evaluate your profile and guide you towards choosing the right visa category before application lodgement.
            </p>
          </div>
        </div>
        <div className="usa-container">
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

export default USApage;
