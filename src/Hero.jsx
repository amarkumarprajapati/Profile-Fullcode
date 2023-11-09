import Navbar from "./Components/Navbar";
import Home from "./Page/Home";
import About from "./Page/About";
import Work from "./Page/Work";
import Contact from "./Page/Contact";
import "./Style.css";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Cursor from "./Components/Cursor";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import React from "react";

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // Scroll
  const { scrollYProgress } = useScroll();

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="content"></div>
      )}
      <motion.div className="newbar" style={{ scaleX: scrollYProgress }} />
      <Navbar className="mouseho" />
      <Cursor />
      <Main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Work" element={<Work />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Main>
      <div>
      <Footer />
      </div>
    </>
  );
};

export default Hero;
