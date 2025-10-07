import React from "react";
import { BrowserRouter } from "react-router-dom";
import Siteroutes from "./Siteroutes";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import ScrollToTopButton from "./ScrollToTopButton";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <ScrollToTop /> 
      {/* Routed content expands to push footer down */}
      <div className="main-content">
        <Siteroutes />
      </div>
      <Footer />
      <ScrollToTopButton/>
    </div>
  );
}

export default App;
