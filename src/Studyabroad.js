import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPlane, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./About.css";
import "./Studyabroad.css";
import { Helmet } from "react-helmet";

const cardData = [
  {
    type: "main",
    title: "Study Abroad",
    text: "Helping the Students to Build a Promising Career",
    buttonText: "Book an Appointment",
  },
  {
    type: "country",
    flag: "united-kingdom-icon2.png",
    title: "Study in USA",
    text: "World-class universities and colleges make USA a preferred study abroad destination. The numerous academic courses and superior education system helps in bestowing an amazing learning system for the students that further helps in widening their educational horizons. Studying in USA is worth the time and efforts of all the Indian international education…",
    link: "/study-abroad/usa-study-visa-consultants"
  },
  {
    type: "country",
    flag: "united-kingdom-icon1.png",
    title: "Study in UK",
    text: "Most of the students prefer to study in the UK as the country is emerging as one of the huge study destination. The UK is referred to as a country that offers quality education through its internationally recognized and renowned colleges and universities. The best part about studying in the UK universities and colleges is that there are innumerable courses,…",
    link: "/study-abroad/uk-study-visa-consultants"
  },
  {
    type: "country",
    flag: "new-zealand-05.png",
    title: "Study in Newzealand",
    text: "New Zealand is a country that follows UK based education system; hence, making it the most preferred study abroad destination for aspirants looking for international education. The degrees and courses offered at the universities and colleges of New Zealand are all recognized internationally. The education system of the country helps…",
    link: "/study-abroad/newzealand-study-visa-consultants"
  },
  {
    type: "country",
    flag: "canada-04.png",
    title: "Study in Canada",
    text: "Students now-a-days are becoming more intrusive to study in Canada as the education system is practice-oriented & research based. Canada is a country that has witnessed an incredible growth when it comes to the number of international education aspirants. Canada is referred to as one of the best international education destinations as it is considered as…",
    link: "/study-abroad/canada-study-visa-consultants"
  },
  {
    type: "country",
    flag: "australia-icon-3.png",
    title: "Study in Australia",
    text: "The best part of studying in Australia is the provision of quality education. Studying in Australia helps the students to make a way towards an excellent personal and professional career. The various courses and programs offered by the Australian universities and colleges make it one of the best international education destinations in the world. …",
    link: "/study-abroad/australia-study-visa-consultants"
  },
];

const Studyabroad = () => {
  const navigate = useNavigate();

  return (
    <>
    <Helmet>
      <title>Top Study Abroad Consultants in Ferozepur | JVT Immigration</title>
    </Helmet>
    <div className="studyabroad-page">
      {/* Banner Section */}
      <div
        className="abouts-banner behind-nav"
        style={{ backgroundImage: `url('/images/bg-page-title.jpg')` }}
      >
        <div className="abouts-banner-content">
          <h1 className="aboutheading">Study Abroad Consultants</h1>
          <p className="abouts-breadcrumb">
            <Link to="/">Home</Link> - Study Abroad
          </p>
        </div>
      </div>

      {/* Intro & Cards Section */}
      <div className="studyabroad-container">
        <div className="intro-icon">
          <FaPlane />
        </div>

        <h2 className="studyabroad-heading">
          Study Abroad Consultancy in Ferozepur
        </h2>

        <p className="studyabroad-text">
          Recognizing the enhancing need and desire of the students to study abroad, we at JVT
          Immigration caters to the educational needs and requirements of the students.
        </p>

        <div className="studyabroad-cards">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`studyabroad-card ${card.type === "main" ? "main-card" : "country-card"}`}
              onClick={() => card.link && navigate(card.link)}
            >
              {card.type === "main" ? (
                <>
                  <h3 className="main-card-title">{card.title}</h3>
                  <p className="main-card-text">{card.text}</p>
                  <Link to="/appointment">
                    <button className="main-card-btn">
                      <FaCalendarAlt /> {card.buttonText}
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <div className="flag-wrapper">
                    <img src={`/images/${card.flag}`} alt={card.title} />
                  </div>
                  <h3 className="country-card-title">{card.title}</h3>
                  <p className="country-card-text">{card.text}</p>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="studyabroad-locations">
          <h3>Our Locations</h3>
          <div className="location-buttons">
            <Link to="/immigration-consultants-in-ludhiana"><button>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#fff" }} />
              Ludhiana
            </button></Link>
            <Link to="/immigration-consultants-in-mohali"><button>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#fff" }} />
              Mohali
            </button></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Studyabroad;
