import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Work = () => {
  const handleContactme = () => {
    window.open("./Contact", "_self");
  };

  return (
    <div>
      <div>
        <div className="Conatiner_4">
          <div className="slider1">
            <motion.img src="ezgif.com-video-to.gif" className="image6" />

            {/* Text */}

            <motion.h1 className="worktext_h1">What i've been up to</motion.h1>

            {/* ptag */}
            <motion.p className="worktext_p1">Work</motion.p>
            <motion.p className="worktext_p2">
              Here is a selectoin of project that woked on.
            </motion.p>
            <button className="button125" onClick={handleContactme}>
              Contact Me
            </button>
          </div>
        </div>
        <div>
          {/* section */}

          <div className="section23">
            {/* 1 */}
            <div className="back23">
              <Link to="https://snazzy-alfajores-d038f5.netlify.app/" target="_blank">
                <img src="Project 1.png" className="back25" />
              </Link>
            </div>
            <div>
              <Link
                to="https://www.google.com"
                className="Linktag"
                target="_blank">
                <motion.h1
                  whileHover={{ scale: 1.1, x: 10 }}
                  className="colorchange">
                  Grocery Delivery
                </motion.h1>
              </Link>
              <p className="colorchange1">Dynamic Pages</p>
            </div>

            {/* 2 */}
            <div className="back23">
              <Link
                to="https://deft-gingersnap-196fec.netlify.app/"
                target="_blank">
                <img src="Project 2.png" className="back26" />
              </Link>
            </div>
            <div>
              <Link
                className="Linktag"
                to="https://deft-gingersnap-196fec.netlify.app/"
                target="_blank">
                <motion.h1
                  whileHover={{ scale: 1.1, x: 10 }}
                  className="colorchange">
                  Food delivery
                </motion.h1>
              </Link>
              <motion.p className="colorchange1">Dynamic Pages</motion.p>
            </div>
            {/* 3 */}
            <div className="back23">
              <Link
                to="https://darling-gingersnap-837acd.netlify.app/"
                target="_blank">
                <img src="Project 3.png" className="back27" />
              </Link>
            </div>
            <div>
              <Link
                className="Linktag"
                to="https://darling-gingersnap-837acd.netlify.app/"
                target="_blank">
                <motion.h1
                  whileHover={{ scale: 1.1, x: 10 }}
                  className="colorchange">
                  Customize t shirt
                </motion.h1>
              </Link>
              <motion.p className="colorchange1">Static</motion.p>
            </div>
            {/* 4 */}
            <div className="back23">
              <Link to="https://www.google.com" target="_blank">
                <img src="Project 40.png" className="back28" />
              </Link>
            </div>
            <div>
              <Link
                to="https://www.google.com"
                className="Linktag"
                target="_blank">
                <motion.h1
                  whileHover={{ scale: 1.1, x: 10 }}
                  className="colorchange">
                  Old portfolio website
                </motion.h1>
              </Link>
              <motion.p className="colorchange1">Static</motion.p>
            </div>
            {/* 5 */}
            <div className="back23">
              <Link
                to="https://euphonious-peony-7c42ff.netlify.app/"
                target="_blank">
                <img src="Project 5.png" className="back28" />
              </Link>
            </div>
            <div>
              <Link
                className="Linktag"
                to="https://euphonious-peony-7c42ff.netlify.app/"
                target="_blank">
                <motion.h1
                  whileHover={{ scale: 1.1, x: 10 }}
                  className="colorchange">
                  Music Player
                </motion.h1>
              </Link>
              <motion.p className="colorchange1">Static</motion.p>
            </div>
            {/* 6 */}
            <div className="back23">
              <Link
                to="https://precious-palmier-1e3227.netlify.app/"
                target="_blank">
                <img src="Project 4.png" className="back28" />
              </Link>
            </div>
            <div>
              <Link
                className="Linktag"
                to="https://precious-palmier-1e3227.netlify.app/"
                target="_blank">
                <motion.h1
                  whileHover={{ scale: 1.1, x: 10 }}
                  className="colorchange">
                  Travels
                </motion.h1>
              </Link>
              <motion.p className="colorchange1">Static</motion.p>
            </div>
            {/* 7 */}
            <div className="back23">
              <Link
                to="https://shimmering-sopapillas-ca4e2b.netlify.app/"
                target="_blank">
                <img src="Project 7.png" className="back28" />
              </Link>
            </div>
            <div>
              <Link
                className="Linktag"
                to="https://shimmering-sopapillas-ca4e2b.netlify.app/"
                target="_blank">
                <motion.h1
                  whileHover={{ scale: 1.1, x: 10 }}
                  className="colorchange">
                  3D
                </motion.h1>
              </Link>
              <p whileHover={{ scale: 1.1, x: 10 }} className="colorchange1">
                Static
              </p>
            </div>
            {/* 8 */}
            <div className="back23">
              <Link
                to="https://quiet-pavlova-6e0690.netlify.app/"
                target="_blank">
                <img src="Project 8.png" className="back28" />
              </Link>
            </div>
            <div>
              <Link
                className="Linktag"
                to="https://quiet-pavlova-6e0690.netlify.app/"
                target="_blank">
                <motion.h1
                  whileHover={{ scale: 1.1, x: 10 }}
                  className="colorchange">
                  Lamp
                </motion.h1>
              </Link>
              <p className="colorchange1">Static</p>
            </div>
            {/* 9 */}
            <div className="back23">
              <Link
                to="https://marvelous-cupcake-55a8f2.netlify.app/"
                target="_blank">
                <img src="Project 6.png" className="back28" />
              </Link>
            </div>
            <div>
              <Link
                className="Linktag"
                to="https://marvelous-cupcake-55a8f2.netlify.app/"
                target="_blank">
                <motion.h1
                  whileHover={{ scale: 1.1, x: 10 }}
                  className="colorchange">
                  Cosmetic
                </motion.h1>
              </Link>
              <p className="colorchange1">Static</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
