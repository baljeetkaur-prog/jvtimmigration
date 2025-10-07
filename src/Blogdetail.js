import { Link, useParams } from "react-router-dom";
import { FaCalendarAlt, FaChevronRight, FaSearch, FaUserCircle } from "react-icons/fa";
import blogs from "./Blogsdata";
import "./Blogdetail.css";
import { generateSlug } from "./utils";
import { Helmet } from "react-helmet";
import { useState } from "react";

const Blogdetail = () => {
  const [searchTerm, setSearchTerm] = useState("");
const [inputValue, setInputValue] = useState("");
  const { slug } = useParams();
  const blog = blogs.find((b) => generateSlug(b.title) === slug);
  if (!blog) return <p>Blog not found</p>;

  // Format date as "Month Date, Year"
  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const filteredBlogs = blogs.filter((b) => {
  const contentText = b.content
    .map((c) => c.text || c.items?.join(" ") || "")
    .join(" ")
    .toLowerCase();
    
  return (
    b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contentText.includes(searchTerm.toLowerCase())
  );
});
const handleSearchKeyPress = (e) => {
  if (e.key === "Enter") {
    setSearchTerm(inputValue);
  }
};

  return (
    <>
    <Helmet>
  <title>{blog.title} | JVT Immigration Consultant</title>
</Helmet>
      {/* Banner Section */}
      <div
        className="abouts-banner behind-nav"
        style={{ backgroundImage: `url('/images/bg-page-title.jpg')` }}
      >
        <div className="abouts-banner-content">
          <h1 className="aboutheading">{blog.title}</h1>
          <p className="abouts-breadcrumb">
            <Link to="/">Home</Link> -{" "}
            <Link to={`/category/${generateSlug(blog.category)}`}>{blog.category}</Link> -{" "}
            <span>{blog.title}</span>
          </p>
        </div>
      </div>

      {/* Main Section */}
      <section className="blog-detail-section">
        <div className="blog-detail-container">
          {/* Left Content */}
          <div className="blog-detail-left">
            {/* Full-width image */}
            {blog.mainImg && (
              <div className="blog-main-img-wrapper">
                <img src={blog.mainImg} alt={blog.title} className="blog-main-img" />
                <Link
                  to={`/category/${generateSlug(blog.category)}`}
                  className="overlay-btn"
                >
                  {blog.category}
                </Link>
              </div>
            )}

            {/* Content inside padded container */}
            <div className="blog-content-wrapper">
              <p className="blog-meta">
                <FaCalendarAlt className="meta-icon" /> {formattedDate} /{" "}
                <FaUserCircle className="meta-icon" /> {blog.author}
              </p>
              <h1 className="blogdetail-title">{blog.title}</h1>

              <h2 className="blogdetail-subtitle">{blog.subtitle}</h2>

              <div className="blog-content">
                {blog.content.map((section, idx) => {
                  switch (section.type) {
                    case "heading":
                      return <h3 key={idx}>{section.text}</h3>;
                    case "paragraph":
                      return (
                        <p key={idx} dangerouslySetInnerHTML={{ __html: section.text }} />
                      );
                    case "image":
                      return (
                        <img
                          key={idx}
                          src={section.src}
                          alt={section.alt}
                          className="blog-center-img"
                        />
                      );
                    case "list":
                      return (
                        <ul key={idx}>
                          {section.items.map((item, i) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                          ))}
                        </ul>
                      );
                    default:
                      return null;
                  }
                })}
              </div>

              {/* Tags */}
              <div className="blog-tags-wrapper">
                <span className="tags-heading">Tags:</span>
                {blog.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="blog-detail-right">
            {/* Search */}
            <div className="sidebar-search">
              <div className="search-input-wrapper">
                <FaSearch className="search-icon" />
              <input
  type="text"
  placeholder="Search..."
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  onKeyDown={handleSearchKeyPress} // trigger search on Enter
/>
              </div>
             {searchTerm && (
  <div className="sidebar-search-results">
    <h4 className="search-results-heading">Search Results</h4>
    {filteredBlogs.length === 0 ? (
      <p>No results found for "{searchTerm}"</p>
    ) : (
      <ul>
        {filteredBlogs.map((b) => (
          <li key={b.id}>
            <Link to={`/blog/${generateSlug(b.title)}`} className="list-content">
              <FaChevronRight className="arrow-icon" /> {b.title}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </div>
)}

            </div>

            {/* Categories */}
            <div className="sidebar-categories">
              <h4 className="blog-categories">Categories</h4>
              <ul>
                {["Business", "Study Abroad", "Study Consultants"].map((cat, i) => (
                  <li key={i}>
                    <Link to={`/category/${generateSlug(cat)}`} className="list-content">
                      <FaChevronRight className="arrow-icon" /> {cat}
                    </Link>
                    <span className="badge">{blogs.filter(b => b.category === cat).length}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="sidebar-recent-posts">
              <h4 className="recent-blog-posts">Recent Posts</h4>
              <ul>
                {blogs.slice(0, 5).map((b) => (
                  <li key={b.id}>
                    <span className="list-content">
                      <FaChevronRight className="arrow-icon" />
                      <Link to={`/blog/${generateSlug(b.title)}`}>{b.title}</Link>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery */}
            <div className="sidebar-gallery">
              <h4 className="blog-gallery">Gallery</h4>
              <div className="gallery-grid">
                <img src="/images/gallery-01.jpg" alt="" />
                <img src="/images/gallery-02.jpg" alt="" />
                <img src="/images/gallery-03.jpg" alt="" />
                <img src="/images/gallery-04.jpg" alt="" />
                <img src="/images/gallery-05.jpg" alt="" />
                <img src="/images/gallery-06.jpg" alt="" />
              </div>
            </div>

            {/* Tags */}
            <div className="sidebar-tags">
              <h4 className="blog-tags">Tags</h4>
              <div className="tags-grid">
                <span>study visa</span>
                <span>visa consultants</span>
                <span>UK education</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogdetail;
