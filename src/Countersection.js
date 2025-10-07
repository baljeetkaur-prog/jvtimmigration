import React from "react";
import { FaSmile, FaAward, FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import "./Countersection.css";

const countersData = [
  { icon: <FaSmile />, number: 99.9, text: "Happy Clients", suffix: "%" },
  { icon: <FaAward />, number: 15, text: "Winning Awards", suffix: "+" },
  { icon: <FaCheckCircle />, number: 100, text: "Success Visa Rating", suffix: "%" },
];

const CounterItem = ({ icon, number, text, suffix }) => {
  return (
    <div className="cs-counter-item">
      <div className="cs-counter-top">
        <div className="cs-counter-icon">{icon}</div>
        <div className="cs-counter-number-wrapper">
          <h3 className="cs-counter-number">
            {Number.isInteger(number) ? number : number.toFixed(1)}
            {suffix === "%" ? (
              <span className="cs-counter-suffix-percent">{suffix}</span>
            ) : (
              <span className="cs-counter-suffix-plus">{suffix}</span>
            )}
          </h3>
        </div>
      </div>
      <p className="cs-counter-text">{text}</p>
    </div>
  );
};

const Countersection = () => {
  return (
    <section className="cs-counter-section">
      <div className="cs-counter-container">
        <div
          className="cs-counter-left"
          style={{
            backgroundImage: `url('/images/bg-counter1.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {countersData.map((item, index) => (
            <CounterItem
              key={index}
              icon={item.icon}
              number={item.number}
              text={item.text}
              suffix={item.suffix}
            />
          ))}
        </div>

        <div className="cs-counter-right">
          <div className="cs-counter-right-top">
            <FaPhoneAlt className="cs-counter-right-icon" />
            <h3 className="cs-counter-right-text">Call for help!</h3>
          </div>
          <p className="cs-counter-right-number">+91-95639-95639</p>
        </div>
      </div>
    </section>
  );
};

export default Countersection;
