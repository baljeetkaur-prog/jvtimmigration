import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"; // import Link
import { generateSlug } from "./utils"; // import your slug function
import "./Blogsection.css";

const blogs = [
  { id: 1, title: "Study Visa Consultants in Ferozepur", date: "20 September, 2025", author: "Adminjvt", img: "/images/ukbridge.jpg" },
  { id: 2, title: "Study Visa Consultant", date: "7 August, 2025", author: "Adminjvt", img: "/images/blog2.jpg" },
  { id: 3, title: "Study in Australia", date: "11 July, 2025", author: "Adminjvt", img: "/images/australia.jpg" },
  { id: 4, title: "Study in Australia", date: "11 July, 2025", author: "Adminjvt", img: "/images/australia.jpg" },
  { id: 5, title: "USA Student Visa Advisor", date: "31 May, 2025", author: "Adminjvt", img: "/images/usavisa.jpg" },
  { id: 6, title: "Study Visa Consultant", date: "29 March, 2025", author: "Adminjvt", img: "/images/blogs.png" },
  { id: 7, title: "Study Visa Consultant", date: "29 March, 2025", author: "Adminjvt", img: "/images/blogs.png" },
  { id: 8, title: "Best Immigration Consultants", date: "03 March, 2025", author: "Adminjvt", img: "/images/ukstudy.jpg" },
  { id: 9, title: "Study Visa Consultants in Ferozepur", date: "20 September, 2025", author: "Adminjvt", img: "/images/ukbridge.jpg" },
];

const Blogsection = () => {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setPerPage(1);
      } else {
        setPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(blogs.length / perPage);
  const startIndex = page * perPage;
  const currentBlogs = blogs.slice(startIndex, startIndex + perPage);

  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <div className="blog-header-left">
            <h4 className="blog-gallery-title">Blogs</h4>
            <h2 className="blog-main-title">Latest News</h2>
          </div>
          <div className="blog-header-right">
            <p className="blog-subtext">
              Stay updated with our latest news and insights on education, scholarships, and study visas.
            </p>
          </div>
        </div>

        <div className="blog-grid">
          {currentBlogs.map((blog) => (
            <div key={blog.id} className={`blog-card ${blog.id === 2 ? "small-card" : ""}`}>
              <Link to={`/blog/${generateSlug(blog.title)}`} className="blog-card-link">
                {blog.id !== 2 && <img src={blog.img} alt={blog.title} className="blog-img" />}
                <div className="blog-overlay">
                  <div className="blog-info">
                    <span><FaCalendarAlt className="icon" /> {blog.date}</span>
                    <span><FaUser className="icon" /> {blog.author}</span>
                  </div>
                  <h3 className="blog-title">{blog.title}</h3>
                  <div className="blog-hover">
                    <h3>{blog.title}</h3>
                    <p>Read More &gt;&gt;</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="blog-dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              className={`dot ${i === page ? "active" : ""}`}
              onClick={() => setPage(i)}
            ></span>
          ))}
        </div>

        <div className="blog-footer">
          <Link to="/our-blogs"><button className="read-all-btn">Read All Blogs</button></Link>
        </div>
      </div>
    </section>
  );
};

export default Blogsection;
