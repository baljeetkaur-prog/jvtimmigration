import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Carousel.css';
import { Link } from "react-router-dom";

const slides = [
  "/images/sliderimg1.png",
  "/images/sliderimg2.png",
  "/images/sliderimg3.png",
  "/images/sliderimg4.png",
  "/images/sliderimg5.jpg",
  "/images/sliderimg9.jpg",
  "/images/sliderimg8.jpg",
  "/images/sliderimg7.jpg",
  "/images/sliderimg6.jpg",
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      loop={true}
      slidesPerView={1}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      className="carousel-fullwidth"
    >
      {slides.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="slide-wrapper">
            <img
              src={src}
              alt={`Slide ${index}`}
              className={`slide-image ${index === activeIndex ? "active-slide" : ""}`}
            />

            {/* Circles always visible on slides > 1 */}
            {index > 1 && (
              <>
                <img
                  src="/images/circle2.png"
                  alt="Top Left Circle"
                  className="slide-overlay-top-left"
                />
                <img
                  src="/images/circle1.png"
                  alt="Bottom Right Circle"
                  className="slide-overlay-bottom-right"
                />

                {/* Animated overlays (flag, shape, globe) only on active slide */}
                {index === activeIndex && (
                  <>
              {/* Show flag only if slide is NOT a text slide */}
{index < 5 && (
  <img
    src="/images/flag.png"
    alt="Flag"
    className="slide-overlay-center-left animate-flag"
  />
)}

                    <img
                      src="/images/shape1.png"
                      alt="Center Shape"
                      className="slide-overlay-center animate-shape"
                    />
                    <img
                      src="/images/globe.png"
                      alt="Globe"
                      className="slide-globe-overlay animate-globe"
                    />
                  </>
                )}
              </>
            )}

            {/* Certificate on sliderimg4 */}
       {index === 3 && (
  <img
    src="/images/certificate.png"
    alt="Certificate"
    className={`slide-overlay-certificate ${index === activeIndex ? "animate-certificate" : ""}`}
  />
)}
            {/* Custom slide content */}
            {index >= 5 && (
              <div className="custom-slide-content-left">
                {index === 5 && (
                  <>
                    <h3>
                      <span className="white-text">Professional</span><br/>
                      <span className="yellow-text">counseling for</span><br/>
                      <span className="white-text">Study Abroad</span>
                    </h3>
                    <p className="custom-paragraph">
                      We have team of Professional to help<br/>
                      <span className="highlight-text">you choose the right course and college</span>
                    </p>
                 <Link to="/about" className="about-us-btn contact-btn">
  <span>About Us</span>
</Link>
                  </>
                )}
                {index === 6 && (
                  <>
                    <h3 className="sixth-slide-heading">
                      <span className="white-text">Paving Way</span><br/>
                      <span className="yellow-text">towards</span><br/>
                      <span className="white-text">Overseas Education</span>
                    </h3>
                    <p className="custom-paragraph">
                      We help the students to build a promising career by guiding them to choose the appropriate<span className="white-text">, </span><br/>
                      <span className="highlight-text">study abroad destination to gain higher education</span>
                    </p>
                    <Link to="/contact-us"className="about-us-btn contact-btn">
                      <span>Contact Us</span>
                    </Link>
                  </>
                )}
                {index === 7 || index === 8 ? (
                  <>
                    <h3 className="seventh-slide-heading">
                      <span className="white-text">Post Landing</span><br/>
                      <span className="yellow-text">Assistance Support</span><br/>
                      <span className="white-text">to Students</span>
                    </h3>
                    <p className="custom-paragraph">
                      We provide Post Landing Assistance Support to <br/>
                      <span className="highlight-text">Students like Accommodation and Guidance on part time job </span>
                    </p>
                                     <Link to="/about" className="about-us-btn contact-btn">
  <span>About Us</span>
</Link>
                  </>
                ) : null}
              </div>
            )}

            {/* Glow effect */}
            {index === activeIndex && <div className="slide-glow" />}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
