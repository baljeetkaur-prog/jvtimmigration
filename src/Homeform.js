import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCheck } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha"; 
import "./Homeform.css";

const Homeform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    choice: "",
    message: "",
  });
    const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify that you are not a robot!");
      return;
    }

    console.log(formData, captchaValue); // send captcha along with form data
    alert("Message sent!");

    // Reset form and captcha
    setFormData({ name: "", email: "", phone: "", choice: "", message: "" });
    setCaptchaValue(null);
  };

  return (
<section
  className="homeform-section"
  style={{
    backgroundImage: "url('/images/bg-pricing.jpg')",
    backgroundSize: window.innerWidth < 768 ? "contain" : "contain", // bigger on small screens
    backgroundRepeat: "no-repeat",
    backgroundPosition: window.innerWidth < 768 ? "center top" : "top right", // adjust position
    width: "100%",
    minHeight: "1000px",
    padding: "0 20px 10px",
    boxSizing: "border-box",
  }}
>
      <div className="homeform-container" style={{ paddingTop: "80px" }}>
        {/* Left Side */}
        <div className="homeform-left">
          <div className="homeform-border-title">
            <span>Request Callback</span>
          </div>
          <p className="homeform-contact-text">
            Don’t hesitate to contact with us for <span style={{ color: "#ffc000" }}>inquries!!</span>
          </p>

 <div className="homeform-info-item">
  <div className="homeform-icon"><FaMapMarkerAlt /></div>
  <div className="homeform-info-text">
    <strong style={{fontSize:'1.5rem'}}>Our Location</strong>
    <p>Office No.24-26, The Mall Road, Near Idea Showroom, Opp. Central Jail, Ferozepur City- 152002</p>
  </div>
</div>

          <div className="homeform-info-item">
            <div className="homeform-icon"><FaPhoneAlt /></div><br/>
            <div className="homeform-info-text">
              <strong style={{fontSize:'1.5rem'}}>Call Us For Information</strong>
              <p>+91-95639-95639</p>
            </div>
          </div>

          <div className="homeform-info-item">
            <div className="homeform-icon"><FaEnvelope /></div><br/>
            <div className="homeform-info-text">
              <strong style={{fontSize:'1.5rem'}}>E-Mail Us</strong>
              <p>info@jvtimmigration.com</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="homeform-right">
          <h2>Send Message:</h2>
          <p>
            Leave your Name, Phone Number, and Short Message in Contact Form. Our Team of Immigration Experts will Contact you Shortly.
          </p>

          <form className="homeform-form" onSubmit={handleSubmit}>
            <label>
              Name (required)
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name*"
                required
              />
            </label>

            <label>
              Email Address (required)
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email*"
                required
              />
            </label>

            <label>
              Phone (required)
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone*"
                required
              />
            </label>

            <label>
              Choose Service (required)
              <select
                name="choice"
                value={formData.choice}
                placeholder="Choose Servie*"
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Visa Assistance">Visa Assistance</option>
                <option value="Travel Assistance">Travel Assistance</option>
                <option value="Career Counselling">Career Counselling</option>
                <option value="Profile Assessment">Profile Assessment</option>
                <option value="University Selection">University Selection</option>
              </select>
            </label>

            <label>
              Your Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message*"
                rows="4"
              ></textarea>
            </label>

            {/* Placeholder for Captcha */}
            <label>
              Verify that you are not a robot <span style={{ color: "red" }}>*</span>
              <div className="homeform-captcha">
                <ReCAPTCHA
                  sitekey="6Lcya9ErAAAAAI6zFHFEmESaNvYuPqjzZsTET70C" 
                  onChange={(value) => setCaptchaValue(value)}
                />
              </div>
            </label>

            <button type="submit" className="homeform-submit-btn">
              <FaCheck style={{ marginRight: "8px", color: "#fff" }} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Homeform;
