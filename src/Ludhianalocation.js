import React from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import "./About.css"; 
import "./Ludhianalocation.css";
import { Helmet } from "react-helmet";

const Ludhianalocation = () => {
  return (
    <>
    <Helmet>
  <title>Best Immigration Consultants in Ludhiana - JVT Immigration</title>
</Helmet>
    <div className="ludhiana-page">

      {/* Banner */}
      <div
        className="abouts-banner behind-nav"
        style={{ backgroundImage: `url('/images/bg-page-title.jpg')` }}
      >
        <div className="abouts-banner-content">
          <h1 className="aboutheading">Immigration Consultants in Ludhiana</h1>
          <p className="abouts-breadcrumb">
            <Link to="/">Home</Link> - Immigration Consultants in Ludhiana
          </p>
        </div>
      </div>

      <div className="ludhianapagecontainer"> {/* New wrapper for 1200px max width */}

        {/* Intro Section */}
        <div className="ludhiana-intro-section">
          <div className="ludhiana-text">
            <h2>Best Immigration Consultants in Ludhiana</h2>
            <p>
              Do you intend to relocate abroad for a job, study, or permanent residence? If so, you will require the assistance of a dependable and skilled immigration consultant for your visa application. JVT Immigration is one of the <strong>best immigration consultants</strong> in Ludhiana.
            </p>
            <p>
              JVT Immigration has aided thousands of people and families in realizing their immigration aspirations. The knowledgeable consultants on their staff are well-versed in international immigration law and policy.
            </p>
            <p>
              The services offered by JVT Immigration include student visas for countries like Canada, Australia, and the UK. They specialize in study visa applications and have a high success rate in securing them.
            </p>
            <p>
              The personalized approach of JVT Immigration is one of the main benefits of choosing them as your immigration consultant. They’re aware of each client’s situation, so they customize their services to suit their requirements. Your goals are carefully considered by their advisors, who then offer you the best immigration options possible.
            </p>
          </div>
          <div className="ludhiana-image">
            <img src="/images/ludhiana.jpg" alt="Ludhiana" />
          </div>
        </div>

        {/* Services Section */}
        <div className="ludhiana-services">
          <h2>Immigration Services in Ludhiana</h2>
          <p>
            JVT Immigration also provides post-arrival services like airport pickup, affordable accommodation assistance, and finding a job. This ensures that its clients transfer smoothly and feel at home in their new nation.
          </p>
          <p>
            With end-to-end services like document preparation, application filing, and follow-up with immigration officials, the experienced team at JVT Immigration makes the visa application procedure simple.
          </p>
          <p>
            The extensive network of JVT Immigration in numerous nations is another key benefit of selecting JVT Immigration as your <strong>immigration consultant</strong>. They can assist their clients in obtaining admission to or career prospects because they have developed partnerships with colleges, universities, and employers in Canada, Australia, and the UK.
          </p>
        </div>

        {/* Why Choose Section */}
        <div className="ludhiana-whychoose">
          <h2>Why Choose JVT Immigration?</h2>
          <p>
            JVT Immigration serves all your Immigration concerns, regardless of refusals, study gaps, insufficient funds, etc. The following are reasons to choose JVT Immigration over other study-abroad <strong>consultants in Ludhiana</strong>:
          </p>
          <ul className="jvt-ticks">
            <li><FaCheck className="tick-icon" /> One-on-one Personalized Counselling</li>
            <li><FaCheck className="tick-icon" /> Comprehensive Evaluation of Profile</li>
            <li><FaCheck className="tick-icon" /> Refused Cases Expert</li>
            <li><FaCheck className="tick-icon" /> Licensed Immigration Expert</li>
            <li><FaCheck className="tick-icon" /> Award-winning Immigration Consultancy</li>
            <li><FaCheck className="tick-icon" /> 100% Visa Success Rate</li>
          </ul>
          <p>
            The <strong>JVT Immigration</strong> team helps clients understand the eligibility requirements and documentation needed for permanent residency and citizenship applications. The experienced and knowledgeable team at JVT Immigration assists their clients in preparing the application, filling out forms, and submitting them to immigration authorities.
          </p>
          <p>
            Among the <strong>best visa consultants in Ludhiana</strong>, JVT Immigration offers trustworthy and open services to its customers. Their group of knowledgeable advisors helps customers reach their immigration objectives by providing personalized services that are tailored to fit their needs.
          </p>
          <p>
            If you’re seeking the best study <strong>visa consultants in Ludhiana</strong>, JVT Immigration should be your top choice. We are refusal case experts and have a high success rate of turning refusals into approvals. If you have a gap in your studies, we will evaluate your profile and eliminate all the hurdles.
          </p>
        </div>

      </div> {/* End of container */}
    </div>
    </>
  );
};

export default Ludhianalocation;
