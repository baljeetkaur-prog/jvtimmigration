import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import "./Blogspage.css"; // wrapper styles
import "./Blogsection.css"; // card styles
import { generateSlug } from "./utils";
import { Helmet } from "react-helmet";

const blogs = [
  { id: 1, title: "Study Visa Consultants in Ferozepur", date: "20 September, 2025", author: "Adminjvt", img: "/images/ukbridge.jpg" },
  { id: 2, title: "Study Visa Consultant", date: "7 August, 2025", author: "Adminjvt", img: "/images/blog2.jpg" },
  { id: 3, title: "Study in Australia", date: "11 July, 2025", author: "Adminjvt", img: "/images/australia.jpg" },
  { id: 4, title: "Study in Australia", date: "11 July, 2025", author: "Adminjvt", img: "/images/australia.jpg" },
  { id: 5, title: "USA Student Visa Advisor", date: "31 May, 2025", author: "Adminjvt", img: "/images/usavisa.jpg" },
  { id: 6, title: "Study in Australia", date: "29 March, 2025", author: "Adminjvt", img: "/images/blogs.png" },
];

const Blogspage = () => {
  return (
    <>
                   <Helmet>
      <title>Check Latest Blogs and Updates | JVT Immigration</title>
    </Helmet>
      {/* Banner */}
      <div
        className="abouts-banner behind-nav"
        style={{ backgroundImage: `url('/images/bg-page-title.jpg')` }}
      >
        <div className="abouts-banner-content">
          <h1 className="aboutheading">Blog Grid</h1>
          <p className="abouts-breadcrumb">
            <Link to="/">Home</Link> - Blogs
          </p>
        </div>
      </div>

      {/* Blog Section */}
      <section className="blogs-page-section">
        <div className="blogs-page-container">
          {/* Heading */}
          <div className="blogs-intro">
            <h5 className="blogs-small-heading">Our Service Area</h5>
            <h2 className="blogs-big-heading">
              Learn something more from<br /> our blog
            </h2>
          </div>

          {/* Blog Grid */}
      <div className="blogs-page-grid">
  {blogs.map((blog, index) => {
  const hideImageIndexes = [1];
  const showImage = !hideImageIndexes.includes(index) && blog.img;

  return (
    <Link key={blog.id} to={`/blog/${generateSlug(blog.title)}`} className="blog-card">
      {showImage && <img src={blog.img} alt={blog.title} className="blog-img" />}
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
  );
})}

</div>

        </div>
      </section>
    </>
  );
};

export default Blogspage;
