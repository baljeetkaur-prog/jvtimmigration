import { Link } from "react-router-dom";
import "./Canadaludh.css";
import { FaCheckCircle } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Canadaludh = () => {
  return (
    <>
            <Helmet>
      <title>Canada Study Visa Consultants in Mohali | JVT Immigration</title>
    </Helmet>
      {/* Banner Section */}
      <div
        className="abouts-banner behind-nav"
        style={{ backgroundImage: `url('/images/bg-page-title.jpg')` }}
      >
        <div className="abouts-banner-content">
          <h1 className="aboutheading">Canada Study Visa Consultants in Mohali</h1>
          <p className="abouts-breadcrumb">
            <Link to="/">Home</Link> - Canada Study Visa Consultants in Mohali
          </p>
        </div>
      </div>

      {/* Page Content (bounded to 1200px) */}
      <div className="cnmoh-container">
        {/* Intro Section */}
        <div className="cnmoh-content">
          <div className="cnmoh-text">
            <h2>Canada Study Consultants in Mohali</h2>
            <p>
              Over the years, the interest of students evolved regarding overseas
              education. And Canada has become the top-most study destination for
              students due to its easy filing, easy visa, and easy settlement
              option. But the most challenging phase arises when it comes to visa
              application filing. And to meet the students’ abroad aspirations,
              countless Immigration Consultants have opened in every nook and
              corner of Mohali city. But nothing could replace the quality of
              immigration services offered by the well-known JVT Immigration
              Consultants Pvt Ltd. It has branches in various locations, such as
              Ludhiana, Mohali, Ferozepur, and Jalalabad. We have set a benchmark
              in the Immigration Industry by offering:
            </p>

            <ul>
              <li>Transparent Immigration Services & unbiased counseling.</li>
              <li>
                Various Courses, Colleges, and Career options for students as per
                their eligibility and interest.
              </li>
              <li>
                Quality visa services to thousands of students and assisted them in
                migrating to their dream destinations.
              </li>
              <li>
                Timely case updation to clients so that they can keep track of their
                profile status.
              </li>
              <li>
                Comprehensive profile assessment and guidance to overcome any
                drawbacks.
              </li>
            </ul>
          </div>

          <div className="cnmoh-image">
            <img src="/images/canada-subimg-abroad.jpg" alt="Canada Study Visa" />
          </div>
        </div>

        {/* Process Section */}
       <div className="cnmoh-section">
          <p>
            So choosing JVT Immigration for lodging your Canada Study Visa
            Application is a Smart Choice! At JVT Immigration, we follow the
            following steps before the profile lodgement:
          </p>

      <ul>
  <li>
    <FaCheckCircle className="cnmoh-tick" /> 
    <span><strong>Assessment:</strong> Our professional counselors evaluate every case thoroughly to identify weak points that could cause visa refusal.</span>
  </li>
  <li>
    <FaCheckCircle className="cnmoh-tick" /> 
    <span><strong>Course Choice:</strong> After reviewing academic transcripts and IELTS/PTE scores, we provide a list of suitable courses.</span>
  </li>
  <li>
    <FaCheckCircle className="cnmoh-tick" /> 
    <span><strong>College Selection:</strong> Canada offers institutes in Arts, Tech, Business, Engineering, etc. We help select the best match.</span>
  </li>
  <li>
    <FaCheckCircle className="cnmoh-tick" /> 
    <span><strong>Offer Letter:</strong> We apply to multiple colleges and secure the offer letter for the student.</span>
  </li>
  <li>
    <FaCheckCircle className="cnmoh-tick" /> 
    <span><strong>Application Lodgement:</strong> Once the offer is received, we lodge the visa file. As the Canadian Embassy cleared its backlog, results come within 1–2 months.</span>
  </li>
</ul>

        </div>

        {/* Why Choose Section */}
        <div className="cnmoh-section">
          <p>
            As the Canadian Embassy keeps changing its rules, our Skilled,
            Experienced, and Trustworthy Counselors always stay updated with the
            latest Immigration News.
          </p>

          <h2>Why is JVT Immigration best in Mohali for a Canada Study Visa?</h2>
          <p>
            There are various reasons for choosing JVT Immigration to lodge your
            Canada Study Visa application hassle-free. They are:
          </p>

  <ul>
  <li>
    <FaCheckCircle className="cnmoh-tick" /> 
    <span><strong>Direct Approach to Top Canadian Institutes:</strong> Our connections give students confidence that their profile is handled by experts.</span>
  </li>
  <li>
    <FaCheckCircle className="cnmoh-tick" /> 
    <span><strong>Licensed:</strong> We are a certified immigration consultancy that follows proper visa filing procedures.</span>
  </li>
  <li>
    <FaCheckCircle className="cnmoh-tick" /> 
    <span><strong>High Visa Success Ratio:</strong> Applying through us ensures high approval chances thanks to our experienced team.</span>
  </li>
</ul>

        </div>

        {/* Google Map Section */}
        <div className="cnmoh-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d109774.62795430333!2d76.726502!3d30.705547!3m2!1i1024!2i768!4f13.1!2m1!1sSCF%20129%2C%202nd%20Floor%2C%20Sector%2061%2C%20Phase%207%2C%20SAS%20Nagar%2C%20Mohali!5e0!3m2!1sen!2sus!4v1759731025241!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="JVT Immigration Mohali Location"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Canadaludh;