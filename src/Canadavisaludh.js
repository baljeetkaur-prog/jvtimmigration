import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import "./Canadavisaludh.css"
import { Helmet } from "react-helmet";

const Canadavisaludh = () => {
  return (
    <>
    <Helmet>
  <title>Canada Study Visa Consultants in Ludhiana | JVT Immigration</title>
</Helmet>
      {/* Banner */}
      <div
        className="abouts-banner behind-nav"
        style={{ backgroundImage: `url('/images/bg-page-title.jpg')` }}
      >
        <div className="abouts-banner-content">
          <h1 className="aboutheading">Canada Study Visa</h1>
          <p className="abouts-breadcrumb">
            <Link to="/">Home</Link> - Canada Study Visa Consultants in Ludhiana
          </p>
        </div>
      </div>

      <div
        className="cvl-container"
      >
        {/* Intro Section (Text only, no image) */}
        <div className="cvl-intro-section">
          <h2 className="cvl-heading">Canada Study Visa Consultants in Ludhiana</h2>
          <p className="cvl-paragraph">
            Canada is one of the most sought-after countries for International Students looking for a quality Education and a Bright future. Every year, countless students migrate to Canada because of its top-ranked Universities and Quality of Life. But getting a study visa for Canada is a difficult process. Any minor error could result in rejection, which demands a lot of paperwork and planning. This is when a Study Visa Consultant’s job becomes essential. One of the top Canadian <strong>Study Visa Experts in Ludhiana</strong> is JVT Immigration.
          </p>
          <p className="cvl-paragraph">
            Students looking to obtain a <strong>study visa for Canada</strong> can get full-service support from the professionals at JVT Immigration. They have aided thousands of students in realizing their ambition of attending university in Canada by assisting them with the difficult visa application procedure. They have established a reputation as one of the top Study Visa Advisors in Ludhiana. Thanks to their knowledge of Canadian Immigration Laws and Regulations and Commitment to Client Satisfaction.
          </p>
        </div>

        {/* Commitment Section (Text Left, Image Right) */}
     {/* Commitment Section (Heading Top + Text Left, Image Right) */}
<div className="cvl-commitment-wrapper">
  <h3 className="cvl-subheading" style={{ width: "100%", textAlign: "left", marginBottom: "40px" }}>
    JVT Immigration's Commitment to Providing Customized Immigration Solutions
  </h3>

  <div
    className="cvl-commitment-section"
    style={{
      display: "flex",
      gap: "50px",
      flexWrap: "wrap",
      alignItems: "flex-start",
    }}
  >
    {/* Left Text */}
    <div className="cvl-commitment-text">
      <p className="cvl-paragraph">
        Consulting JVT Immigration has several benefits, one of which is their focus on individualized service for each client. Every student’s profile is different from one another and we offer our services accordingly. JVT Immigration provides individualized consultations to understand the student’s history, academic profile, and professional goals. They make recommendations for the top colleges and programs that fit the student’s interests and objectives based on their profile and interest. In addition, our <strong>Immigration Consultant</strong> advises on how to apply for visas, including collecting documents.
      </p>
      <p className="cvl-paragraph">
        JVT Immigration stands out among other immigration consulting firms because of its focus on personalized service for each client. Our team consults with each student and knows their unique academic and professional goals. With the assistance of this data, our specialists are able to give suggestions that will best fit the student’s goals. Our Canada study consultants in Ludhiana also provide guidance on the visa application process, including document collection and submission. Trust JVT Immigration to provide you with the personalized support you need to succeed in your academic and professional pursuits.
      </p>
    </div>

    {/* Right Image */}
    <div className="cvl-commitment-image">
      <img
        src="/images/canadavisaludhiana.jpg"
        alt="JVT Immigration Commitment"
      />
    </div>
  </div>
</div>


        {/* Benefits Section */}
        <div className="cvl-benefits-section">
          <h3 className="cvl-subheading">Consulting JVT Immigration Has Countless Benefits Such as:</h3>
          <ul style={{ listStyle: "none", paddingLeft: 0, marginTop: "20px" }}>
            {[
              "Deep Knowledge and Understanding of Canadian Universities and the Education System",
              "Reliable connections and relationships with top Canadian Institutes",
              "Timely valuable insight into the admission process",
              "Assistance related to Scholarship and Funding applications, which lowers the financial burden on students",
            ].map((point, index) => (
              <li key={index} style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                <FaCheck style={{ color: "#000", marginRight: "10px" }} />
                {point}
              </li>
            ))}
          </ul>

          <p className="cvl-paragraph">
            <strong>JVT Immigration Consultant</strong> is dedicated to providing its clients with services that are honest and moral. They make sure that all of their offerings comply with Canadian immigration rules and legislation. They are constantly accessible to address any queries or worries that clients may have and regularly inform clients on the status of their visa applications. JVT Immigration Consultancy has a long list of trustable and satisfied clientele.
          </p>

          <p className="cvl-paragraph">
            In conclusion, JVT Immigration is one of the best Study Visa Consultants for Canada in Ludhiana. Their personalized approach, deep knowledge of the education system, and commitment to client satisfaction make them a top choice for students seeking to study in Canada. If you want to pursue your ambition of attending College or University in Canada, think about interacting with JVT Immigration.
          </p>

          <p className="cvl-paragraph">
            JVT Immigration stands as a reliable and trustworthy choice for Canada study visa consultants in Ludhiana. With their expertise, personalized guidance, and up-to-date knowledge of immigration policies, they ensure a seamless visa application process. Trust JVT Immigration to fulfill your study abroad aspirations and pave the way for a successful educational journey in Canada.
          </p>
        </div>
      </div>
    </>
  );
};

export default Canadavisaludh;
