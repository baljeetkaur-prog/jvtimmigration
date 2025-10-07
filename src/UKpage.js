import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import "./Studyabroad.css";
import "./UKpage.css";
import { FiChevronDown } from "react-icons/fi";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { Helmet } from "react-helmet";

const UKpage = () => {
  const [isOpen, setIsOpen] = React.useState(null);

  return (
    <>
               <Helmet>
      <title>UK Study Visa Consultants in Ferozepur | JVT Immigration</title>
    </Helmet>
      {/* Banner Section */}
      <div
        className="abouts-banner behind-nav"
        style={{ backgroundImage: `url('/images/uk-page-banner-003.jpg')` }}
      >
        <div className="abouts-banner-content">
          <h1 className="aboutheading">UK Study Visa Consultants</h1>
          <p className="abouts-breadcrumb">
            <Link to="/">Home</Link> -{" "}
            <Link to="/study-abroad">Study Abroad</Link> - UK Study Visa Consultants
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="uk-page">
      <div className="uk-container">
        <div className="uk-grid">
          {/* Left Content */}
          <div className="uk-left">
            <h2>UK Study Visa Consultants</h2>
            <p>
              The UK is a country that is emerging as one of the most preferred
              study abroad destinations by the international students. When it
              comes to quality education and internationally recognized colleges
              and universities, the UK is one of the leading study abroad
              destinations, and only a leading UK Study Visa Consultants
              can enlighten your path. The world-renowned educational system of
              the country is known for offering wide range of courses to the
              students.
            </p>
            <p>
              The colleges and universities of the UK also provide the advantages
              of working while studying. It helps the students to get exposed to
              the number of skills, experience and knowledge in the real time
              scenario. There are a lot of colleges and universities that offer
              scholarships to the deserving students.
            </p>
          </div>

          {/* Right Image */}
          <div className="uk-right">
            <img src="/images/uk-mainimg.jpg" alt="UK Study Visa" />
          </div>
        </div>

        {/* Paragraph below */}
        <p className="uk-bottom-text">
          Due to the magnificent job opportunities and educational system, the UK
          attracts a wide range of students coming from different part of the
          world. Wondering where to begin your UK Study Visa filing process? The
          answer is – UK Study Visa Consultants! They will evaluate
          your profile, find out the best courses, colleges, tuition fee, and
          assist in attaining financial assistance to deserving applicants.
        </p>
      </div>

      {/* New Banner Image */}
    <div className="uk-container">
  <div className="uk-banner-img">
    <img src="/images/uk-banner-002.jpg" alt="Why Study in UK" />
  </div>
</div>

      {/* Why Study Section */}
      <div className="uk-container">
        <h2 className="uk-section-heading">Why to Study in UK ?</h2>
        <p>
          With increased knowledge and understanding of students, the UK has
          become the learner’s foremost choice. And only UK Study Visa Consultants
          can pave the smooth path to the UK. And JVT Immigration is one of the
          top UK Study Visa Consultants with years of experience and proven visa
          results. The reasons for choosing the UK are as follows:
        </p>

        <ol className="uk-reasons">
          <li>
            <strong style={{fontSize:'20px'}}>High-Quality of Coaching and Training</strong><br/>As UK is very
            strict when it comes to the quality of education being offered to the
            students, the country possesses an agency named{" "}
            <em>The Quality Assurance Agency for Higher Education (QAA)</em> that
            inspects universities and colleges to ensure standards of learning are
            high. The faculty are professionally trained to guide students in
            overcoming challenges.
          </li>
          <li>
            <strong style={{fontSize:'20px'}}>Matchless Education System</strong> <br/>The educational system of
            the UK is well-renowned and the country is home to top-ranked colleges
            and universities. Studying in the UK becomes a lifetime experience for
            students.
          </li>
          <li>
            <strong style={{fontSize:'20px'}}>Numerous Job Opportunities</strong> <br/>The UK is known for
            providing a large number of job opportunities. Employers worldwide
            recognize education taken from UK colleges and universities, helping
            students uplift their skills and knowledge for higher salary packages.
          </li>
          <li>
            <strong style={{fontSize:'20px'}}>Diverse Variety of Courses and Programs</strong> <br/>There are numerous courses and programs that the students can opt for. The colleges and universities of the UK offers exquisite and professional learning that helps the students to pave a way to a brighter future.<br/><br/>
            To experience all these factors by yourself, you need to start filing a UK Study Visa application through the assistance of experienced, skilled, and leading UK Study Visa Consultants.
          </li>
        </ol>
      </div>
      <div className="uk-container">
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

export default UKpage;
