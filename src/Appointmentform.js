import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaPaperPlane } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import "./Appointmentform.css";
import { Helmet } from "react-helmet";

const AppointmentForm = () => {
     const [captchaValue, setCaptchaValue] = useState(null);
      const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify that you are not a robot!");
      return;
    }

    alert("Form submitted!");
    // Here you can send form data along with captchaValue
  };

  return (
    <>
                   <Helmet>
      <title>Book an Appointment with JVT Immigration</title>
    </Helmet>
      {/* Banner Section */}
      <div
        className="abouts-banner behind-nav"
        style={{ backgroundImage: `url('/images/bg-page-title.jpg')` }}
      >
        <div className="abouts-banner-content">
          <h1 className="aboutheading">Appointment</h1>
          <p className="abouts-breadcrumb">
            <Link to="/">Home</Link> -{" "}
            <Link to="/study-abroad">Study Abroad</Link> - Appointment
          </p>
        </div>
      </div>

      {/* Form Container */}
      <div className="appointmentform-page">
      <div className="form-wrapper">
        <div className="form-container">

          {/* Calendar Icon */}
          <div className="calendar-icon">
            <FaCalendarAlt />
          </div>

          {/* Headings */}
          <div className="form-headings">
            <h3>
              <span className="small-border"></span>
              Get easy solution here
            </h3>
            <h2>
              <span className="black-text">Book</span>{" "}
              <span className="orange-text">Appointment</span>
            </h2>
          </div>

          {/* Form */}
          <form>
            {/* Personal Information */}
            <div className="form-section">
              <h4>Personal Information:</h4>
              <div className="form-row">
                <div className="form-group">
                  <label>Country Of Preference <span className="required">*</span></label>
                  <input type="text" placeholder="Type Country of Preference" />
                </div>
                <div className="form-group">
                  <label>Name of Candidate <span className="required">*</span></label>
                  <input type="text" placeholder="Name of Candidate" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Date of Birth <span className="required">*</span></label>
                  <input type="date" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Gender <span className="required">*</span></label>
                  <div className="radio-group">
                    <label><input type="radio" name="gender" /> Male</label>
                    <label><input type="radio" name="gender" /> Female</label>
                    <label><input type="radio" name="gender" /> Other</label>
                  </div>
                </div>
                <div className="form-group">
                  <label>Marital Status <span className="required">*</span></label>
                  <div className="radio-group">
                    <label><input type="radio" name="marital" /> Married</label>
                    <label><input type="radio" name="marital" /> Unmarried</label>
                    <label><input type="radio" name="marital" /> Divorced</label>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="form-section">
              <h4>Contact Information:</h4>
              <div className="form-row">
                <div className="form-group full-width">
                  <label>Email <span className="required">*</span></label>
                  <input type="email" placeholder="Type Email"/>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Contact Number 1 <span className="required">*</span></label>
                  <input type="text" placeholder="Type Contact Number 1"/>
                </div>
                <div className="form-group">
                  <label>Contact Number 2 (Optional)</label>
                  <input type="text" placeholder="Type Contact Number 2"/>
                </div>
              </div>
            </div>

            {/* Educational Detail */}
          {/* Educational Detail */}
{/* Educational Detail */}
<div className="form-section education">
  <h4>Educational Detail:</h4>

  <div className="form-row">
    <div className="form-group">
      <label>College/University</label>
      <input type="text" placeholder="College/University" />
    </div>
    <div className="form-group">
      <label>Degree/Diploma</label>
      <input type="text" placeholder="Degree/Diploma" />
    </div>
    <div className="form-group">
      <label>Marks</label>
      <input type="text" placeholder="Marks" />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group">
      <label>College/University</label>
      <input type="text" placeholder="College/University" />
    </div>
    <div className="form-group">
      <label>Degree/Diploma</label>
      <input type="text" placeholder="Degree/Diploma" />
    </div>
    <div className="form-group">
      <label>Marks</label>
      <input type="text" placeholder="Marks" />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group">
      <label>Bands Obtained in IELTS/PTE Overall</label>
      <input type="text" placeholder="Bands Obtained in IELTS/PTE Overall" />
    </div>
    <div className="form-group">
      <label>Date of Exam</label>
      <input type="date" placeholder="Date of Exam" />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group branch-select">
      <label>Select our Branch (Required)</label>
      <select defaultValue="">
        <option value="" disabled hidden>Choose Branch:</option>
        <option>Ferozpur</option>
        <option>Mohali</option>
        <option>Ludhiana</option>
        <option>Jalalabad</option>
      </select>
    </div>
  </div>
</div>



            {/* Captcha & Submit */}
            <div className="form-row">
                <label>
                  Verify that you are not a robot <span className="required">*</span>
                  <ReCAPTCHA
                    sitekey="6Lcya9ErAAAAAI6zFHFEmESaNvYuPqjzZsTET70C"
                    onChange={(value) => setCaptchaValue(value)}
                  />
                </label>
              </div>

              {/* Submit Button */}
             <div className="form-row captcha-submit">
  <button type="submit">
    <FaPaperPlane style={{ marginRight: "8px" }} />
    Submit Now
  </button>
</div>

          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default AppointmentForm;
