import React from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./Overseas.css";
import { Helmet } from "react-helmet";

const Overseas = () => {
  return (
    <>
    <Helmet>
  <title>Overseas Manpower Solutions - JVT Immigration Consultant</title>
</Helmet>
      {/* Banner */}
      <div
        className="abouts-banner behind-nav"
        style={{ backgroundImage: `url('/images/bg-page-title.jpg')` }}
      >
        <div className="abouts-banner-content">
          <h1 className="aboutheading">Overseas Manpower Solutions</h1>
          <p className="abouts-breadcrumb">
            <Link to="/">Home</Link> - Overseas Manpower Solutions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="overseas-content">
        <div className="container" style={{ maxWidth: "1200px" }}>
          {/* Introduction */}
          <h2 className="overseas-head">Overseas Manpower Solutions</h2>
          <p>
            <strong>JVT Immigration Consultants</strong> is a United Kingdom-based Indian company
            that offers a wide range of immigration and visa consultancy services to
            individuals and businesses. We offer our services to individuals who
            are looking to move abroad for travel, study, or work. In addition to
            our services from study visa and consultancy services, JVT Immigration
            Consultants is now proud to offer Overseas manpower solutions under
            the name of <strong>JVT Solutions Limited</strong>. This service is for those businesses
            who are looking to recruit and manage employees from other countries.
          </p>
          <p>
            At JVT Solutions Limited, we understand that recruiting and managing
            overseas talent is a complex and time-consuming process. That’s why
            we offer comprehensive overseas manpower solutions to help businesses
            streamline their recruitment and management processes. Now, they can
            take advantage of a global talent pool. Our services include work visas,
            manpower recruitment, skilled and unskilled migrant solutions, and more.
          </p>

          {/* Why Choose */}
          <h2 className="overseas-head">Why Choose JVT Solutions Limited for Your Overseas Manpower Needs?</h2>
          <div className="overseas-two-columns">
            <div className="left">
              <p>
                JVT Immigration Consultants is a trusted and experienced firm that
                has been providing visas and immigration services for over a decade.
                We understand the complexities of the immigration process and that’s
                why we offer personalised solutions to meet the unique needs of our
                clients. When it comes to Overseas Manpower Solutions, our services
                are designed in such a way that helps businesses to navigate the
                challenges of recruiting and helps in managing employees from one
                country to another country and ensuring a smooth and successful process.
              </p>
              <p><strong>Our Overseas Manpower Solutions</strong></p>
              <p>
                <strong>JVT Solutions Limited</strong> will offer you a range of overseas manpower
                solutions to help your businesses to find and manage the right talent
                from around the world. Our services include:
              </p>
            </div>
            <div className="right">
              <img src="/images/overseas.jpg" alt="Overseas Manpower" />
            </div>
          </div>

          {/* Points */}
          <div className="overseas-solutions">
          <ul className="overseas-points">
  <li>
    <span className="tick-icon"><FaCheck /></span>
    Work Visas: We provide all support to businesses to save their time in work visas and help them with all necessary documentation for their overseas employees. Our team has extensive experience in visa processing and can help businesses navigate the complex requirements of different countries.
  </li>
  <li>
    <span className="tick-icon"><FaCheck /></span>
    Manpower Recruitment: Another service is manpower recruitment services; which help businesses to find the right candidates for their business needs. Our team will help you to find the right talent as per the requirement ranging from skilled labor to unskilled labor.
  </li>
  <li>
    <span className="tick-icon"><FaCheck /></span>
    Skilled Migrant Solutions: Our skilled migrant solutions are professional workers designed to help businesses find and recruit highly skilled workers from other countries. We assist in sourcing, screening, visa processing, and relocation.
  </li>
  <li>
    <span className="tick-icon"><FaCheck /></span>
    Unskilled Migrant Solutions: Some businesses don’t need skilled workers. We offer unskilled migrant solutions to recruit workers for jobs that require less specialized skills or training. We handle regulations and recruitment from other countries.
  </li>
</ul>

          </div>

          {/* Benefits Section */}
          <div className="benefits-section text-center">
            <h3>Benefits of Choosing JVT Solutions Limited for Your Overseas Manpower Needs</h3>
            <p style={{textAlign:'center'}}>
              <strong>JVT Solutions Limited will offer a range of benefits for your Overseas Manpower needs. To elaborate more precisely such as:</strong>
            </p>

            <div className="benefits-two-columns">
              <div className="left">
                <h4>Access to a Global Talent Pool</h4>
                <p>
                  If you join hands with us, our overseas manpower solutions can help businesses to tap into a wider pool of talent from different parts of the world and we give them access to a wide range of highly skilled professionals, experts, and experienced staff.
                </p>
              </div>
              <div className="right">
                <h4>Streamlined Recruitment Processes</h4>
                <p>
                  Our comprehensive recruitment services can help businesses save time and money on sourcing, screening, and interviewing candidates, and ensure a smooth and efficient recruitment process.
                </p>
              </div>
              <div className="left">
                <h4>Reduced Administrative Burden</h4>
                <p>
                  We help you to reduce the administrative burden by ensuring and handling all aspects of the recruitment process, including visa processing, travel arrangements, and logistical support, freeing up businesses to focus on their core operations.
                </p>
              </div>
              <div className="right">
                <h4>Improved Retention Rates</h4>
                <p>
                  Our support and services can help employees settle into their new roles and surroundings, which can help improve retention rates and reduce turnover.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
     <div className="overseas-contact-section">
  <h5 className="overseas-small-heading">
    <span className="border-left" /> Contact Us
  </h5>
  <h2>
    If Need Any Info Please Contact <span className="highlight">US!</span>
  </h2>

  <div className="contact-info-cards">
    <div className="contact-card">
      <FaMapMarkerAlt className="contact-icon-round" />
      <div>
        <h4>Address:</h4>
        <p>Office No 24-26, The Mall Road, Near Idea Showroom, Opp. Central Jail, Ferozepur City 152002</p>
      </div>
    </div>

    <div className="contact-card">
      <FaEnvelope className="contact-icon-round" />
      <div>
        <h4>E-Mail:</h4>
        <p>info@jvtimmigration.com</p>
      </div>
    </div>

    <div className="contact-card">
      <FaPhoneAlt className="contact-icon-round" />
      <div>
        <h4>Call For Help:</h4>
        <p>+91-95639-95639</p>
      </div>
    </div>
  </div>
</div>

        </div>
      </section>
    </>
  );
};

export default Overseas;
