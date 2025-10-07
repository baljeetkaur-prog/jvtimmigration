import { Link, useParams } from "react-router-dom";
import { FaCalendarAlt, FaUserCircle, FaChevronRight, FaSearch } from "react-icons/fa";
import { useState } from "react";
import blogs from "./Blogsdata";
import "./Blogdetail.css"; 
import "./Categorypage.css";
import { generateSlug } from "./utils";
import { Helmet } from "react-helmet";

// Helper to convert slug to display text
const slugToDisplay = (slug) => {
  if (!slug) return "";
  const words = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1));
  return words.join(" ");
};

const Categorypage = () => {
  const { category } = useParams(); 
  const displayCategory = slugToDisplay(category);

  const categoryBlogs = blogs.filter(
    (b) => generateSlug(b.category) === category
  );

  // --- SEARCH STATE ---
  const [searchTerm, setSearchTerm] = useState("");
   const [inputValue, setInputValue] = useState("");

  // Filter blogs based on search term
  const filteredBlogs = blogs.filter((b) => {
    const contentText = b.content.map(c => c.text || c.items?.join(" ") || "").join(" ").toLowerCase();
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
  <title>{displayCategory} - JVT Immigration Consultant</title>
  <meta
    name="description"
    content={`Read the latest blogs and articles about ${displayCategory} on JVT Immigration.`}
  />
</Helmet>
      {/* Banner */}
      <div
        className="abouts-banner behind-nav"
        style={{ backgroundImage: `url('/images/bg-page-title.jpg')` }}
      >
        <div className="abouts-banner-content">
          <h1 className="aboutheading">{displayCategory}</h1>
          <p className="abouts-breadcrumb">
            <Link to="/">Home</Link> - {displayCategory}
          </p>
        </div>
      </div>

      {/* Main Section */}
      <section className="blog-detail-section">
        <div className="blog-detail-container">

          {/* Left: Blog Cards */}
          <div className="category-left">
            {(categoryBlogs.length === 0 && searchTerm === "") && <p>No blogs found in this category.</p>}
            {(searchTerm ? filteredBlogs : categoryBlogs).map((blog) => {
              const firstParagraph = blog.content.find(c => c.type === "paragraph")?.text || "";
              const hasImage = blog.img || blog.mainImg;

              return (
                <div key={blog.id} className="category-blog-card">
                  {hasImage && (
                    <div className="card-image-wrapper">
                      <img
                        src={blog.img || blog.mainImg}
                        alt={blog.title}
                        className="category-blog-img"
                      />
                      <div className="date-overlay">
                        <div className="date-day">{new Date(blog.date).getDate()}</div>
                        <div className="date-month-year">
                          {new Date(blog.date).toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric",
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className={`category-blog-content ${!hasImage ? "full-width" : ""}`}>
                    <h3>{blog.title}</h3>
                    <p className="blog-meta">
                      <FaUserCircle className="meta-icon" />
                      <span className="author">adminjvt</span>
                    </p>
                    <p
                      className="blog-snippet"
                      dangerouslySetInnerHTML={{
                        __html:
                          blog.content
                            .map(c => {
                              if (c.type === "paragraph") return c.text;
                              if (c.type === "list") return c.items.join(" ");
                              return "";
                            })
                            .join(" ")
                            .substring(0, 400) + "..."
                      }}
                    />

                    <div className="read-more-wrapper">
                      <span className="read-more-arrow">{">"}</span>
                      <Link to={`/blog/${generateSlug(blog.title)}`} className="read-more">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
            {searchTerm && filteredBlogs.length === 0 && <p>No results found for "{searchTerm}"</p>}
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

export default Categorypage;
