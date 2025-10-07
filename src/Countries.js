import React from "react";
import { Link } from "react-router-dom";
import "./Countries.css";

const countryData = [
  {
    flag: "/images/united-kingdom-icon1.png",
    title: "Study in UK",
    description:
      "Most of the students prefer to study in the UK as the country is emerging as one of the huge study destination. The UK is referred to as a country that offers quality education through its internationally recognized and renowned colleges and universities.",
    link: "/study-abroad/uk-study-visa-consultants",
  },
  {
    flag: "/images/united-kingdom-icon2.png",
    title: "Study in USA",
    description:
      "World-class universities and colleges make the USA a preferred study abroad destination. The numerous academic courses and superior education system help bestow an amazing learning system on the students, which further helps widen their educational horizons.",
    link: "/study-abroad/usa-study-visa-consultants",
  },
  {
    flag: "/images/canada-04.png",
    title: "Study in Canada",
    description:
      "Students these days are finding it more intrusive to study in Canada as the education system is practice-oriented and research-based. Canada is a country that has witnessed incredible growth when it comes to the number of international education aspirants.",
    link: "/study-abroad/canada-study-visa-consultants",
  },
  {
    flag: "/images/australia-icon-3.png",
    title: "Study in Australia",
    description:
      "The best part of studying in Australia is the provision of quality education. It helps students pave the way toward an excellent personal and professional career.",
    link: "/study-abroad/australia-study-visa-consultants",
  },
  {
    flag: "/images/new-zealand-05.png",
    title: "Study in New Zealand",
    description:
      "New Zealand is a country that follows a UK-based education system, hence making it the most preferred study abroad destination for aspirants looking for international education. The degrees and courses offered",
    link: "/study-abroad/newzealand-study-visa-consultants",
  },
];

const Countries = () => {
  return (
    <section
      className="cs-countries-section"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.0) 20%, rgba(255,255,255,0.0) 80%, rgba(255,255,255,0.7)),
          url('/images/bg-section-02.jpg')
        `,
        backgroundPosition: "top left",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        position: "relative",
        zIndex: 0,
      }}
    >
      <div className="cs-countries-container">
        <h5 className="cs-small-heading">Study Visa</h5>
        <h2 className="cs-big-heading">
          Countries <span className="cs-highlight">We Offer</span>
        </h2>
        <p className="cs-countries-description">
          JVT Immigration is a trusted study abroad consultancy that provides
          expert guidance for students looking to study in Canada, UK, USA,
          Australia, and New Zealand.
        </p>

        <div className="cs-countries-cards">
          {countryData.map((country, index) => (
            <Link to={country.link} key={index} className="cs-country-card-wrapper">
              <div className="cs-country-card">
                <div className="cs-card-left">
                  <div className="cs-flag-round">
                    <img src={country.flag} alt={country.title} />
                  </div>
                  <div className="cs-card-content">
                    <h3 className="cs-card-title">{country.title}</h3>
                    <p className="cs-card-description">{country.description}</p>
                  </div>
                </div>
                <div className="cs-card-right">
                  <div className="cs-plus-round">+</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;
