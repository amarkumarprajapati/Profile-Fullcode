import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation, } from "framer-motion";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";

const Home = () => {
  const slides = [
    {
      id: 1,
      imageUrl: "original-3gif.gif",
      text: "Slide 1",
    },
    {
      id: 2,
      imageUrl: "original-2.gif",
      text: "Slide 2",
    },
    {
      id: 3,
      imageUrl: "original 1.gif",
      text: "Slide 3",
    },
    {
      id: 4,
      imageUrl: "original.gif",
      text: "Slide 4",
    },
  ];

  // diffrent
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    setTextVisible(true);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
    setTextVisible(true);
  };

  // section 2

  const [sectionbutton, setSectionButton] = useState(false);

  const toggleSectionButton = () => {
    setSectionButton(!sectionbutton);
  };

  // Scroll animation

  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      setIsVisible(true);
    }
  };




// while in view
















  return (
    <div className="loading-container">
      <div>
        <div className="Conatiner_1">
          <div className="slider1">
            <motion.img
              src={slides[currentSlide].imageUrl}
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{
                duration: "1",
                delay: "1",
              }}
              className="image4"
            />

            {/* Text */}
            <AnimatePresence>
              {slides[currentSlide].id === 1 && (
                <motion.h1
                  src={slides[currentSlide]}
                  className="texth1"
                  initial={{ x: -1000 }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: "1",
                    delay: "1.2",
                  }}>
                  {slides.text}
                  MERN STACK
                </motion.h1>
              )}
            </AnimatePresence>
            {/* ptag */}
            {slides[currentSlide].id === 1 && (
              <motion.p
                className="textp1"
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{
                  duration: "1",
                  delay: "1.3",
                }}>
                {slides.text}
                MongoDB
              </motion.p>
            )}
            {slides[currentSlide].id === 1 && (
              <motion.p
                className="textp2"
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{
                  duration: "1",
                  delay: "1.4",
                }}>
                {slides.text}MongoDB is a NoSQL database that stores data in a
                flexible, JSON-like format.
              </motion.p>
            )}

            {/* text-2 */}

            {slides[currentSlide].id === 2 && (
              <motion.h1
                src={slides[currentSlide]}
                className="texth1"
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{
                  duration: "1",
                  delay: "1.2",
                }}>
                {slides.text}
                Web Development
              </motion.h1>
            )}
            {/* ptag */}
            {slides[currentSlide].id === 2 && (
              <motion.p
                className="textp1"
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{
                  duration: "1",
                  delay: "1.3",
                }}>
                {slides.text}
                Node.js
              </motion.p>
            )}
            {slides[currentSlide].id === 2 && (
              <motion.p
                className="textp2"
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{
                  duration: "1",
                  delay: "1.4",
                }}>
                {slides.text}Node.js is a runtime environment JavaScript on the
                server.
              </motion.p>
            )}

            {/* text-3 */}

            {slides[currentSlide].id === 3 && (
              <motion.h1
                src={slides[currentSlide]}
                className="texth1"
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{
                  duration: "1",
                  delay: "1.2",
                }}>
                {slides.text}
                Web Development
              </motion.h1>
            )}

            {slides[currentSlide].id === 3 && (
              <motion.p
                className="textp1"
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{
                  duration: "1",
                  delay: "1.3",
                }}>
                {slides.text}
                Vite+React
              </motion.p>
            )}
            {slides[currentSlide].id === 3 && (
              <motion.p
                className="textp2"
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{
                  duration: "1",
                  delay: "1.4",
                }}>
                {slides.text}React is a JavaScript library for building user
                interfaces
              </motion.p>
            )}

            {/* text-4 */}

            {slides[currentSlide].id === 4 && (
              <motion.h1
                src={slides[currentSlide]}
                className="texth1"
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{
                  duration: "1",
                  delay: "1.2",
                }}>
                {slides.text}
                Web Development
              </motion.h1>
            )}

            {/* ptag */}
            {slides[currentSlide].id === 4 && (
              <motion.p
                className="textp1"
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{
                  duration: "1",
                  delay: "1.3",
                }}>
                {slides.text}
                Express.js
              </motion.p>
            )}

            {slides[currentSlide].id === 4 && (
              <motion.p
                className="textp2"
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{
                  duration: "1",
                  delay: "1.4",
                }}>
                {slides.text}Express.js is a back-end framework for Node.js
              </motion.p>
            )}
          </div>

          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={handleNextSlide}
            className="button1"></motion.button>
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={handlePrevSlide}
            className="button"></motion.button>
        </div>



        {/* section 2 */}
        <div className="section2">
          <div>
            <div className="sec">
              <VisibilitySensor
                onChange={handleVisibilityChange}
                partialVisibility
                offset={{ bottom: 100 }}>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 20,
                  }}
                  transition={{ duration: 1 }}
                  className="section_text1">
                  Hey, there! I’m a Motion & Interaction Designer based in
                  Viseu, Portugal. I focus on animation and Webflow development.
                </motion.h1>
              </VisibilitySensor>
            </div>

            {/* button */}
            <VisibilitySensor>
              <motion.button
                onClick={toggleSectionButton}
                whileTap={{ scaleX: 0.8 }}
                className="section_button">
                My Skill
              </motion.button>
            </VisibilitySensor>

            {/* popup */}

            {sectionbutton && (
              <div className="animat1">
                <div className="animat2">
                  <div className="h5processbar">
                    <h4 className="texth4tag">HTML</h4>
                    <img src="point.png" className="processbar1" />
                    <div className="processbar" />
                  </div>
                  <div className="h5processbar">
                    <h4 className="texth4tag">CSS</h4>
                    <img src="point.png" className="processbar1" />
                    <div className="processbar" />
                  </div>
                  <div className="h5processbar">
                    <h4 className="texth4tag">JavaScript</h4>
                    <img src="point.png" className="processbar1" />
                    <div className="processbar" />
                  </div>
                  <div className="h5processbar">
                    <h4 className="texth4tag">React</h4>
                    <img src="point.png" className="processbar1" />
                    <div className="processbar" />
                  </div>
                  <div className="h5processbar">
                    <h4 className="texth4tag">Framer-Motion</h4>
                    <img src="point.png" className="processbar1" />
                    <div className="processbar" />
                    <button className="button5" onClick={toggleSectionButton}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* section 3 */}
        <div className="headtag">
          <div className="head">
            <VisibilitySensor
              onChange={handleVisibilityChange}
              partialVisibility
              offset={{ bottom: 100 }}>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 1.5 }}
                className="headh1tag">
                Here’s what I can do to help:
              </motion.h1>
            </VisibilitySensor>
          </div>
          <div className="conat">
            <div className="text12">
              <VisibilitySensor
                onChange={handleVisibilityChange}
                partialVisibility
                offset={{ bottom: 100 }}>
                <motion.h1
                  className="h1text1">
                  Motion Graphics.
                </motion.h1>
              </VisibilitySensor>
              <VisibilitySensor
                onChange={handleVisibilityChange}
                partialVisibility
                offset={{ bottom: 100 }}>
                <motion.p2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 30,
                  }}
                  transition={{ duration: 2 }}
                  className="p1text1">
                  From small teasers, to explainers, to full storytelling
                  experiences, I will help you move ideas around.
                </motion.p2>
              </VisibilitySensor>
            </div>
            <div className="text13">
              <VisibilitySensor
                onChange={handleVisibilityChange}
                partialVisibility
                offset={{ bottom: 100 }}>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 20,
                  }}
                  transition={{ duration: 2 }}
                  className="h1text1">
                  Animated Interactions.
                </motion.h1>
              </VisibilitySensor>
              <VisibilitySensor
                onChange={handleVisibilityChange}
                partialVisibility
                offset={{ bottom: 100 }}>
                <motion.p2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 20,
                  }}
                  transition={{ duration: 2 }}
                  className="p1text1">
                  Use CSS for simple animations like transitions, transforms, and keyframes.
Employ libraries like GSAP or Anime.js for more complex animations and interactions.
                </motion.p2>
              </VisibilitySensor>
            </div>
            <div className="text14">
              <VisibilitySensor
                onChange={handleVisibilityChange}
                partialVisibility
                offset={{ bottom: 100 }}>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 20,
                  }}
                  transition={{ duration: 2 }}
                  className="h1text1">
                  Webflow Development.
                </motion.h1>
              </VisibilitySensor>
              <VisibilitySensor
                onChange={handleVisibilityChange}
                partialVisibility
                offset={{ bottom: 100 }}>
                <motion.p2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 20,
                  }}
                  transition={{ duration: 2 }}
                  className="p1text1">
                  From small teasers, to explainers, to full storytelling
                  experiences, I will help you move ideas around.
                </motion.p2>
              </VisibilitySensor>
            </div>
            <div className="text15">
              <VisibilitySensor
                onChange={handleVisibilityChange}
                partialVisibility
                offset={{ bottom: 100 }}>
                <motion.h1 className="h1text1">Education.</motion.h1>
              </VisibilitySensor>
              <VisibilitySensor>
                <motion.p2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 20,
                  }}
                  transition={{ duration: 2 }}
                  className="p1text1">
                  From small teasers, to explainers, to full storytelling
                  experiences, I will help you move ideas around.
                </motion.p2>
              </VisibilitySensor>
            </div>
          </div>
        </div>

        {/* section 4 */}
        <div>
          <div className="section8">
            <div className="automix" id="Service">
              <VisibilitySensor
                onChange={handleVisibilityChange}
                partialVisibility
                offset={{ bottom: 200 }}>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isVisible ? 2 : 0,
                    y: isVisible ? 0 : 30,
                  }}
                  transition={{ duration: 5 }}>
                  My Skills
                </motion.h1>
              </VisibilitySensor>
            </div>
            <div className="diplayflrex">
              <div className="margien">
                <motion.img
                  whileHover={{scale:1.1}}
                  src="html5-logo-31820.png"
                  alt="image"
                  className="image1"
                />
                <motion.img
                whileHover={{scale:1.1}}
                  src="CSS3_logo_and_wordmark.svg.png"
                  alt="image1"
                  className="image2"
                />
                <motion.img
                whileHover={{scale:1.1}} 
                src="Javascript.png"
                 alt="image2" 
                 className="image3" />
              </div>
              <div className="margien">
                <motion.img 
                whileHover={{scale:1.1}}
                src="three.png" 
                alt="image4" 
                className="image451" />
                <motion.img
                whileHover={{scale:1.1}}
                  src="framer-motion-seeklogo.com.png"
                  alt="image4"
                  className="image452"
                />
                <motion.img
                whileHover={{scale:1.1}}
                  src="mongo-removebg-preview.png"
                  alt="image4"
                  className="image453"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;