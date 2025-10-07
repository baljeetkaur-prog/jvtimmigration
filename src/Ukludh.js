import { Link } from "react-router-dom";
import "./Ukludh.css";
import { Helmet } from "react-helmet";

const Ukludh = () => {
  return (
    <>
            <Helmet>
      <title>Best UK Study Visa Consultants in Ludhiana | JVT Immigration</title>
    </Helmet>
      {/* Banner Section */}
      <div
        className="abouts-banner behind-nav"
        style={{ backgroundImage: `url('/images/bg-page-title.jpg')` }}
      >
        <div className="abouts-banner-content">
          <h1 className="aboutheading">UK Study Visa Consultants in Ludhiana</h1>
          <p className="abouts-breadcrumb">
            <Link to="/">Home</Link> - UK Study Visa Consultants in Ludhiana
          </p>
        </div>
      </div>

      {/* Page Content */}
      <div className="ukludh-container">
        {/* Center Heading */}
        <h2 className="ukludh-center-heading">
          Your Pathway to Success: Leading UK Study Visa Consultants in Ludhiana
        </h2>

        {/* Intro Section: Left & Right */}
        <div className="ukludh-flex">
          <div className="ukludh-left">
            <p>
              Over the years, a significant change has been noticed among students regarding their increased interest in pursuing higher studies in the United Kingdom. Filing a UK Study Visa is a time-consuming procedure, but with the assistance of a reputable, knowledgeable, and experienced visa consultant, you can come across a smooth and hassle-free application procedure. JVT Immigration is one of Ludhiana’s leading Immigration Consultancies that provide students with comprehensive guidance in their Immigration services.
            </p>
            <p>
              JVT Immigration is a licensed and reputed immigration and visa consultancy firm offering continuous support to students interested in studying in the UK. We have a dedicated team of professionals and highly qualified consultants who ensure their clients the best immigration services.
            </p>
          </div>

          <div className="ukludh-right">
            <img src="/images/visa-expert-banner.jpg" alt="UK Study Visa" />
          </div>
        </div>

        {/* Expert Guidance Section */}
        <div className="ukludh-section">
          <h2>Expert Guidance for UK Study Visas: Ludhiana's Trusted Consultants</h2>

          <p><strong>Reasons to Choose JVT Immigration</strong></p>
          <ul>
            <li>Knowledge: Consultants at JVT Immigration are extremely skilled and knowledgeable, and they are well-versed in the UK visa application procedure.</li>
            <li>Comprehensive Services: The business provides a broad range of services that address every stage of the application procedure for a study visa.</li>
            <li>Individualized Attention: JVT Immigration gives each of its client’s personalized attention and sees to it that their particular needs and demands are satisfied.</li>
            <li>Affordable Services: JVT Immigration ensures that its clients get the best value for their money by offering its services at fair costs.</li>
            <li>Visa Assistance: Getting the right assistance at the right time will raise your chances of visa attainment.</li>
            <li>Travel Assistance: Leaving your home country and settling abroad requires a lot of courage. And for the smooth migration of students in the UK, we provide travel assistance to every student.</li>
            <li>Career counseling: Knowing the right career option can ease down your journey of getting a UK Study Visa. And our professionals can remove all your dilemmas with visa result-driven career counseling.</li>
            <li>Profile Assessment: Through profile assessment, you can identify the best career option for you as per your eligibility, academics, and interest.</li>
            <li>University Selection: UK is home to the world’s best Universities, but their admission criteria vary from one another. So consulting experts of JVT Immigration can assist you in getting smooth admission.</li>
          </ul>
        </div>

        {/* Navigating UK Study Visa */}
        <div className="ukludh-section">
          <h2>Navigating Your UK Study Visa Journey with Ludhiana's Experts</h2>
          <p>
            Applying for a UK study visa can be difficult, but you can make the process simpler and less stressful with the assistance of a professional visa expert like JVT Immigration. JVT Immigration can assist you if you require assistance with visa requirements, course selection, financial aid, or lodging. To get started on your UK study visa application, get in touch with them right now.
          </p>
          <p>
            Taking admission to UK Universities is not an easy process. The requirements for enrolling in the universities vary from one another. But JVT Immigration experts keep their eyes on all the latest updates regarding Immigration. Most of the world-famous personalities got their education in the UK.
          </p>
        </div>

        {/* Map Section */}
        <div className="ukludh-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d54775.76621694337!2d75.832166!3d30.901054!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83655210d295%3A0x116d43f9b6b32e95!2sJVT%20Immigration%20Consultant%20Ludhiana!5e0!3m2!1sen!2sin!4v1759734412512!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0, width: "100%", maxWidth: "1200px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="JVT Immigration Ludhiana Map"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Ukludh;
