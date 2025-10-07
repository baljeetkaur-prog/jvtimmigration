import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import Box from "./Box";
import Aboutsection from "./Aboutsection";
import Countries from "./Countries";
import Countersection from "./Countersection";
import Whychooseus from "./Whychooseus";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Homeform from "./Homeform";
import Blogsection from "./Blogsection";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Home = () => {
  const [content, setContent] = useState("");

  // SEO fields can come from CMS directly or hardcoded for now
  const title = "Best Study Visa Consultants Ferozepur-Ludhiana-Mohali | JVT Immigration";
  const metaDescription =
    "JVT Immigration provides expert study visa consultancy for Canada, USA, UK, Australia, and New Zealand from Ferozepur, Ludhiana, and Mohali.";

  useEffect(() => {
    fetch("/content/pages/home.md") // path to your Markdown file
      .then(res => res.text())
      .then(text => setContent(text));
  }, []);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <main className="main-content">
        <Carousel />
        <Box />
        <Aboutsection />
        <Countries />
        <Countersection />
        <Whychooseus />
        <Gallery />
        <Testimonials />
        <Homeform />
        <Blogsection />

        {/* Render Markdown content */}
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </main>
    </>
  );
};

export default Home;
