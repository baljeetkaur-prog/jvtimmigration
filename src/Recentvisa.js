import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import "./Recentvisa.css";
import { Helmet } from "react-helmet";

const Recentvisa = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const imagesData = {
    "Study Visa": Array.from({ length: 26 }, (_, i) => `student${i + 1}.jpg`),
    "Spouse Visa": Array.from({ length: 5 }, (_, i) => `spouse${i + 1}.jpg`),
    "Work Visa": [],
    "Tourist Visa": Array.from({ length: 5 }, (_, i) => `tourist${i + 1}.jpg`),
    "Dependent Visa": ["dependent1.jpg", "dependent2.jpg"],
    "Family Visa": ["family1.jpg"],
    "Achievements": ["achievement1.jpg", "achievement2.jpg"],
  };

  const getFilteredImages = () =>
    activeTab === "All" ? Object.values(imagesData).flat() : imagesData[activeTab] || [];

  const filteredImages = getFilteredImages();

  return (
    <>
       <Helmet>
      <title>Inspiring Moments of Recent Visa Adventures | JVT Immigration</title>
    </Helmet>
    <div className="recentvisa-page">
      <div
        className="abouts-banner behind-nav"
        style={{ backgroundImage: `url('/images/recent-visa-banner-01.bk.png')` }}
      >
        <div className="abouts-banner-content">
          <h1 className="aboutheading">Recent Visa's</h1>
          <p className="abouts-breadcrumb">
            <Link to="/">Home</Link> - Recent Visa
          </p>
        </div>
      </div>

      <div className="recentvisa-container">
         <h2 className="recentvisa-title">Recent Visa's</h2>
        {/* Tabs */}
        <div className="recentvisa-tabs">
          {[
            "All",
            "Study Visa",
            "Spouse Visa",
            "Work Visa",
            "Tourist Visa",
            "Dependent Visa",
            "Family Visa",
            "Achievements",
          ].map((tab) => (
            <button
              key={tab}
              className={`recentvisa-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              <span>{tab}</span>
            </button>
          ))}
        </div>

        {/* Images grid */}
        <div className="recentvisa-grid">
          {filteredImages.length > 0 ? (
            filteredImages.map((img, index) => (
              <div
                className="recentvisa-grid-item"
                key={index}
                onClick={() => setSelectedImage(`/images/${img}`)}
              >
                <img src={`/images/${img}`} alt={img} />
                <div className="image-overlay"></div>
              </div>
            ))
          ) : (
            <p className="no-images-text">No images available for this category.</p>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="image-modal">
          <span className="modal-close" onClick={() => setSelectedImage(null)}>
            &times;
          </span>
          <img src={selectedImage} alt="Preview" />
        </div>
      )}
    </div>
    </>
  );
};

export default Recentvisa;
