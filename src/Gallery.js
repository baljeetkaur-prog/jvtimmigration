import React from "react";
import "./Gallery.css";

const images = Array.from({ length: 20 }, (_, i) => `/images/jvtvisa-gallery-photo${i + 1}.jpg`);

const Gallery = () => {
  return (
    <section className="gallery-section">
  <div className="gallery-title-container">
    <h2 className="gallery-title">Portfolio</h2>
  </div>

  <div className="gallery-subtitle">
    <span className="subtitle-white">Most Recent</span>{" "}
    <span className="subtitle-yellow">Visa's</span>
  </div>

  <div className="gallery-images">
    {images.map((img, idx) => (
      <div className="gallery-image-wrapper" key={idx}>
        <img src={img} alt={`Gallery ${idx + 1}`} />
      </div>
    ))}
  </div>
</section>

  );
};

export default Gallery;
