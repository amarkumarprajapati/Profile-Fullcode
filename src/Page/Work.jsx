import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Work = () => {
  const handleContactme = () => {
    window.open("./Contact", "_self");
  };

  return (
    <div>
      <div>
        <div className="Conatiner_4">
          <div className="slider11">
          <div>
          <div>
              <motion.h1 className="worktext_h1">
                What i've been up to
              </motion.h1>
              <motion.p className="worktext_p1">Work</motion.p>
              <motion.p className="worktext_p2">
                Here is a selectoin of project that woked on.
              </motion.p>
              <button className="button125" onClick={handleContactme}>
                Contact Me
              </button>
            </div>
            </div>
            <div className="imagedata">
              <motion.img src="ezgif.com-video-to.gif" className="image6" />
            </div>
          </div>
        </div>
        <div>
          {/* section */}

          <div className="section23">
            {/* 1 */}
            <div className="back23">
              <Link
                to="https://flightticketbooking.netlify.app/"
                target="_blank">
                <img src="1565.png" className="back25" />
              </Link>
            </div>
            <div>
              <Link
                to="https://flightticketbooking.netlify.app/"
                className="Linktag"
                target="_blank">
                <motion.h1
                  whileHover={{ scale: 1.1, x: 10 }}
                  className="colorchange">
                  Flight Booking
                </motion.h1>
              </Link>
              <p className="colorchange1">Dynamic Pages</p>
            </div>

            {/* 2 */}
            <div className="back23">
              <Link
                to="https://fooddeliveryquickbite.netlify.app/"
                target="_blank">
                <img src="Project 2.png" className="back26" />
              </Link>
            </div>
            <div>
              <Link
                className="Linktag"
                to="https://fooddeliveryquickbite.netlify.app/"
                target="_blank">
                <motion.h1
                  whileHover={{ scale: 1.1, x: 10 }}
                  className="colorchange">
                  Food Delivery
                </motion.h1>
              </Link>
              <motion.p className="colorchange1">Dynamic Pages</motion.p>
            </div>
            {/* 3 */}
            <div className="back23">
              <Link
                to="https://grosarydeliveryapp.netlify.app/"
                target="_blank">
                <img src="Project 1.png" className="back27" />
              </Link>
            </div>
            <div>
              <Link
                className="Linktag"
                to="https://grosarydeliveryapp.netlify.app/"
                target="_blank">
                <motion.h1
                  whileHover={{ scale: 1.1, x: 10 }}
                  className="colorchange">
                  Grosary Delivery
                </motion.h1>
              </Link>
              <motion.p className="colorchange1">Static</motion.p>
            </div>
            {/* 4 */}
            <div className="back23">
              <Link
                to="https://tshirtsnew.netlify.app/"
                target="_blank">
                <img src="Project 3.png" className="back28" />
              </Link>
            </div>
            <div>
              <Link
                to="https://tshirtsnew.netlify.app/"
                className="Linktag"
                target="_blank">
                <motion.h1
                  whileHover={{ scale: 1.1, x: 10 }}
                  className="colorchange">
                  T-shirts
                </motion.h1>
              </Link>
              <motion.p className="colorchange1">Static</motion.p>
            </div>
            {/* 5 */}
            <div className="back23">
              <Link
                to="https://oldprofile1.netlify.app"
                target="_blank">
                <img src="Project 40.png" className="back28" />
              </Link>
            </div>
            <div>
              <Link
                className="Linktag"
                to="https://oldprofile1.netlify.app"
                target="_blank">
                <motion.h1
                  whileHover={{ scale: 1.1, x: 10 }}
                  className="colorchange">
                  Old Portfolio
                </motion.h1>
              </Link>
              <motion.p className="colorchange1">Static</motion.p>
            </div>
            {/* 6 */}
            <div className="back23">
              <Link to="https://travelwebiste.netlify.app/" target="_blank">
                <img src="Project 4.png" className="back28" />
              </Link>
            </div>
            <div>
              <Link
                className="Linktag"
                to="https://travelwebiste.netlify.app/"
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
                to="https://magnificent-alfajores-b52b1a.netlify.app/"
                target="_blank">
                <img src="Project 9.png" className="back28" />
              </Link>
            </div>
            <div>
              <Link
                className="Linktag"
                to="https://magnificent-alfajores-b52b1a.netlify.app/"
                target="_blank">
                <motion.h1
                  whileHover={{ scale: 1.1, x: 10 }}
                  className="colorchange">
                  Login Page
                </motion.h1>
              </Link>
              <p whileHover={{ scale: 1.1, x: 10 }} className="colorchange1">
                Static
              </p>
            </div>
            {/* 8 */}
            <div className="back23">
              <Link to="https://musicplayerappnew.netlify.app/" target="_blank">
                <img src="Project 5.png" className="back28" />
              </Link>
            </div>
            <div>
              <Link
                className="Linktag"
                to="https://musicplayerappnew.netlify.app/"
                target="_blank">
                <motion.h1
                  whileHover={{ scale: 1.1, x: 10 }}
                  className="colorchange">
                  Music Player
                </motion.h1>
              </Link>
              <p className="colorchange1">Static</p>
            </div>
            {/* 9 */}
            <div className="back23">
              <Link
                to="https://main--zippy-kringle-c57aab.netlify.app/"
                target="_blank">
                <img src="Project 6.png" className="back28" />
              </Link>
            </div>
            <div>
              <Link
                className="Linktag"
                to="https://main--zippy-kringle-c57aab.netlify.app/"
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
