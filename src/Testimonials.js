import React, { useState } from "react";
import "./Testimonials.css";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonialsData = [
  {
    text: "Very good consultancy where you can trust. Special Thanks to Lalita Mam who helped me a lot. She is very hardworking. I highly recommend who are trying to reach in Canada. With their expert advice you can reach your dream destination.",
    name: "Taniya Gupta",
    avatar: "/images/avatar.png",
  },
  {
    text: "I feel elated about not just the staff members but also Vipan Sir. just because of their ambience as well as the fact that this is merely immigration in which payment is made after visa, and I also applied for two visas and have seen a higher success rate.",
    name: "Pooja Sharma",
    avatar: "/images/avatar.png",
  },
  {
    text: "I have visited this office and seen the ambience. JVT immigration is the best in the world. I have also applied for the three visas, and all three have been successfully processed after visa payment.",
    name: "Rana Sandhu",
    avatar: "/images/avatar.png",
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const changeTestimonial = (direction) => {
    setFade(false); // start fade-out
    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (direction === "next") {
          return prev === testimonialsData.length - 1 ? 0 : prev + 1;
        } else {
          return prev === 0 ? testimonialsData.length - 1 : prev - 1;
        }
      });
      setFade(true); // fade-in new content
    }, 200); // match CSS transition duration
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Left: Text */}
        <div className="testimonials-left">
         <h2 className="testimonials-title">Testimonials</h2>
          <p className="testimonials-subtitle">
            Some feedbacks <span className="highlight">from honorable Clients</span>
          </p>
          <div className="testimonials-stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} color="#ffc000" />
            ))}
          </div>

          <div className={`testimonial-content ${fade ? "fade-in" : "fade-out"}`}>
            <p className="testimonial-text">{currentTestimonial.text}</p>
            <div className="testimonial-client">
              <img
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                className="testimonial-avatar"
              />
              <span className="testimonial-name">{currentTestimonial.name}</span>
              <div className="testimonial-nav">
                <button onClick={() => changeTestimonial("prev")}>
                  <FaChevronLeft />
                </button>
                <button onClick={() => changeTestimonial("next")}>
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image */}
<div className="testimonials-right">
  <div
    className="testimonials-image-wrapper"
    onMouseMove={(e) => {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      const rotateY = ((x / width) - 0.5) * 35; // increased tilt left/right max 35deg
      const rotateX = ((y / height) - 0.5) * -35; // increased tilt top/bottom max 35deg
      e.currentTarget.firstChild.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.firstChild.style.transform = `rotateX(0deg) rotateY(0deg)`; // reset
    }}
  >
    <img
      src="/images/testimonials-group-02.png"
      alt="Testimonials"
      className="testimonials-image"
    />
  </div>
</div>
      </div>
    </section>
  );
};

export default Testimonials;
